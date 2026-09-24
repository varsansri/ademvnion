"""A MuJoCo Menagerie robot -> the files the cartoon 3D viewer (/3d/toon.js) loads.

Usage: python build_menagerie.py go1      (or g1)

Source folders (raw meshes are not committed; re-download from
github.com/google-deepmind/mujoco_menagerie if missing):
  go1/  unitree_go1  go1.xml + assets/*.stl   (Unitree, BSD-3-Clause)
  g1/   unitree_g1   g1.xml  + assets/*.STL   (Unitree, BSD-3-Clause)

Writes to ../3d/ (outside /inside/, so the Inside vite build never wipes it):
  <slug>.glb           every visual mesh once, at its own origin, meshopt-packed
  <slug>.json          body tree (pos, quat, joint axis/range), geoms, home pose
  <slug>-license.txt   Unitree's BSD-3 notice, which redistribution requires
"""
import io
import json
import os
import shutil
import subprocess
import sys
import xml.etree.ElementTree as ET

import trimesh

ROBOTS = {
    'go1': {'slug': 'unitree-go1', 'xml': 'go1.xml', 'key': 'home', 'simplify': '0.2',
            'source': 'MuJoCo Menagerie unitree_go1 (Unitree, BSD-3-Clause)'},
    'g1': {'slug': 'unitree-g1', 'xml': 'g1.xml', 'key': 'stand', 'simplify': '0.1',
           'source': 'MuJoCo Menagerie unitree_g1 (Unitree, BSD-3-Clause)'},
}

name = sys.argv[1] if len(sys.argv) > 1 else 'go1'
cfg = ROBOTS[name]
HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, name)
OUT = os.path.join(HERE, '..', '3d')

root = ET.parse(os.path.join(SRC, cfg['xml'])).getroot()
mats = {m.get('name'): [float(x) for x in m.get('rgba').split()] for m in root.iter('material')}
mesh_file = {}
for m in root.find('asset').iter('mesh'):
    f = m.get('file')
    mesh_file[m.get('name') or os.path.splitext(f)[0]] = f

# Defaults by class: joint axis/range and the visual geom's material.
cls = {}
def walk_defaults(el, inherited):
    for d in el.findall('default'):
        mine = dict(inherited)
        j = d.find('joint')
        if j is not None:
            if j.get('axis'): mine['axis'] = [float(x) for x in j.get('axis').split()]
            if j.get('range'): mine['range'] = [float(x) for x in j.get('range').split()]
        g = d.find('geom')
        if g is not None and g.get('material'): mine['material'] = g.get('material')
        if d.get('class'): cls[d.get('class')] = mine
        walk_defaults(d, mine)
walk_defaults(root.find('default'), {})

floats = lambda s, d: [float(x) for x in s.split()] if s else d
bodies, geoms, hinge_order = [], [], []
def walk(el, parent, childclass):
    for b in el.findall('body'):
        cc = b.get('childclass') or childclass
        j = b.find('joint')
        jd = None
        if j is not None and j.get('type', 'hinge') == 'hinge':
            c = dict(cls.get(cc, {}))
            c.update(cls.get(j.get('class'), {}))
            axis = floats(j.get('axis'), c.get('axis', [0, 0, 1]))
            rng = floats(j.get('range'), c.get('range', [-3.14, 3.14]))
            jd = {'name': j.get('name'), 'axis': axis, 'range': rng}
            hinge_order.append(j.get('name'))
        bodies.append({'name': b.get('name'), 'parent': parent, 'pos': floats(b.get('pos'), [0, 0, 0]),
                       'quat': floats(b.get('quat'), [1, 0, 0, 0]), 'joint': jd})
        for g in b.findall('geom'):
            if g.get('mesh') is None or g.get('class') != 'visual':
                continue
            mat = g.get('material') or cls.get('visual', {}).get('material')
            geoms.append({'body': b.get('name'), 'mesh': g.get('mesh'), 'color': mats[mat][:3],
                          'pos': floats(g.get('pos'), [0, 0, 0]), 'quat': floats(g.get('quat'), [1, 0, 0, 0])})
        walk(b, b.get('name'), cc)
walk(root.find('worldbody'), None, None)

key = [k for k in root.iter('key') if k.get('name') == cfg['key']][0]
qpos = [float(x) for x in key.get('qpos').split()]
home = dict(zip(hinge_order, qpos[7:]))

os.makedirs(OUT, exist_ok=True)
data = {'source': cfg['source'], 'bodies': bodies, 'geoms': geoms, 'home_height': qpos[2], 'home': home}
io.open(os.path.join(OUT, cfg['slug'] + '.json'), 'w', encoding='utf-8', newline='\n').write(
    json.dumps(data, separators=(',', ':')))

scene = trimesh.Scene()
for m in sorted({g['mesh'] for g in geoms}):
    mesh = trimesh.load(os.path.join(SRC, 'assets', mesh_file[m]), force='mesh')
    scene.add_geometry(mesh, node_name=m, geom_name=m)
tmp = os.path.join(SRC, 'scene.glb')
scene.export(tmp)
out = os.path.join(OUT, cfg['slug'] + '.glb')
subprocess.run(['npx', 'gltfpack', '-i', tmp, '-o', out, '-si', cfg['simplify'], '-sa', '-cc', '-kn', '-km', '-vp', '14'],
               check=True, shell=True, cwd=HERE)
shutil.copy(os.path.join(SRC, 'LICENSE'), os.path.join(OUT, cfg['slug'] + '-license.txt'))
print(name, len(bodies), 'bodies', len(geoms), 'geoms', len(home), 'joints;',
      cfg['slug'] + '.glb', os.path.getsize(out) // 1024, 'KB')
