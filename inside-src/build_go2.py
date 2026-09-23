"""Unitree Go2 -> the files the /inside/unitree-go2/ 3D view loads.

Source: MuJoCo Menagerie unitree_go2 (derived from Unitree's go2_description,
BSD-3-Clause, (c) Unitree Robotics). Raw OBJs live in go2/assets (not committed).

Writes to ../inside/unitree-go2/:
  go2.glb   every mesh once, at its own origin, meshopt-packed
  go2.json  the body tree (pos, joint axis, range) and which mesh goes where
  model-license.txt  Unitree's BSD-3 notice, which redistribution requires
"""
import io, json, os, shutil, subprocess, xml.etree.ElementTree as ET
import trimesh

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, 'go2')
OUT = os.path.join(HERE, '..', 'inside', 'unitree-go2')

root = ET.parse(os.path.join(SRC, 'go2.xml')).getroot()
mats = {m.get('name'): [float(x) for x in m.get('rgba').split()] for m in root.iter('material')}

# Joint defaults by class (axis and range), as the MJCF declares them.
cls = {}
def walk_defaults(el, inherited):
    for d in el.findall('default'):
        mine = dict(inherited)
        j = d.find('joint')
        if j is not None:
            if j.get('axis'): mine['axis'] = [float(x) for x in j.get('axis').split()]
            if j.get('range'): mine['range'] = [float(x) for x in j.get('range').split()]
        if d.get('class'): cls[d.get('class')] = mine
        walk_defaults(d, mine)
walk_defaults(root.find('default'), {})

floats = lambda s, d: [float(x) for x in s.split()] if s else d
bodies, geoms = [], []
def walk(el, parent):
    for b in el.findall('body'):
        name = b.get('name')
        j = b.find('joint')
        jd = None
        if j is not None:
            c = cls.get(j.get('class'), cls.get('go2', {}))
            jd = {'name': j.get('name'), 'axis': c.get('axis', [0, 1, 0]), 'range': c.get('range', [-3.14, 3.14])}
        bodies.append({'name': name, 'parent': parent, 'pos': floats(b.get('pos'), [0, 0, 0]), 'joint': jd})
        for g in b.findall('geom'):
            if g.get('mesh') is None:
                continue
            geoms.append({'body': name, 'mesh': g.get('mesh'), 'color': mats[g.get('material')][:3],
                          'pos': floats(g.get('pos'), [0, 0, 0]), 'quat': floats(g.get('quat'), [1, 0, 0, 0])})
        walk(b, name)
walk(root.find('worldbody'), None)

home = [float(x) for x in root.find('keyframe/key').get('qpos').split()]

os.makedirs(OUT, exist_ok=True)
data = {'source': 'MuJoCo Menagerie unitree_go2 (Unitree go2_description, BSD-3-Clause)',
        'bodies': bodies, 'geoms': geoms, 'home_height': home[2],
        'home': {b['joint']['name']: v for b, v in zip([b for b in bodies if b['joint']], home[7:])}}
io.open(os.path.join(OUT, 'go2.json'), 'w', encoding='utf-8', newline='\n').write(json.dumps(data, separators=(',', ':')))

scene = trimesh.Scene()
for name in sorted({g['mesh'] for g in geoms}):
    m = trimesh.load(os.path.join(SRC, 'assets', name + '.obj'), force='mesh')
    scene.add_geometry(m, node_name=name, geom_name=name)
tmp = os.path.join(SRC, 'scene.glb')
scene.export(tmp)
out = os.path.join(OUT, 'go2.glb')
subprocess.run(['npx', 'gltfpack', '-i', tmp, '-o', out, '-si', '0.18', '-sa', '-cc', '-kn', '-km', '-vp', '14'],
               check=True, shell=True, cwd=HERE)
shutil.copy(os.path.join(SRC, 'LICENSE'), os.path.join(OUT, 'model-license.txt'))
print(len(bodies), 'bodies', len(geoms), 'geoms; go2.glb KB', os.path.getsize(out) // 1024)
