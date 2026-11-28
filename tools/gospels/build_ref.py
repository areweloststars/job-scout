# AI 질문에 함께 보낼 참고 자료를 묶는다. 페이지는 AI에게 처음 물을 때만 불러온다(읽기 화면에는 쓰지 않는다).
#   data/ref/{책}.js — 사복음서와 잠언, 시편, 히브리서, 책마다 하나
#     han  : 개역한글판(1961, 대한성서공회, 저작권 만료) — dl_han.py가 한국어 위키문헌에서 받은 han-{책}.json
#     orig : 원문 — 복음서·히브리서는 SBLGNT(sbl-{Matt,Mark,Luke,John,Heb}.txt), 잠언·시편은 WLC(Prov.xml, Ps.xml, Open Scriptures morphhb).
#            시편은 morphhb의 KJV 대응 표시로 개역한글 절 번호에 맞춘다(표제는 첫 절 앞에, 번호가 다르면 히브리어 번호를 함께)
#     notes: Tyndale Open Study Notes(tosn-StudyNotes.xml) — [첫 장, 첫 절, 끝 장, 끝 절, 범위 표시, 글]
#     intro: 같은 자료의 책 요약(tosn-BookIntroSummaries.xml) — 목적, 저자, 시기, 배경
#   data/ref/bible-{ot1,ot2,ot3,nt}.js — 나머지 60권의 개역한글(AI가 다른 구절을 찾아볼 때만)
# python3 tools/gospels/build_ref.py <참조 폴더>   (참조 폴더는 PLAN-gospels.md의 ‘참조 본문’대로 세션마다 다시 받는다)
import html, json, os, re, sys
HERE = os.path.dirname(os.path.abspath(__file__)); REPO = os.path.dirname(os.path.dirname(HERE))
REF = sys.argv[1] if len(sys.argv) > 1 else os.environ['GOSPEL_REF']
SBL = {'mat': 'Matt', 'mrk': 'Mark', 'luk': 'Luke', 'jhn': 'John', 'heb': 'Heb'}
HEAD = {
    'grc': '원문: SBL Greek New Testament(SBLGNT). Copyright 2010 Society of Biblical Literature and Logos Bible Software. '
           'CC BY 4.0(https://creativecommons.org/licenses/by/4.0/). 사본 차이 표시(⸀⸂⸃ 등)는 지웠다.',
    'hbo': '원문: Westminster Leningrad Codex(퍼블릭 도메인), Open Scriptures Hebrew Bible(morphhb)에서 낱말만 모았다. '
           '형태소 나눔(/)과 강세 부호는 지우고 모음 부호는 남겼다.',
}

def sblgnt(name):
    out = {}
    for line in open(f'{REF}/sbl-{name}.txt', encoding='utf-8'):
        m = re.match(r'^\S+ (\d+):(\d+)\t(.*)$', line.rstrip('\n'))
        if m: out[f'{m[1]}:{m[2]}'] = re.sub(r'\s+', ' ', re.sub('[⸀-⸏]', '', m[3])).strip()
    return out

