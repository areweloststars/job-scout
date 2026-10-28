# 장 원본 점검: 번역한 절이 SBLGNT와 같은지, 인용이 개역한글판과 같은지, 헬라어·히브리어 표기가 원문에 있는지, 그림 파일이 있는지
import glob, importlib.util, json, os, re, sys, unicodedata
HERE = os.path.dirname(os.path.abspath(__file__)); REPO = os.path.dirname(os.path.dirname(HERE))
REF = os.environ.get('GOSPEL_REF', '/tmp/claude-0/-home-user-job-scout/994516b7-6db5-5528-99fd-98d7f06f74c4/scratchpad/ref/dl')
MORPH = {'mat': '61-Mt', 'mrk': '62-Mk', 'luk': '63-Lk', 'jhn': '64-Jn'}
book = sys.argv[1]
# 인용 대조는 개역한글판(dl_han.py로 받음)
G = json.load(open(f'{REF}/han-{book}.json', encoding='utf-8')); S = json.load(open(f'{REF}/sbl-{book}.json', encoding='utf-8'))
norm = lambda s: re.sub(r'[\W_]', '', s)
def gnorm(w):
    w = unicodedata.normalize('NFD', w.lower()); w = ''.join(ch for ch in w if unicodedata.category(ch) != 'Mn')
    return re.sub(r'[^\w]', '', w).replace('ς', 'σ')
GK = {}
for line in open(f'{REF}/{MORPH[book]}-morphgnt.txt', encoding='utf-8'):
    f = line.split(); GK.setdefault(int(f[0][2:4]), set()).update({gnorm(f[4]), gnorm(f[5]), gnorm(f[6])})
ALLG = set().union(*GK.values())
def verses(c, a, b=None):
    ch = G[str(c)]['verses']; return ''.join(ch.get(str(x), '') for x in range(a, (b or a) + 1))
def gae_has(ref, text):
    m = re.search(r'(\d+):(\d+)(?:–(\d+))?$', ref)
    c, a, b = int(m[1]), int(m[2]), int(m[3]) if m[3] else None
    full = norm(verses(c, max(1, a - 1), (b or a) + 1))
    return all(norm(x) in full for x in text.split('…') if norm(x)), verses(c, a, b)
HEB = {}
def heb_cons(s): return ''.join(ch for ch in s if 'א' <= ch <= 'ת')
def wlc(bk, c, v):
    if bk not in HEB:
        x = open(f'{REF}/{bk}.xml', encoding='utf-8').read(); d = {}
        for m in re.finditer(r'<verse osisID="\w+\.(\d+)\.(\d+)"[^>]*>(.*?)</verse>', x, re.S):
            d[(int(m[1]), int(m[2]))] = heb_cons(re.sub(r'<[^>]+>', '', ''.join(re.findall(r'<w[^>]*>(.*?)</w>', m[3], re.S))))
        HEB[bk] = d
    return HEB[bk].get((c, v), '')
def load(path):
    spec = importlib.util.spec_from_file_location(os.path.basename(path)[:-3], path)
    m = importlib.util.module_from_spec(spec); spec.loader.exec_module(m); return m
errs, warns = [], []
chs = [int(x) for x in sys.argv[2:]] or [int(re.search(r'ch(\d+)', f)[1]) for f in glob.glob(f'{REPO}/content/{book}/ch*.py')]
for c in sorted(chs):
    m = load(f'{REPO}/content/{book}/ch{c:02d}.py'); tag = f'{book} {c}'
    want = {f'{c}:{v}' for v in S[str(c)]}; have = set(m.TX)
    if want - have: errs.append(f'{tag} 번역 빠짐 {sorted(want - have, key=lambda k: int(k.split(":")[1]))}')
    if have - want: errs.append(f'{tag} SBLGNT에 없는 절 {sorted(have - want)}')
    ok, src = gae_has(m.EP['verse'][1], m.EP['verse'][0])
    if not ok: errs.append(f'{tag} 핵심 구절 ≠ 개역한글: {src}')
    texts = [('EP', m.EP[k]) for k in ('fun', 'plot', 'mission') if k in m.EP] + [(p['r'], p[k]) for p in m.PTS for k in ('d', 'me') if p.get(k)]
    for p in m.PTS:
        if p.get('q'):
            ok, src = gae_has(p['q'][0], p['q'][1])
            if not ok: errs.append(f'{tag} {p["r"]} q {p["q"][0]} ≠ 개역한글: {src}')
        if p.get('img') and not p.get('src') and not os.path.exists(f'{REPO}/{p["img"]}'): errs.append(f'{tag} {p["r"]} 그림 없음 {p["img"]}')
    for p in m.PTS:  # 요점마다 펼치는 본문 안에서 따옴표가 짝을 이루는지
        vs = [k for k in m.TX if p['r'].split(':')[0] == k.split(':')[0]]
        mm = re.match(r'^(\d+):(\d+)(?:–(\d+))?$', p['r'])
        if mm:
            body = ''.join(m.TX.get(f'{mm[1]}:{v}', '') for v in range(int(mm[2]), int(mm[3] or mm[2]) + 1))
            if body.count('“') != body.count('”') or body.count('‘') != body.count('’'): warns.append(f'{tag} {p["r"]} 본문 따옴표 짝이 맞지 않음')
    for where, t in texts:
        for q in re.finditer(r'“([^”]{3,})”\((\d+):(\d+)(?:–(\d+))?\)', t):
            ok, src = gae_has(f'{q[2]}:{q[3]}' + (f'–{q[4]}' if q[4] else ''), q[1])
            if not ok: errs.append(f'{tag} {where} “{q[1]}”({q[2]}:{q[3]}) ≠ {src}')
        for g in re.finditer(r'⟪([^⟫]+)⟫', t):
            for w in g[1].split():
                n = gnorm(w)
                if n and n not in GK.get(c, ()): (warns if n in ALLG else errs).append(f'{tag} {where} 헬라어 {w} ' + ('다른 장에 있음' if n in ALLG else '이 책에 없음'))
        for h in re.finditer(r'⟦([^|⟧]+)\|(\w+) (\d+):(\d+)⟧', t):
            s = wlc(h[2], int(h[3]), int(h[4]))
            if heb_cons(h[1].replace('־', '')) not in s: errs.append(f'{tag} {where} 히브리어 {h[1]} ∉ {h[2]} {h[3]}:{h[4]} {s[:50]}')
print(f'check {book} {chs}: errors {len(errs)}, warnings {len(warns)}')
for e in errs: print('ERR', e)
for w in warns: print('WARN', w)
