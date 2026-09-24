"""Build every photo-teardown page from teardowns.py.

For each robot this writes /inside/<slug>/index.html twice: into ../inside/
(what Cloudflare serves) and into public/ (so `npx vite build`, which empties
../inside, copies it back). It also rewrites the robot cards on /inside/ and
the whole sitemap.xml.

Run: python build_teardowns.py      then: python make_ai.py
"""
import html
import io
import json
import os

from teardowns import GO2_KEYS, TEARDOWNS

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.join(HERE, '..')
SITE = 'https://ademvnion.com'
UPDATED = '2026-09-24'
CSS = io.open(os.path.join(HERE, 'teardown.css'), encoding='utf-8').read()

STATUS = {
    'h': ('Read', 'var(--read)'),
    'm': ('Matched', 'var(--matched)'),
    'x': ('Ground blank', 'var(--hidden)'),
    'i': ('Inferred', 'var(--inferred)'),
    'n': ('Not visible', 'var(--unseen)'),
}
STATUS_HELP = {
    'h': '<b>Read</b>: the name is printed on the part and legible.',
    'm': '<b>Matched</b>: not fully legible here, identified another way.',
    'x': '<b>Ground blank</b>: the maker removed the marking.',
    'i': '<b>Inferred</b>: our best reading, explained.',
    'n': '<b>Not visible</b>: under a shield or too small to read.',
}

# Hand-built pages that are part of the library too.
STATIC_CARDS = [
    {'slug': 'unitree-go2', 'name': 'Unitree Go2', 'kind': 'Robot dog',
     'tag': 'Every part in 3D',
     'blurb': 'Rockchip RK3588S brain, Quectel 4G, Wi-Fi 6, UWB, twelve leg motors, and the chips Unitree ground blank.'},
    {'slug': 'so-arm101', 'name': 'SO-ARM101', 'kind': 'Robot arm',
     'tag': 'Open CAD · 18 parts',
     'blurb': 'The $120 3D-printed arm used by Hugging Face LeRobot: six STS3215 servos, one driver board.'},
]
CARD_BLURB = {
    'segway-navimow-x3': 'Allwinner MR527, Quectel 4G for network RTK, a GD32 motor controller and a 276.5 Wh battery. Nothing hidden.',
    'roborock-qrevo-curv-2-flow': 'The 5200 mAh battery, the LiDAR board and every signal on it, and the "Beryl Lite" main board.',
    'unitree-g1': 'The RK3588S brain the Go2 hides, readable here. Two sizes of joint driver, the IMU board, project 711.',
    'unitree-go1': 'NVIDIA Jetson modules, a Raspberry Pi CM4, stereo cameras, and the same 4G card as the Go2.',
}
CARD_TAG = {
    'segway-navimow-x3': 'Robot mower',
    'roborock-qrevo-curv-2-flow': 'Robot vacuum',
    'unitree-g1': 'Humanoid',
    'unitree-go1': 'Robot dog',
}

e = html.escape


def shared_index():
    """key -> [(slug, name, part label)] across every robot, Go2 included."""
    idx = {}
    for t in TEARDOWNS:
        for part, printed, role, st, key in t['table']:
            if key:
                idx.setdefault(key, []).append((t['slug'], t['name'], f'{part}: {printed}'))
    for key, label in GO2_KEYS['keys'].items():
        idx.setdefault(key, []).append((GO2_KEYS['slug'], GO2_KEYS['name'], label))
    return idx


SHARED = shared_index()


