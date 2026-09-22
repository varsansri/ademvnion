"""Compile the SO-ARM101 explorer data: URDF + parts knowledge -> data.json,
and a static, indexable HTML page that the explorer script enhances."""
import json, os, sys, html, xml.etree.ElementTree as ET
sys.path.insert(0, os.path.join(os.path.dirname(__file__), 'so101'))
from parts import PARTS, EXTRA, SERVO, JOINTS, PLA_DENSITY, PRINT_FILL  # noqa: E402

HERE = os.path.dirname(os.path.abspath(__file__))
RAW = os.path.join(HERE, 'so101', 'raw')
OUT = os.path.join(HERE, 'so-arm101')
os.makedirs(OUT, exist_ok=True)

mesh_info = json.load(open(os.path.join(HERE, 'so101', 'mesh_info.json')))
root = ET.parse(os.path.join(RAW, 'so101.urdf')).getroot()

def f3(s): return [round(float(x), 6) for x in s.split()]

links, joints = [], []
instances = []            # one entry per rendered piece
count = {}
for l in root.findall('link'):
    name = l.get('name')
    mass = l.find('inertial/mass')
    vis = []
    for i, v in enumerate(l.findall('visual')):
        mesh = v.find('geometry/mesh').get('filename').split('/')[-1][:-4]
        o = v.find('origin')
        key = 'sts3215' if mesh.startswith('sts3215') else mesh
        count[key] = count.get(key, 0) + 1
        inst = dict(id=f'{name}/{i}', link=name, mesh=mesh, part=key,
                    xyz=f3(o.get('xyz')) if o is not None else [0, 0, 0],
                    rpy=f3(o.get('rpy')) if o is not None else [0, 0, 0])
        vis.append(inst['id']); instances.append(inst)
    links.append(dict(name=name, mass=float(mass.get('value')) if mass is not None else 0, visuals=vis))

# The driver board is not in the CAD: a green box on the outer face of its mounting plate.
plate = next(i for i in instances if i['mesh'] == 'waveshare_mounting_plate_so101_v2')
instances.append(dict(id='base_link/board', link='base_link', mesh=None, part='waveshare_board',
                      box=[0.008, 0.040, 0.050], color='#1f7a4d',
                      xyz=[plate['xyz'][0] - 0.0085, plate['xyz'][1], plate['xyz'][2] + 0.002], rpy=[0, 0, 0]))
links[0]['visuals'].append('base_link/board')

for j in root.findall('joint'):
    o = j.find('origin'); ax = j.find('axis'); lim = j.find('limit')
    name = j.get('name')
    label, desc = JOINTS.get(name, (name, ''))
    joints.append(dict(name=name, type=j.get('type'), parent=j.find('parent').get('link'), child=j.find('child').get('link'),
                       xyz=f3(o.get('xyz')), rpy=f3(o.get('rpy')), axis=f3(ax.get('xyz')) if ax is not None else [0, 0, 1],
                       lower=float(lim.get('lower')) if lim is not None else 0, upper=float(lim.get('upper')) if lim is not None else 0,
                       label=label, desc=desc))

chain = []
_cur = next(l['name'] for l in links if l['name'] not in {j['child'] for j in joints})
while True:
    nxt = [j for j in joints if j['parent'] == _cur and j['type'] == 'revolute']
    if not nxt: break
    chain.append(nxt[0]); _cur = nxt[0]['child']
joints = chain + [j for j in joints if j not in chain]

# Parts catalogue
catalogue = []
for key, p in PARTS.items():
    vol = mesh_info[key]['volume_cm3']
    catalogue.append(dict(id=key, name=p['name'], short=p['name'], category=p['category'], qty=count.get(key, 0),
                          mass_g=round(vol * PLA_DENSITY * PRINT_FILL), mass_note='estimate from print volume', volume_cm3=vol,
                          price_usd=0, price_note='included in the ~$25 print cost for the whole arm',
                          made_of=p['made_of'], print=p['print'], what=p['what'], why=p['why'], remove=p['remove'],
                          spec=[['Print volume', f'{vol:.0f} cm³ solid'], ['Triangles in CAD', f"{mesh_info[key]['orig']:,}"]], inside=[], shown=True, on_arm=True))
