# 위키미디어 공용의 티소 〈예수의 생애〉(브루클린 미술관) 파일 목록과, 브루클린 미술관 CDN 파일명을 모은다 → tissot.json
import json, os, re, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from commons import get
OUT = sys.argv[1]
titles, off = [], 0
while off is not None:
    r = get({'action': 'query', 'list': 'search', 'srsearch': 'intitle:"Brooklyn Museum" intitle:"James Tissot"', 'srnamespace': 6, 'srlimit': 500, 'sroffset': off})
    titles += [x['title'] for x in r['query']['search']]
    off = r.get('continue', {}).get('sroffset'); print('search', len(titles), flush=True)
cat = json.load(open(OUT, encoding='utf-8')) if os.path.exists(OUT) else {}  # 이미 모은 것은 건너뛴다
titles = [t for t in titles if t not in cat]
for i in range(0, len(titles), 45):
    r = get({'action': 'query', 'titles': '|'.join(titles[i:i + 45]), 'prop': 'revisions', 'rvprop': 'content', 'rvslots': 'main'})
    for p in r['query']['pages']:
        t = p.get('revisions', [{}])[0].get('slots', {}).get('main', {}).get('content', '')
        m = re.search(r'Photo: Brooklyn Museum, \d{4}, ([\w.\-]+\.jpg)', t); a = re.search(r'accession number\s*=\s*([\d.]+)', t)
        name = re.sub(r'^File:Brooklyn Museum - (.*) - James Tissot.*$', r'\1', p['title'])
        cat[p['title']] = {'name': name, 'cdn': m[1] if m else None, 'acc': a[1] if a else None}
    print('wikitext', len(cat), flush=True)
json.dump(cat, open(OUT, 'w', encoding='utf-8'), ensure_ascii=False, indent=0)
print('DONE', len(cat), sum(1 for v in cat.values() if v['cdn']), flush=True)