def head(t):
    url = f"{SITE}/inside/{t['slug']}/"
    crumbs = {'@context': 'https://schema.org', '@type': 'BreadcrumbList', 'itemListElement': [
        {'@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': SITE + '/'},
        {'@type': 'ListItem', 'position': 2, 'name': 'Inside real robots', 'item': SITE + '/inside/'},
        {'@type': 'ListItem', 'position': 3, 'name': t['name'], 'item': url}]}
    faq = {'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [
        {'@type': 'Question', 'name': q, 'acceptedAnswer': {'@type': 'Answer', 'text': a}} for q, a in t['qa']]}
    ld = lambda o: '<script type="application/ld+json">' + json.dumps(o, ensure_ascii=False, separators=(',', ':')) + '</script>'
    return f'''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<link rel="preload" href="/fonts/space-mono-700.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/space-grotesk.woff2" as="font" type="font/woff2" crossorigin>
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{e(t['title'])}</title>
<meta name="description" content="{e(t['description'])}">
<link rel="canonical" href="{url}">
<meta name="theme-color" content="#07080b">
<meta property="og:site_name" content="Ademvnion">
<meta property="og:type" content="article">
<meta property="og:url" content="{url}">
<meta property="og:title" content="{e(t['og'])}">
<meta property="og:description" content="{e(t['description'])}">
<meta property="og:image" content="https://ademvnion.com/img/og.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Ademvnion — Human, enhanced">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{e(t['og'])}">
<meta name="twitter:description" content="{e(t['description'])}">
<meta name="twitter:image" content="https://ademvnion.com/img/og.jpg">
{ld(crumbs)}
{ld(faq)}
<!-- Umami. Every page needs its own copy: static builds, no shared include. -->
<script defer src="https://cloud.umami.is/script.js" data-website-id="473ac96b-268f-4710-9840-e8f27f67fac9"></script>
<link rel="icon" href="/img/favicon.ico" sizes="32x32">
<link rel="icon" type="image/png" href="/img/icon-48.png" sizes="48x48">
<link rel="icon" type="image/png" href="/img/icon-96.png" sizes="96x96">
<link rel="icon" type="image/png" href="/img/icon-192.png" sizes="192x192">
<link rel="icon" type="image/png" href="/img/icon-512.png" sizes="512x512">
<link rel="apple-touch-icon" href="/img/apple-touch-icon.png">
<style>
{CSS}
</style>
</head>
'''


