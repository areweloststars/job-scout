import json, re, sys, unicodedata
sys.path.insert(0, '.')
REF = '../ref'
G = json.load(open(f'{REF}/gae.json'))
P = {}
for m in ('c01', 'c02', 'c03'):
    P.update(__import__(m).P)
PTS = json.load(open('points.json'))
def rng(r):
    out = set(); c0 = None
    for part in r.split(','):
        part = part.strip()
        m = re.match(r'^(?:(\d+):)?(\d+)(?:–(?:(\d+):)?(\d+))?$', part)
        c = int(m[1]) if m[1] else c0; c0 = c; a = int(m[2])
        if m[4]:
            c2 = int(m[3]) if m[3] else c; b = int(m[4])
            if c2 == c: out |= {(c, v) for v in range(a, b + 1)}
            else:
                out |= {(c, v) for v in range(a, len(G[str(c)]) + 1)} | {(c2, v) for v in range(1, b + 1)}; c0 = c2
        else: out.add((c, a))
    return out
norm = lambda s: re.sub(r'[\W_]', '', s)
def gae_has(c, v, text):
    ch = G[str(c)]; full = norm(''.join(ch.get(str(x), '') for x in (v - 1, v, v + 1)))
    return all(norm(p) in full for p in text.split('…') if norm(p))
# SBLGNT
def gnorm(w):
    w = unicodedata.normalize('NFD', w.lower()); w = ''.join(ch for ch in w if unicodedata.category(ch) != 'Mn')
    return re.sub(r'[^\w]', '', w).replace('ς', 'σ')
GK = {}
for line in open(f'{REF}/mk.txt', encoding='utf-8'):
    f = line.split(); c, v = int(f[0][2:4]), int(f[0][4:6])
    GK.setdefault((c, v), set()).update({gnorm(f[4]), gnorm(f[5]), gnorm(f[6])})
ALLG = set().union(*GK.values())
# WLC
HEB = {}
def heb_cons(s): return ''.join(ch for ch in s if 'א' <= ch <= 'ת')
def wlc(book, c, v):
    if book not in HEB:
        x = open(f'{REF}/{book}.xml', encoding='utf-8').read(); d = {}
        for m in re.finditer(r'<verse osisID="\w+\.(\d+)\.(\d+)"[^>]*>(.*?)</verse>', x, re.S):
            d[(int(m[1]), int(m[2]))] = heb_cons(re.sub(r'<[^>]+>', '', ''.join(re.findall(r'<w[^>]*>(.*?)</w>', m[3], re.S))))
        HEB[book] = d
    return HEB[book].get((c, v), '')
errs, warns = [], []
for p in PTS:
    k = f"{p['c']}-{p['i']}"
    if k not in P: errs.append(f'{k} MISSING'); continue
    e = P[k]; R = rng(p['r'])
    if e['q'] and not gae_has(*map(int, e['q'][0].split(':')), e['q'][1]): errs.append(f"{k} q {e['q'][0]} ≠ 개역개정: {G[e['q'][0].split(':')[0]][e['q'][0].split(':')[1]]}")
    for fld in ('d', 'h', 'me'):
        t = e[fld]
        for m in re.finditer(r'“([^”]{3,})”\((\d+):(\d+)\)', t):
            if not gae_has(int(m[2]), int(m[3]), m[1]): errs.append(f"{k}.{fld} “{m[1]}”({m[2]}:{m[3]}) ≠ {G[m[2]][m[3]]}")
        for m in re.finditer(r'‘([^’]{3,})’\((\d+):(\d+)\)', t):
            if not gae_has(int(m[2]), int(m[3]), m[1]): warns.append(f"{k}.{fld} ‘{m[1]}’({m[2]}:{m[3]}) paraphrase")
        for m in re.finditer(r'⟪([^⟫]+)⟫', t):
            for w in m[1].split():
                n = gnorm(w)
                if any(n in GK.get(cv, ()) for cv in R): continue
                (warns if n in ALLG else errs).append(f"{k}.{fld} Greek {w} {'outside range' if n in ALLG else 'NOT IN MARK'}")
        for m in re.finditer(r'⟦([^|⟧]+)\|(\w+) (\d+):(\d+)⟧', t):
            src = wlc(m[2], int(m[3]), int(m[4]))
            if not src: errs.append(f'{k}.{fld} Hebrew ref {m[2]} {m[3]}:{m[4]} empty'); continue
            if heb_cons(m[1].replace('־', '')) not in src: errs.append(f"{k}.{fld} Hebrew {m[1]} not in {m[2]} {m[3]}:{m[4]} ({src[:60]})")
print('points', len(P), 'errors', len(errs), 'warnings', len(warns))
print('\n'.join(errs)); print('--'); print('\n'.join(warns))
