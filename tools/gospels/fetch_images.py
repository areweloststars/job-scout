# content/{책}/ch*.py에서 src가 있는 요점 그림을 내려받아 img 경로에 저장한다 (긴 변 800px, JPEG)
# src: "tissot:번호"(브루클린 미술관 CDN, tissot.json으로 파일명을 찾음) 또는 "url:주소"
import glob, importlib.util, io, json, os, re, sys, time, urllib.request
from PIL import Image
HERE = os.path.dirname(os.path.abspath(__file__)); REPO = os.path.dirname(os.path.dirname(HERE))
CDN = 'https://d1lfxha3ugu3d4.cloudfront.net/images/opencollection/objects/size4/'
UA = {'User-Agent': 'job-scout-bible-reader/1.0 (https://github.com/areweloststars/job-scout)'}
bynum = {}
for v in json.load(open(f'{HERE}/tissot.json', encoding='utf-8')).values():
    m = v['cdn'] and re.match(r'00\.159\.([0-9a-z.]+?)_', v['cdn'])
    if m: bynum.setdefault(m[1], v['cdn'])
def load(path):
    spec = importlib.util.spec_from_file_location(os.path.basename(path)[:-3], path)
    m = importlib.util.module_from_spec(spec); spec.loader.exec_module(m); return m
book = sys.argv[1]; got = fail = 0
for f in sorted(glob.glob(f'{REPO}/content/{book}/ch*.py')):
    for p in load(f).PTS:
        if not p.get('src') or os.path.exists(f'{REPO}/{p["img"]}'): continue
        kind, val = p['src'].split(':', 1)
        url = CDN + bynum[val] if kind == 'tissot' else val
        try:
            b = urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=60).read()
            im = Image.open(io.BytesIO(b)).convert('RGB'); im.thumbnail((800, 800), Image.LANCZOS)
            os.makedirs(os.path.dirname(f'{REPO}/{p["img"]}'), exist_ok=True)
            im.save(f'{REPO}/{p["img"]}', 'JPEG', quality=82, optimize=True, progressive=True); got += 1; time.sleep(0.3)
        except Exception as e: print('FAIL', p['img'], url, e); fail += 1
print('images fetched', got, 'failed', fail)