def page(t):
    used = []
    for p in t['parts']:
        if p['status'] not in used:
            used.append(p['status'])
    for row in t['table']:
        if row[3] not in used:
            used.append(row[3])
    used = [s for s in 'hmxin' if s in used]
    legend = ''.join(f'<span><i style="--c:{STATUS[s][1]}"></i>{STATUS[s][0]}</span>' for s in used)
    stats = ''.join(f'<div class="stat"><b>{e(b)}</b><span>{e(sp)}</span></div>' for b, sp in t['stats'])
    short = ''.join(f'<div><span>{e(a)}</span><b>{e(b)}</b><small>{e(c)}</small></div>' for a, b, c in t['short'])

    out = [head(t), '<body>\n<header class="top">\n'
           '  <a class="brand" href="/"><img class="mark" src="/img/logo-80.webp" width="26" height="26" alt="" decoding="async"> Adem <em>Inside</em></a>\n'
           '  <nav><a href="/inside/">All robots</a><a href="/app/">Forge — design your own</a></nav>\n</header>\n<main>\n',
           f'  <p class="crumbs"><a href="/">Home</a> / <a href="/inside/">Inside real robots</a> / {e(t["name"])}</p>\n',
           '  <section class="hero">\n    <div>\n'
           f'      <p class="eyebrow">Teardown · {e(t["kind"])}</p>\n'
           f'      <h1>{t["h1"]}</h1>\n'
           f'      <p class="lede">{t["lede"]}</p>\n'
           '    </div>\n    <div>\n'
           f'      <div class="stats">{stats}</div>\n'
           f'      <div class="legend">{legend}</div>\n'
           '    </div>\n  </section>\n\n',
           f'  <h2>The short answer</h2>\n  <div class="short">{short}</div>\n\n']

    if t.get('boards'):
        cards = ''.join(f'<div><b>{e(n)}</b><span>{e(sub)}</span><p>{e(note)}</p></div>' for n, sub, note in t['boards'])
        out.append('  <h2>The boards</h2>\n  <p class="sub">Board names as printed on the boards; sizes are approximate.</p>\n'
                   f'  <div class="boards">{cards}</div>\n\n')

    out.append('  <h2>Every part, and how sure we are</h2>\n'
               f'  <p class="sub">{" ".join(STATUS_HELP[s] for s in used)}</p>\n  <div class="parts">\n')
    for p in t['parts']:
        body = ''.join(f'<p>{x}</p>' for x in p['paras'])
        if p.get('bullets'):
            body += '<ul>' + ''.join(f'<li>{b}</li>' for b in p['bullets']) + '</ul>'
        out.append(f'  <article class="part" id="p-{p["id"]}">\n'
                   f'    <h3>{e(p["title"])} <span class="conf {p["status"]}">{STATUS[p["status"]][0]}</span></h3>\n'
                   f'    {body}\n  </article>\n')
    out.append('  </div>\n\n')

    if t.get('callout'):
        title, text = t['callout']
        out.append(f'  <h2>{e(title)}</h2>\n  <div class="callout"><div class="ico" aria-hidden="true"></div><p>{text}</p></div>\n\n')

    rows = ''.join(
        f'<tr><td>{e(part)}</td><td>{e(printed)}</td><td>{e(role)}</td>'
        f'<td><i class="dot" style="--c:{STATUS[st][1]}"></i>{STATUS[st][0]}</td></tr>'
        for part, printed, role, st, key in t['table'])
    out.append('  <h2>All parts in one table</h2>\n  <div class="tablewrap"><table>\n'
               '    <thead><tr><th>Part</th><th>What is printed on it</th><th>Role</th><th>Sure?</th></tr></thead>\n'
               f'    <tbody>{rows}</tbody>\n  </table></div>\n\n')

    same = []
    for part, printed, role, st, key in t['table']:
        others = [o for o in SHARED.get(key or '', []) if o[0] != t['slug']]
        if others:
            links = ', '.join(f'<a href="/inside/{s}/">{e(n)}</a> ({e(lbl)})' for s, n, lbl in others)
            same.append(f'<li><b>{e(printed)}</b> — also inside {links}</li>')
    if same:
        out.append('  <h2>Same part, other robots</h2>\n'
                   '  <p class="sub">Parts on this page that we have also found inside other robots in the library.</p>\n'
                   f'  <ul class="same">{"".join(same)}</ul>\n\n')

    if t.get('repair'):
        cards = ''.join(f'<div><h3>{e(a)}</h3><p>{b}</p></div>' for a, b in t['repair'])
        out.append(f'  <h2>Replacing parts</h2>\n  <div class="repair">{cards}</div>\n\n')

    qs = ''.join(f'<details><summary>{e(q)}</summary><p>{e(a)}</p></details>' for q, a in t['qa'])
    out.append(f'  <section class="qa">\n    <h2>Questions</h2>\n    {qs}\n  </section>\n\n')

    more = []
    for o in TEARDOWNS:
        if o['slug'] != t['slug']:
            more.append((o['slug'], o['kind'], o['name'], CARD_BLURB.get(o['slug'], '')))
    for c in STATIC_CARDS:
        more.append((c['slug'], c['kind'], c['name'], c['blurb']))
    links = ''.join(f'<a href="/inside/{s}/"><span>{e(k)}</span><b>{e(n)}</b><small>{e(b)}</small></a>' for s, k, n, b in more)
    out.append(f'  <h2>More robots, taken apart</h2>\n  <div class="more">{links}</div>\n\n')

    out.append(f'  <p class="fine" style="margin-top:40px">{e(t["fine"])}</p>\n'
               f'  <p class="fine">Plain-text version for AI tools: <a href="/ai/{t["slug"]}.md">/ai/{t["slug"]}.md</a> &middot; '
               '<a href="/ai/llms.txt">all references</a></p>\n</main>\n</body>\n</html>\n')
    return ''.join(out)


def write(path, text):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    io.open(path, 'w', encoding='utf-8', newline='\n').write(text)


for t in TEARDOWNS:
    doc = page(t)
    for base in (os.path.join(ROOT, 'inside'), os.path.join(HERE, 'public')):
        write(os.path.join(base, t['slug'], 'index.html'), doc)
    print(f"inside/{t['slug']}/index.html  {len(doc) / 1024:.1f} KB")