def wlc(osis, kjv=False):
    """WLC(morphhb) 낱말만 모은다. 케티브(쓰인 글자)는 읽는 말(케레)로 바꾼다.
    kjv=True(시편): morphhb의 <note>KJV:…</note>로 개역한글과 같은 KJV 절 번호에 맞춘다.
    표제(히브리어 1절 또는 1–2절)는 첫 절 앞에 붙이고, 번호가 다른 절은 히브리어 번호를 함께 적는다."""
    x = open(f'{REF}/{osis}.xml', encoding='utf-8').read(); rows = []
    for m in re.finditer(rf'<verse osisID="{osis}\.(\d+)\.(\d+)">(.*?)</verse>', x, re.S):
        body = m[3]
        maps = [(int(c), int(v)) for c, v in re.findall(rf'<note>KJV:{osis}\.(\d+)\.(\d+)</note>', body)]
        body = re.sub(r'<w type="x-ketiv"[^>]*>.*?</w>\s*<note type="variant">.*?<rdg type="x-qere">(.*?)</rdg>\s*</note>', r'\1', body, flags=re.S)
        body = re.sub(r'<note\b.*?</note>', '', body, flags=re.S)
        s = ''
        for t in re.finditer(r'<w\b[^>]*>(.*?)</w>|<seg type="([^"]+)">(.*?)</seg>', body, re.S):
            if t[1] is not None:
                word = re.sub('[\u0591-\u05AF\u05BD]', '', re.sub(r'<[^>]+>', '', t[1]).replace('/', ''))  # 낱말 안의 표시(작은 글자 seg 등)도 걷어 낸다
                s += ('' if not s or s.endswith('־') else ' ') + word
            elif t[2] in ('x-maqqef', 'x-sof-pasuq'): s += t[3]
        rows.append((int(m[1]), int(m[2]), maps, s.strip()))
    if not kjv: return {f'{c}:{v}': t for c, v, _, t in rows}
    out, by_ch = {}, {}
    for r in rows: by_ch.setdefault(r[0], []).append(r)
    for c, vs in by_ch.items():
        first = next((r for r in vs if r[2]), None)
        shift = first is not None and first[2][0] < (first[0], first[1])
        title = [r for r in vs if shift and not r[2] and r[1] < first[1]]
        pre = f'[표제, 히브리어 {c}:{title[0][1]}{"–" + str(title[-1][1]) if len(title) > 1 else ""}] ' + ' '.join(r[3] for r in title) + ' ‖ ' if title else ''
        for hc, hv, maps, t in vs:
            if (hc, hv, maps, t) in title: continue  # 표제는 첫 절 앞에 붙였다
            tgt = maps or [(hc, hv)]
            for i, (kc, kv) in enumerate(tgt):
                label = '' if (kc, kv) == (hc, hv) and len(tgt) == 1 else f' (히브리어 {hc}:{hv}' + (f'에 개역한글 {kc}:{tgt[0][1]}–{tgt[-1][1]}이 함께 있음' if len(tgt) > 1 else '') + ')'
                out[f'{kc}:{kv}'] = (t if i == 0 else '(앞 절과 같은 히브리어 절)') + label
        k1 = f'{c}:1'
        if pre and k1 in out: out[k1] = pre + out[k1]
    return out

def han(b):
    d = json.load(open(f'{REF}/han-{b}.json', encoding='utf-8'))
    return {f'{c}:{v}': t for c in d for v, t in d[c]['verses'].items()}

TOSN = {'mat': 'Matt', 'mrk': 'Mark', 'luk': 'Luke', 'jhn': 'John', 'pro': 'Pr', 'psa': 'Ps', 'heb': 'Heb'}
TOSN_INTRO = {'mat': 'Matthew', 'mrk': 'Mark', 'luk': 'Luke', 'jhn': 'John', 'pro': 'Proverbs', 'psa': 'Psalms', 'heb': 'Hebrews'}
_sn = None

def text_of(body):  # XML 표시만 걷어 낸다(글은 그대로)
    body = re.sub(r'<[^>]+>', '', body)
    return re.sub(r'\s+', ' ', html.unescape(body)).strip()

def notes(b):
    global _sn
    if _sn is None: _sn = open(f'{REF}/tosn-StudyNotes.xml', encoding='utf-8').read()
    pre, out = TOSN[b], []
    for m in re.finditer(r'<item name="([^"]+)"[^>]*>\s*<refs>([^<]+)</refs>\s*<body>(.*?)</body>', _sn, re.S):
        if m[2].split('.')[0] != pre: continue
        body = m[3]
        sr = re.search(r'<span class="sn-ref">(.*?)</span>(?:<span class="sn-ref-sc">(.*?)</span>)?', body, re.S)  # 시편 표제 노트는 ‘51:’ 뒤에 작은 대문자 ‘title’
        href = re.search(r'\?bref=([^"]+)"', sr[1]) if sr else None
        pat = rf'^{pre}\.(\d+)\.(\d+)(?:-(?:(\d+)\.)?(\d+))?$'
        cover = href[1] if href and re.match(pat, href[1]) else m[2]  # 보이는 범위(sn-ref)가 그 노트가 다루는 곳. 시편 표제(‘51:title’)처럼 맞지 않으면 refs
        r = re.match(pat, cover)
        assert r, (b, cover)
        c1, v1 = int(r[1]), int(r[2]); c2 = int(r[3] or r[1]); v2 = int(r[4] or r[2])
        label = (text_of(sr[1]) + text_of(sr[2] or '') if sr else f'{c1}:{v1}').replace(':title', ':표제')
        txt = text_of(body.replace(sr[0], '', 1) if sr else body)
        out.append([c1, v1, c2, v2, label, txt])
    return out