s = dict(SERVO); s.update(id='sts3215', qty=count.get('sts3215', 0), shown=True, on_arm=True)
catalogue.append(s)
for e in EXTRA:
    e = dict(e); e.setdefault('shown', True); e.setdefault('spec', []); e.setdefault('inside', [])
    e['on_arm'] = e['id'] in ('waveshare_board', 'servo_cables', 'servo_screws')
    catalogue.append(e)

order = {'actuator': 0, 'electronics': 1, 'structure': 2, 'fastener': 3, 'tool': 4}
catalogue.sort(key=lambda p: (order[p['category']], -p.get('price_usd', 0)))

total_mass = sum(p['mass_g'] * p['qty'] for p in catalogue if p.get('on_arm'))
total_cost = sum(p['price_usd'] * p['qty'] for p in catalogue) + 25  # + printing

data = dict(
    robot=dict(id='so-arm101', name='SO-ARM101', maker='The Robot Studio', license='Apache-2.0',
               source='https://github.com/TheRobotStudio/SO-ARM100', dof=6, reach_m=0.45,
               total_mass_g=round(total_mass), total_cost_usd=round(total_cost, 2),
               summary='A six-motor, 3D-printed robot arm that costs about $120 in parts. It is the arm Hugging Face uses to teach robots by demonstration (LeRobot), and one of the most-built open robots in the world.'),
    links=links, joints=joints, instances=instances, parts=catalogue,
)
PUB = os.path.join(HERE, 'public', 'so-arm101')
os.makedirs(PUB, exist_ok=True)
json.dump(data, open(os.path.join(PUB, 'data.json'), 'w'), separators=(',', ':'))

# ---- static HTML (indexable) ----
def esc(x): return html.escape(str(x))
cat_names = {'actuator': 'Actuators', 'electronics': 'Electronics', 'structure': '3D-printed structure', 'fastener': 'Fasteners', 'tool': 'Tools & mounting'}
parts_html = []
for cat in ['actuator', 'electronics', 'structure', 'fastener', 'tool']:
    ps = [p for p in catalogue if p['category'] == cat]
    if not ps: continue
    parts_html.append(f'<h3 id="{cat}">{cat_names[cat]}</h3>')
    for p in ps:
        spec = ''.join(f'<li><b>{esc(k)}:</b> {esc(v)}</li>' for k, v in p.get('spec', []))
        inside = ''.join(f'<li><b>{esc(k)}</b> — {esc(v)}</li>' for k, v in p.get('inside', []))
        parts_html.append(f'''<article class="part" id="part-{esc(p['id'])}" data-part="{esc(p['id'])}">
  <h4>{esc(p['name'])} <span class="qty">× {p['qty']}</span></h4>
  <p class="meta">{esc(p['made_of'])} · ≈ {p['mass_g']} g each · {('$%.2f each' % p['price_usd']) if p.get('price_usd') else esc(p.get('price_note', 'included'))}</p>
  <p><b>What it is.</b> {esc(p['what'])}</p>
  <p><b>Why it is there.</b> {esc(p['why'])}</p>
  {('<ul class="spec">' + spec + '</ul>') if spec else ''}
  {('<p><b>Inside it:</b></p><ul class="inside">' + inside + '</ul>') if inside else ''}
  <p><b>Take it out and…</b> {esc(p['remove'])}</p>
  {('<p><a href="%s" rel="nofollow noopener" target="_blank">Where to buy →</a></p>' % esc(p['buy'])) if p.get('buy') else ''}
</article>''')

joints_html = ''.join(f'<li><b>{esc(j["label"])}</b> — {esc(j["desc"])} Range {round(j["lower"]*57.2958)}° to {round(j["upper"]*57.2958)}°.</li>' for j in joints if j['type'] == 'revolute')
faq = [
    ('How much does it cost to build the SO-ARM101?', f'About ${round(total_cost)} for one follower arm: six STS3215 servos (~$83), the driver board ($10.60), power supply, cable, clamps and roughly $25 of 3D printing. A leader arm for teleoperation roughly doubles it.'),
    ('How strong is the SO-ARM101?', 'Each STS3215 servo stalls at about 1.6 N·m (16.5 kg·cm) at 6 V. With a 45 cm reach the arm lifts roughly 200–300 g at full extension; the 12 V servo variant nearly doubles that.'),
    ('How many parts are in it?', f'{sum(p["qty"] for p in catalogue if p["category"]=="structure")} 3D-printed parts, 6 servos, 1 driver board, 6 bus cables and the screws that ship with the servos.'),
    ('Is it really open source?', 'Yes — the CAD, STL and STEP files, URDF, and bill of materials are published under Apache-2.0 by The Robot Studio. This explorer uses those files unchanged apart from mesh simplification.'),
    ('Can I change parts here?', 'Yes. Click any part to read about it, hide it to see what it was holding, pull the exploded-view slider to separate the assembly, and move every joint with the sliders.'),
]
faq_html = ''.join(f'<details><summary>{esc(q)}</summary><p>{esc(a)}</p></details>' for q, a in faq)
faq_ld = json.dumps({'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': q, 'acceptedAnswer': {'@type': 'Answer', 'text': a}} for q, a in faq]})

