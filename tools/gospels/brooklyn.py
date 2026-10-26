import sys, json, re, os, io, time, urllib.request; sys.path.insert(0, '.')
from commons import get
from PIL import Image
log = open('brooklyn.log', 'a', buffering=1)
A = json.load(open('assign.json'))
tis = sorted({v for v in A.values() if 'James Tissot' in v})
src = {}
for i in range(0, len(tis), 45):
    r = get({'action': 'query', 'titles': '|'.join(tis[i:i+45]), 'prop': 'revisions', 'rvprop': 'content', 'rvslots': 'main'})
    for p in r['query']['pages']:
        t = p['revisions'][0]['slots']['main']['content']
        m = re.search(r'Photo: Brooklyn Museum, \d{4}, ([\w.\-]+\.jpg)', t)
        src[p['title']] = m[1] if m else None
json.dump(src, open('brooklyn_src.json', 'w'), indent=0)
log.write(f'src {sum(1 for v in src.values() if v)}/{len(tis)}\n')
UA = {'User-Agent': 'job-scout-bible-reader/1.0'}
for k, t in A.items():
    f = src.get(t) or src.get(t.replace('_', ' '))
    out = f'raw/{k}.jpg'
    if not f or os.path.exists(out): continue
    try:
        b = urllib.request.urlopen(urllib.request.Request('https://d1lfxha3ugu3d4.cloudfront.net/images/opencollection/objects/size4/' + f, headers=UA), timeout=60).read()
        im = Image.open(io.BytesIO(b)).convert('RGB'); im.thumbnail((800, 800), Image.LANCZOS)
        im.save(out, 'JPEG', quality=82, optimize=True, progressive=True); log.write(f'img {k} {im.size}\n'); time.sleep(0.5)
    except Exception as e: log.write(f'FAIL {k} {f} {e}\n')
log.write('DONE\n')
