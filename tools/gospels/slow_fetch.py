import sys, json, io, os, time, urllib.request, urllib.error; sys.path.insert(0, '.')
from PIL import Image
log = open('slow.log', 'a', buffering=1)
UA = {'User-Agent': 'job-scout-bible-reader/1.0 (https://github.com/areweloststars/job-scout)'}
def fetch(url): return urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=90).read()
def save(k, b):
    im = Image.open(io.BytesIO(b)).convert('RGB'); im.thumbnail((800, 800), Image.LANCZOS)
    im.save(f'raw/{k}.jpg', 'JPEG', quality=82, optimize=True, progressive=True); log.write(f'img {k} {im.size}\n')
A = json.load(open('assign.json')); I = json.load(open('info.json'))
C = json.load(open('credits.json')) if os.path.exists('credits.json') else {}
if not os.path.exists('raw/9-7.jpg'):
    save('9-7', fetch('https://tile.loc.gov/storage-services/service/pnp/matpc/04600/04642v.jpg'))
    C['9-7'] = {'artist': '매트슨 사진 컬렉션', 'title': '맷돌 앞의 베두인 남자', 'date': '1900년경', 'url': 'https://www.loc.gov/item/2019703853/', 'lic': '퍼블릭 도메인(미국 의회도서관)'}
    json.dump(C, open('credits.json', 'w'), ensure_ascii=False, indent=1)
met = {k: int(v[4:]) for k, v in A.items() if v.startswith('met:')}
wm = {k: v for k, v in A.items() if v.startswith('File:') and 'James Tissot' not in v}
deadline = time.time() + 75 * 60; next_wm = 0
while time.time() < deadline:
    for k, i in met.items():
        if os.path.exists(f'raw/{k}.jpg'): continue
        try:
            o = json.loads(fetch(f'https://collectionapi.metmuseum.org/public/collection/v1/objects/{i}'))
            if not o.get('isPublicDomain'): log.write(f'NOTPD {k}\n'); continue
            save(k, fetch(o['primaryImageSmall'] or o['primaryImage']))
            C[k] = {'artist': o['artistDisplayName'], 'title': o['title'], 'date': o['objectDate'], 'url': o['objectURL'], 'lic': '퍼블릭 도메인(The Met Open Access, CC0)'}
            json.dump(C, open('credits.json', 'w'), ensure_ascii=False, indent=1); time.sleep(4)
        except Exception as e: log.write(f'met wait {k} {e}\n'); break
    if time.time() >= next_wm:
        for k, t in wm.items():
            if os.path.exists(f'raw/{k}.jpg'): continue
            try:
                save(k, fetch(I[t]['thumb'])); r = I[t]
                C[k] = {'artist': r['artist'], 'title': t[5:], 'date': r['date'], 'url': r['url'], 'lic': r['lic']}
                json.dump(C, open('credits.json', 'w'), ensure_ascii=False, indent=1); time.sleep(5)
            except Exception as e: log.write(f'wm wait {k} {e}\n'); next_wm = time.time() + 660; break
    missing = [k for k in list(met) + list(wm) if not os.path.exists(f'raw/{k}.jpg')]
    if not missing: break
    time.sleep(150)
log.write(f'DONE missing={missing}\n')
