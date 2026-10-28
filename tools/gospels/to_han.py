# 장 원본의 성경 인용을 개역개정에서 개역한글판(1961, 2012년 저작권 만료)으로 바꾼다.
# 인용마다 개역개정의 어느 절 어디인지 찾은 뒤, 두 번역을 글자 단위로 맞대어 개역한글의 같은 자리를 가져온다.
# python3 tools/gospels/to_han.py <책> [장 ...] [--write]   (--write 없이는 바뀔 내용만 보여 준다)
import difflib, importlib.util, json, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__)); REPO = os.path.dirname(os.path.dirname(HERE))
REF = os.environ.get('GOSPEL_REF', '/tmp/claude-0/-home-user-job-scout/994516b7-6db5-5528-99fd-98d7f06f74c4/scratchpad/ref/dl')
args = [a for a in sys.argv[1:] if not a.startswith('--')]; WRITE = '--write' in sys.argv
book = args[0]
G = json.load(open(f'{REF}/gae-{book}.json', encoding='utf-8'))
H = json.load(open(f'{REF}/han-{book}.json', encoding='utf-8'))
W = re.compile(r'[^\W_]')
ORDER = [(int(c), int(v)) for c in sorted(G, key=int) for v in sorted(G[c]['verses'], key=int)]


def seq(c, a, b):
    vs = G.get(str(c), {}).get('verses', {})
    return [(c, v) for v in range(max(1, a), b + 1) if str(v) in vs]


def locate(q, cand):
    ns, im = [], []
    for c, v in cand:
        for i, ch in enumerate(G[str(c)]['verses'][str(v)]):
            if W.match(ch): ns.append(ch); im.append((c, v, i))
    nq = ''.join(ch for ch in q if W.match(ch))
    k = ''.join(ns).find(nq) if nq else -1
    if k < 0: return None
    s, e = im[k], im[k + len(nq) - 1]
    return s, (e[0], e[1], e[2] + 1)


CH = {}
def chap_map(c):  # 장 전체를 이어 붙여 맞댄다(개역한글은 절 나눔이 조금 다른 곳이 있다)
    if c not in CH:
        def join(D):
            vs = D.get(str(c), {}).get('verses', {}); text, off = '', {}
            for v in sorted(vs, key=int):
                off[int(v)] = len(text) + (1 if text else 0); text += (' ' if text else '') + vs[v]
            return text, off
        gt, goff = join(G); ht, _ = join(H)
        st, en = [0] * len(gt), [0] * (len(gt) + 1)
        for tag, i1, i2, j1, j2 in difflib.SequenceMatcher(None, gt, ht, autojunk=False).get_opcodes():
            for k in range(i1, i2):
                st[k], en[k + 1] = (j1 + k - i1, j1 + k - i1 + 1) if tag == 'equal' else (j1, j2)
        CH[c] = (gt, ht, goff, st, en)
    return CH[c]


def han_span(s, e):
    out = []
    for c in range(s[0], e[0] + 1):
        gt, ht, goff, st, en = chap_map(c)
        a = goff[s[1]] + s[2] if c == s[0] else 0
        b = goff[e[1]] + e[2] if c == e[0] else len(gt)
        ja, jb = (st[a] if a < len(gt) else len(ht)), en[b]
        if a == 0 or not W.match(gt[a - 1]):  # 낱말 처음에서 시작한 인용이면 개역한글에서도 낱말 처음부터
            while ja > 0 and W.match(ht[ja - 1]): ja -= 1
        if b == len(gt) or not W.match(gt[b]):  # 낱말 끝에서 끝난 인용이면 개역한글에서도 낱말 끝까지
            while jb < len(ht) and W.match(ht[jb]): jb += 1
        out.append(ht[ja:jb].strip())
    return ' '.join(x for x in out if x)


def rng(r):  # 요점 범위 '17:1–8', '13:53–14:2' → 앞뒤 한 절씩 넓힌 절 목록
    m = re.match(r'^(\d+):(\d+)(?:–(?:(\d+):)?(\d+))?', r)
    c, a = int(m[1]), int(m[2])
    if m[3]: return seq(c, a - 1, 999) + seq(int(m[3]), 1, int(m[4]) + 1)
    return seq(c, a - 1, int(m[4] or a) + 1)


