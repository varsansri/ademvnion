"""STL -> one decimated, meshopt-compressed GLB for the browser (~110 KB gzipped)."""
import glob, os, subprocess, trimesh
HERE = os.path.dirname(os.path.abspath(__file__))
scene = trimesh.Scene()
for f in sorted(glob.glob(os.path.join(HERE, 'so101', 'raw', '*.stl'))):
    name = os.path.basename(f)[:-4]
    scene.add_geometry(trimesh.load(f, force='mesh'), node_name=name, geom_name=name)
tmp = os.path.join(HERE, 'so101', 'scene.glb')
scene.export(tmp)
out = os.path.join(HERE, 'public', 'so-arm101', 'so101.glb')
subprocess.run(['npx', 'gltfpack', '-i', tmp, '-o', out, '-si', '0.12', '-sa', '-cc', '-kn', '-km', '-vp', '14'], check=True, shell=True, cwd=HERE)
print('so101.glb KB', os.path.getsize(out) // 1024)