page = f'''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Inside the SO-ARM101 — Every Part of an Open-Source Robot Arm</title>
<meta name="description" content="Interactive teardown of the SO-ARM101 robot arm: all {len(instances)} parts in 3D — servos, gears, encoder, driver board, printed links. Click any part to learn what it does, hide it, explode the assembly, move the joints.">
<link rel="canonical" href="https://ademvnion.com/inside/so-arm101/">
<meta property="og:title" content="Inside the SO-ARM101 — every part, explained">
<meta property="og:description" content="Click any part of a real open-source robot arm and see what it is, why it is there, and what breaks without it.">
<meta name="theme-color" content="#07080b">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 32 32%27%3E%3Crect x=%272%27 y=%272%27 width=%2728%27 height=%2728%27 rx=%278%27 fill=%27%2307080b%27 stroke=%27%23f4f5f7%27 stroke-width=%272.5%27/%3E%3Ctext x=%2716%27 y=%2722%27 text-anchor=%27middle%27 font-family=%27system-ui%27 font-weight=%27700%27 font-size=%2717%27 fill=%27%23f4f5f7%27%3EA%3C/text%3E%3C/svg%3E">
<!-- Umami. Every page needs its own copy: four static builds, no shared include. -->
<script defer src="https://cloud.umami.is/script.js" data-website-id="473ac96b-268f-4710-9840-e8f27f67fac9"></script>
<script type="application/ld+json">{faq_ld}</script>
<script type="module" src="/src/explorer.ts"></script>
</head>
<body>
<header class="top">
  <a class="brand" href="/"><span class="mark">A</span> Adem <em>Inside</em></a>
  <nav><a href="/inside/">All robots</a><a href="/app/">Forge — design your own</a></nav>
</header>
<main>
  <section class="hero">
    <h1>Inside the SO-ARM101</h1>
    <p class="lede">{esc(data['robot']['summary'])} Below is every part of it — click one.</p>
    <p class="totals"><span><b>{len(instances)}</b> parts shown</span><span><b>6</b> motors</span><span><b>≈{round(total_mass)} g</b></span><span><b>≈${round(total_cost)}</b> to build</span><span><b>45 cm</b> reach</span></p>
  </section>
  <section id="explorer" class="explorer">
    <div class="stage" id="stage"><noscript>The interactive 3D view needs JavaScript. The full parts list is below.</noscript></div>
    <aside class="side" id="side"></aside>
  </section>
  <section class="content">
    <h2>What the six joints do</h2>
    <ul class="joints">{joints_html}</ul>
    <h2>Every part, explained</h2>
    <p class="src">Source files: <a href="{esc(data['robot']['source'])}" rel="noopener" target="_blank">TheRobotStudio/SO-ARM100</a> (Apache-2.0). Parts, prices and figures follow the project README; printed-part masses are estimates from print volume.</p>
    {''.join(parts_html)}
    <h2>Questions people ask</h2>
    {faq_html}
    <p class="cta">Want to design your own arm and test whether its motors can lift the load? <a href="/app/">Open Adem Forge</a> — free robot design software in your browser.</p>
  </section>
</main>
<footer><span>© 2026 Adem · SO-ARM101 by The Robot Studio, Apache-2.0 · meshes simplified for the web</span><a href="mailto:hello@ademvnion.com">hello@ademvnion.com</a></footer>
</body>
</html>'''
open(os.path.join(OUT, 'index.html'), 'w', encoding='utf-8').write(page)
print('instances', len(instances), 'parts', len(catalogue), 'mass', round(total_mass), 'cost', round(total_cost, 2))