# The hand-built Go2 page gets the same "Same part" and "More robots" blocks,
# written between markers so its own 3D markup is never touched.
go2_same = []
for key, label in GO2_KEYS['keys'].items():
    others = [o for o in SHARED.get(key, []) if o[0] != GO2_KEYS['slug']]
    if others:
        links = ', '.join(f'<a href="/inside/{s}/">{e(n)}</a> ({e(lbl)})' for s, n, lbl in others)
        go2_same.append(f'<li><b>{e(label)}</b> — also inside {links}</li>')
go2_more = [(t['slug'], t['kind'], t['name'], CARD_BLURB.get(t['slug'], '')) for t in TEARDOWNS]
go2_more += [(c['slug'], c['kind'], c['name'], c['blurb']) for c in STATIC_CARDS if c['slug'] != GO2_KEYS['slug']]
extra_css = CSS[CSS.index('/* ---- Teardown template additions'):]
go2_block = (f'<style>{extra_css}</style>\n'
             + ('  <h2>Same part, other robots</h2>\n  <p class="sub">Parts in the Go2 that we have also found inside '
                f'other robots in the library.</p>\n  <ul class="same">{"".join(go2_same)}</ul>\n' if go2_same else '')
             + '  <h2>More robots, taken apart</h2>\n  <div class="more">'
             + ''.join(f'<a href="/inside/{s}/"><span>{e(k)}</span><b>{e(n)}</b><small>{e(b)}</small></a>'
                       for s, k, n, b in go2_more) + '</div>\n')
p = os.path.join(ROOT, 'inside', 'unitree-go2', 'index.html')
s = io.open(p, encoding='utf-8').read()
a, b = '<!-- more:start -->', '<!-- more:end -->'
if a in s:
    s = s[:s.index(a) + len(a)] + '\n' + go2_block + s[s.index(b):]
    io.open(p, 'w', encoding='utf-8', newline='\n').write(s)
    print('  shared parts + more robots -> inside/unitree-go2/index.html')

# The robot cards on /inside/, in the source and in the built page.
cards = []
for c in STATIC_CARDS:
    cards.append((c['slug'], c['tag'], c['name'], c['blurb']))
for t in TEARDOWNS:
    cards.append((t['slug'], CARD_TAG.get(t['slug'], t['kind']), t['name'], CARD_BLURB.get(t['slug'], '')))
block = '\n'.join(
    f'    <a class="card" href="/inside/{s}/">\n      <span class="tag">{e(tag)}</span>\n'
    f'      <h3>{e(n)}</h3>\n      <p>{e(b)}</p>\n    </a>' for s, tag, n, b in cards)
for f in ('inside-src/index.html', 'inside/index.html'):
    p = os.path.join(ROOT, f)
    s = io.open(p, encoding='utf-8').read()
    a, b = '<!-- cards:start -->', '<!-- cards:end -->'
    if a not in s:
        print('  no cards marker in', f, '- skipped')
        continue
    s = s[:s.index(a) + len(a)] + '\n' + block + '\n    ' + s[s.index(b):]
    io.open(p, 'w', encoding='utf-8', newline='\n').write(s)
    print('  cards ->', f)

# sitemap.xml: the fixed pages plus every teardown.
FIXED = [('/', '2026-09-22', 'weekly', '1.0'), ('/app/', '2026-09-22', 'weekly', '0.9'),
         ('/inside/', UPDATED, 'weekly', '0.8'), ('/inside/unitree-go2/', '2026-09-24', 'monthly', '0.8'),
         ('/inside/so-arm101/', '2026-09-22', 'monthly', '0.7')]
urls = FIXED + [(f"/inside/{t['slug']}/", UPDATED, 'monthly', '0.8') for t in TEARDOWNS]
sm = ['<?xml version="1.0" encoding="UTF-8"?>',
      '<!-- Written by inside-src/build_teardowns.py. Add hand-built pages to FIXED there. -->',
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
for loc, mod, freq, pri in urls:
    sm += ['  <url>', f'    <loc>{SITE}{loc}</loc>', f'    <lastmod>{mod}</lastmod>',
           f'    <changefreq>{freq}</changefreq>', f'    <priority>{pri}</priority>', '  </url>']
sm.append('</urlset>')
write(os.path.join(ROOT, 'sitemap.xml'), '\n'.join(sm) + '\n')
print(f'sitemap.xml  {len(urls)} URLs')