def ref_seq(ref):  # '마 17:5', '17:5–6'
    m = re.search(r'(\d+):(\d+)(?:–(\d+))?$', ref)
    return seq(int(m[1]), int(m[2]), int(m[3] or m[2]))


def convert(q, cands):
    if re.fullmatch(r'[\(\[]없음[\)\]]', q): return q
    out = []
    for i, part in enumerate(re.split(r'(\s*…\s*)', q)):
        if i % 2 or not any(W.match(ch) for ch in part): out.append(part); continue
        for cand in cands:
            loc = locate(part, cand)
            if loc: out.append(han_span(*loc)); break
        else:
            return None  # 개역개정에 없는 말(낱말 풀이 등)은 그대로 둔다
    return ''.join(out)


QUOTE = re.compile(r'([‘“])([^’”]+)([’”])(\((\d+):(\d+)(?:–(\d+))?\))?')
def field(text, near, chap):
    def sub(m):
        after = text[m.end():m.end() + 8]
        if re.match(r'\s*(\(⟪|[은는이가을를]\s*(⟪|원문|헬라어|낱말))', after) or len(re.sub(r'\W', '', m[2])) < 3: return m[0]
        cands = []
        if m[5]: cands.append(seq(int(m[5]), int(m[6]), int(m[7] or m[6])))
        cands += [near, chap] + ([ORDER] if len(re.sub(r'\W', '', m[2])) >= 8 else [])
        new = convert(m[2], [x for x in cands if x])
        if new is None or new == m[2]: return m[0]
        REPORT.append((m[2], new)); return m[1] + new + m[3] + (m[4] or '')
    return QUOTE.sub(sub, text)


def load(path):
    sp = importlib.util.spec_from_file_location('m', path); m = importlib.util.module_from_spec(sp); sp.loader.exec_module(m); return m


chs = [int(x) for x in args[1:]] or sorted(int(c) for c in G)
total = 0
for c in chs:
    path = f'{REPO}/content/{book}/ch{c:02d}.py'
    if not os.path.exists(path): continue
    m, src = load(path), open(path, encoding='utf-8').read()
    chap = seq(c, 1, 999); pairs = []
    REPORT = []
    v0, vref = m.EP['verse']
    nv = convert(v0, [ref_seq(vref), chap])
    if nv and nv != v0: pairs.append((v0, nv)); REPORT.append((v0, nv))
    for k in ('fun', 'plot', 'mission'):
        if m.EP.get(k):
            t = field(m.EP[k], chap, chap)
            if t != m.EP[k]: pairs.append((m.EP[k], t))
    for p in m.PTS:
        near = rng(p['r'])
        if p.get('q'):
            nq = convert(p['q'][1], [ref_seq(p['q'][0]), near, chap])
            if nq and nq != p['q'][1]: pairs.append((p['q'][1], nq)); REPORT.append((p['q'][1], nq))
        for k in ('d', 'me', 'cap'):
            if p.get(k):
                t = field(p[k], near, chap)
                if t != p[k]: pairs.append((p[k], t))
    done = {}
    for old, new in pairs:  # 핵심 구절과 요점 구절이 같은 글이면 한 번에 바뀐다
        if old in done:
            if done[old] != new: sys.exit(f'{book} {c}: 같은 인용이 서로 다르게 바뀜: {old[:40]}')
            continue
        if not src.count(f'"{old}"'): sys.exit(f'{book} {c}: 원본에서 찾지 못함: {old[:40]}')
        src = src.replace(f'"{old}"', f'"{new}"'); done[old] = new
    total += len(REPORT)
    for old, new in REPORT: print(f'{book} {c}: ‘{old}’ → ‘{new}’')
    if WRITE and pairs: open(path, 'w', encoding='utf-8').write(src)
print(f'{book}: 바뀐 인용 {total}개' + (' (저장함)' if WRITE else ' (미리 보기)'))
