"""Turn the scanned engravings into assets that sit on a dark page.

A scan is black ink on white paper. Dropped on to this site as-is it is a
bright rectangle. So the paper becomes transparency and the ink becomes light:
alpha = how dark the pixel was, colour = a warm off-white. The result composites
over anything, needs no CSS filter or blend mode, and keeps the hatching.

Run: python make_art.py   (writes ../img)
"""
import os
import numpy as np
from PIL import Image

SRC = os.path.join(os.path.expanduser('~'), 'Downloads')
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'img')
INK = (238, 234, 226)


def ink(img, floor=14, gain=1.12, rgb=INK):
    g = np.asarray(img.convert('L')).astype(np.float32)
    a = np.clip((255.0 - g - floor) * gain, 0, 255)
    out = np.zeros(g.shape + (4,), np.uint8)
    out[..., 0], out[..., 1], out[..., 2] = rgb
    out[..., 3] = a.astype(np.uint8)
    return Image.fromarray(out, 'RGBA')


def vignette(img, x=0.10, y=0.11):
    """Fade the edges to nothing inside the file itself.

    Doing it in CSS needs two stacked gradients and mask-composite, which not
    every engine honours; one radial mask that does reach the edges also eats
    the figures. Baked in, the plate simply has no edge.
    """
    a = np.asarray(img.getchannel('A')).astype(np.float32)
    h, w = a.shape
    def ramp(n, frac):
        t = np.minimum(np.arange(n), np.arange(n)[::-1]) / max(n * frac, 1)
        t = np.clip(t, 0, 1)
        return t * t * (3 - 2 * t)                      # smoothstep
    a *= ramp(w, x)[None, :] * ramp(h, y)[:, None]
    out = np.asarray(img).copy()
    out[..., 3] = a.astype(np.uint8)
    return Image.fromarray(out, 'RGBA')


def trim(img):
    box = img.getchannel('A').point(lambda v: 255 if v > 6 else 0).getbbox()
    return img.crop(box) if box else img


def save(img, name, quality=82, alpha_quality=40):
    p = os.path.join(OUT, name)
    img.save(p, quality=quality, alpha_quality=alpha_quality, method=6)
    print(name, img.size, f'{os.path.getsize(p) / 1024:.0f} KB')


os.makedirs(OUT, exist_ok=True)

# 1. The banner: Michelangelo's Creation of Adam, engraved. Public domain.
banner = Image.open(os.path.join(SRC, 'imago-dei.webp'))
art = vignette(ink(banner))
# Hatching is expensive to store at any quality, so the width is the lever.
save(art.resize((1400, round(1400 * art.height / art.width)), Image.LANCZOS), 'imago-dei.webp', quality=62)
save(art.resize((800, round(800 * art.height / art.width)), Image.LANCZOS), 'imago-dei-800.webp', quality=62)

# 2. The clouds that drift around it. The body of the cloud is cream, not
# white, so it needs more gain than the banner or only the outline survives.
cloud = trim(ink(Image.open(os.path.join(SRC, '1145532855458404194.jpg')), floor=8, gain=1.55))
save(cloud, 'cloud.webp', quality=86)

# 3. The logo: an eye in a daisy, given the same ink treatment as the rest so
# it sits in the dark header with no chip or box around it. The icons need the
# background baked in, because a browser tab may be any colour.
logo_src = next(f for f in os.listdir(SRC) if f.endswith('.jpg') and not f[0].isascii()
                and Image.open(os.path.join(SRC, f)).size == (736, 736))
src = Image.open(os.path.join(SRC, logo_src))
mark = trim(ink(src, floor=10, gain=1.2))
save(mark.resize((256, round(256 * mark.height / mark.width)), Image.LANCZOS), 'logo.webp', quality=88, alpha_quality=80)

for size, name, pad in ((180, 'apple-touch-icon.png', 0.14), (64, 'favicon.png', 0.08)):
    icon = Image.new('RGBA', (size, size), (7, 8, 11, 255))
    inner = round(size * (1 - pad * 2))
    m = mark.resize((inner, round(inner * mark.height / mark.width)), Image.LANCZOS)
    icon.alpha_composite(m, ((size - m.width) // 2, (size - m.height) // 2))
    p = os.path.join(OUT, name)
    icon.save(p)
    print(name, icon.size, f'{os.path.getsize(p) / 1024:.0f} KB')