def intro(b):
    x = open(f'{REF}/tosn-BookIntroSummaries.xml', encoding='utf-8').read()
    m = re.search(rf'<item name="{TOSN_INTRO[b]}IntroSummary".*?<body>(.*?)</body>', x, re.S)
    lines, key = [], None
    for cls, t in re.findall(r'<p class="([^"]+)">(.*?)</p>', m[1], re.S):
        if cls == 'intro-sidebar-h1': key = text_of(t)
        elif cls.startswith('intro-sidebar-body') and key: lines.append(f'{key}: {text_of(t)}')
    return '\n'.join(lines)

NOTE_HEAD = ('// 연구 노트(notes, intro): Tyndale Open Study Notes. Copyright (C) 2022 by Tyndale House Publishers. '
             'CC BY-SA 4.0(https://creativecommons.org/licenses/by-sa/4.0/). 원래 자료: http://www.tyndaleopenresources.com. '
             'XML 표시만 걷어 냈고 글은 바꾸지 않았다.\n')
HAN_HEAD = '// 개역한글판(1961, 대한성서공회): 저작권 보호기간이 끝난 번역. 본문은 한국어 위키문헌.\n'

os.makedirs(f'{REPO}/data/ref', exist_ok=True)
for b in ('mat', 'mrk', 'luk', 'jhn', 'pro', 'psa', 'heb'):
    lang = 'hbo' if b in ('pro', 'psa') else 'grc'
    orig = wlc('Prov') if b == 'pro' else wlc('Ps', kjv=True) if b == 'psa' else sblgnt(SBL[b])
    h = han(b)
    data = {'lang': lang, 'han': h, 'orig': orig, 'notes': notes(b), 'intro': intro(b)}
    js = (f'// {b}: AI 질문에 함께 보내는 참고 자료. tools/gospels/build_ref.py가 만듭니다.\n'
          + HAN_HEAD + f'// {HEAD[lang]}\n' + NOTE_HEAD +
          f'gospelRef({json.dumps(b)}, ' + json.dumps(data, ensure_ascii=False, separators=(',', ':')) + ');\n')
    open(f'{REPO}/data/ref/{b}.js', 'w', encoding='utf-8').write(js)
    only_h = sorted(set(h) - set(orig), key=lambda k: tuple(map(int, k.split(':'))))
    only_o = sorted(set(orig) - set(h), key=lambda k: tuple(map(int, k.split(':'))))
    print(b, f'개역한글 {len(h)}절, 원문 {len(orig)}절, 노트 {len(data["notes"])}개, {len(js.encode())//1024}KB', '| 개역한글에만', only_h, '| 원문에만', only_o)

# 나머지 61권: 개역한글만, 네 묶음으로(아티팩트 파일 수 한도 때문에 책마다 따로 두지 않는다)
GROUPS = {
    'ot1': 'gen exo lev num deu',
    'ot2': 'jos jdg rut 1sa 2sa 1ki 2ki 1ch 2ch ezr neh est',
    'ot3': 'job ecc sng isa jer lam ezk dan hos jol amo oba jnh mic nam hab zep hag zec mal',  # 시편은 data/ref/psa.js
    'nt': 'act rom 1co 2co gal eph php col 1th 2th 1ti 2ti tit phm jas 1pe 2pe 1jn 2jn 3jn jud rev',  # 히브리서는 data/ref/heb.js
}
sys.path.insert(0, HERE)
from dl_han import ALL
for g, ids in GROUPS.items():
    if not all(os.path.exists(f'{REF}/han-{b}.json') for b in ids.split()):
        print(g, '건너뜀: 개역한글을 다 받지 않았다(dl_han.py <폴더> all)'); continue
    data = {b: {'name': ALL[b], 'han': han(b)} for b in ids.split()}
    js = (f'// 성경 {g}: AI가 다른 구절을 찾아볼 때만 불러오는 개역한글 본문. tools/gospels/build_ref.py가 만듭니다.\n' + HAN_HEAD +
          f'gospelBible({json.dumps(g)}, ' + json.dumps(data, ensure_ascii=False, separators=(',', ':')) + ');\n')
    open(f'{REPO}/data/ref/bible-{g}.js', 'w', encoding='utf-8').write(js)
    print(g, len(data), '권', sum(len(d['han']) for d in data.values()), '절', f'{len(js.encode())//1024}KB')
