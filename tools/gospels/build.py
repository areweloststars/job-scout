# content/{책}/chNN.py → data/{책}/NN.js(장별 데이터)와 data/meta.js(책 목록, 그림 출처)
import glob, html, importlib.util, json, os, re, sys
from PIL import Image
HERE = os.path.dirname(os.path.abspath(__file__)); REPO = os.path.dirname(os.path.dirname(HERE))
sys.path.insert(0, HERE)
from books import BOOKS, NAMES
GAE = 'https://www.bskorea.or.kr/bible/korbibReadpage.php?version=GAE&book={}&chap={}&sec={}'

def load(path):
    spec = importlib.util.spec_from_file_location(os.path.basename(path)[:-3], path)
    m = importlib.util.module_from_spec(spec); spec.loader.exec_module(m); return m

def mark(s):  # ⟪헬라어⟫, ⟦히브리어|출처⟧ 표시를 글꼴 태그로
    s = re.sub(r'⟪([^⟫]+)⟫', r'<span class="gk" lang="grc">\1</span>', s)
    return re.sub(r'⟦([^|⟧]+)\|[^⟧]+⟧', r'<span class="he" lang="he" dir="rtl">\1</span>', s)

def ref_label(name, r):  # "6:1–6" → "마가복음 6장 1–6절"
    m = re.match(r'^(\d+):(\d+)–(\d+):(\d+)$', r)
    if m: return f'{name} {m[1]}장 {m[2]}절–{m[3]}장 {m[4]}절', int(m[1]), int(m[2])
    c, rest = r.split(':', 1)
    return f"{name} {c}장 {'절, '.join(x.strip() for x in rest.split(','))}절", int(c), int(re.match(r'\d+', rest)[0])

def segs(r, lastv):  # 범위 → [(장, [절...])]
    m = re.match(r'^(\d+):(\d+)–(\d+):(\d+)$', r)
    if m:
        c1, v1, c2, v2 = map(int, m.groups())
        return [(c1, list(range(v1, lastv[c1] + 1))), (c2, list(range(1, v2 + 1)))]
    c, rest = r.split(':', 1); out = []
    for part in rest.split(','):
        a, _, b = part.strip().partition('–'); out.append((int(c), list(range(int(a), int(b or a) + 1))))
    return out

def passage(r, tx, lastv):
    parts, miss, S = [], [], segs(r, lastv)
    for i, (c, vs) in enumerate(S):
        chunk = []
        for v in vs:
            t = tx.get(f'{c}:{v}')
            if t is None: miss.append(f'{c}:{v}'); continue
            chunk.append(f'<sup>{v}</sup>' + re.sub(r'〔(.+?)〕', r'<span class="tn">〔\1〕</span>', t))
        lead = '' if i == 0 else (f'<span class="ch">{c}장</span>' if c != S[i - 1][0] else '<span class="ch">⋯</span>')
        parts.append(f'<p>{lead}{" ".join(chunk)}</p>')
    if miss: parts.append(f'<p class="tn">※ {", ".join(miss)}절은 가장 오래된 사본들에 없어서 싣지 않았습니다.</p>')
    return ''.join(parts), miss

def build_book(b, warn):
    files = sorted(glob.glob(f'{REPO}/content/{b["id"]}/ch*.py'))
    mods = {int(re.search(r'ch(\d+)\.py$', f)[1]): load(f) for f in files}
    tx = {}; [tx.update(m.TX) for m in mods.values()]
    lastv = {}
    for k in tx: c, v = map(int, k.split(':')); lastv[c] = max(lastv.get(c, 0), v)
    os.makedirs(f'{REPO}/data/{b["id"]}', exist_ok=True); credits = []; titles = {}; covered = set()
    for n, m in sorted(mods.items()):
        e = m.EP; pts = []
        for p in m.PTS:
            lab, c, v = ref_label(b['name'], p['r'])
            links = [{'t': lab, 'u': GAE.format(b['id'], c, v)}]
            if p.get('also'):
                ob, oc, ov, ol = p['also']; links.append({'t': f'그림 속 장면: {NAMES[ob]} {ol}', 'u': GAE.format(ob, oc, ov)})
            bt, miss = passage(p['r'], tx, lastv)
            for sc, vs in segs(p['r'], lastv): covered.update(f'{sc}:{x}' for x in vs)
            rec = {'r': p['r'], 't': p['t'], 'd': mark(p['d']), 'me': p['me']}
            if p.get('q'): rec['q'] = list(p['q'])
            if p.get('img'):
                w, h = Image.open(f'{REPO}/{p["img"]}').size; cm = re.search(r'〈([^〉]+)〉', p['cap'])
                rec.update(img=p['img'], iw=w, ih=h, cap=p['cap'], alt=p.get('alt') or (cm[1] if cm else p['cap'].split('.')[0]))
                if p.get('credit'):
                    u, lic = p['credit']
                    credits.append(f'<li>{html.escape(p["cap"].split(". ")[0].rstrip("."))} · <a href="{html.escape(u)}" target="_blank" rel="noopener">출처</a> · {html.escape(lic)}</li>')
            rec['links'] = links; rec['bt'] = bt; pts.append(rec)
            if not p['me'].endswith('?'): warn.append(f'{b["id"]} {p["r"]}: 나에게가 질문이 아님')
        ep = {'n': n, 'v': lastv.get(n, 0), 'title': e['title'], 'verse': list(e['verse']), 'fun': mark(e['fun']),
              'intent': mark(e['intent']), 'm': e['m'], 'mission': mark(e['mission']), 'points': pts}
        js = f'// {b["name"]} {n}장. tools/gospels/build.py가 content/{b["id"]}/ch{n:02d}.py에서 만듭니다.\ngospelChapter({json.dumps(b["id"])}, {n}, ' + json.dumps(ep, ensure_ascii=False, indent=0) + ');\n'
        open(f'{REPO}/data/{b["id"]}/{n:02d}.js', 'w', encoding='utf-8').write(js); titles[n] = e['title']
    gap = [k for k in tx if k not in covered]
    if gap: warn.append(f'{b["id"]}: 요점이 덮지 않는 절 {gap}')
    return titles, credits, len(tx)

warn, books, credits, total = [], [], [], {}
for b in BOOKS:
    titles, cr, nv = build_book(b, warn); credits += cr; total[b['id']] = (len(titles), nv)
    meta = {k: b[k] for k in ('id', 'name', 'author', 'subj', 'topic', 'kicker', 'chapters', 'abbr')}
    if b['plate']:
        w, h = Image.open(f'{REPO}/{b["plate"]["img"]}').size; meta['plate'] = {**b['plate'], 'w': w, 'h': h}
    meta['why'] = [list(x) for x in b['why']]; meta['titles'] = titles; books.append(meta)
js = '// 책 목록과 장 제목, 그림 출처. tools/gospels/build.py가 만듭니다.\nconst META = ' + json.dumps({'books': books, 'credits': ''.join(credits)}, ensure_ascii=False, indent=0) + ';\n'
open(f'{REPO}/data/meta.js', 'w', encoding='utf-8').write(js)
print('built', {k: f'{c}장 {v}절' for k, (c, v) in total.items()}, '| meta.js', len(js))
for w in warn: print('WARN', w)
