# AI 질문에 함께 보낼 참고 자료를 묶는다. 페이지는 AI에게 처음 물을 때만 불러온다(읽기 화면에는 쓰지 않는다).
#   data/ref/{책}.js — 사복음서와 잠언, 책마다 하나
#     han  : 개역한글판(1961, 대한성서공회, 저작권 만료) — dl_han.py가 한국어 위키문헌에서 받은 han-{책}.json
#     orig : 원문 — 복음서는 SBLGNT(sbl-{Matt,Mark,Luke,John}.txt), 잠언은 WLC(Prov.xml, Open Scriptures morphhb)
#     notes: Tyndale Open Study Notes(tosn-StudyNotes.xml) — [첫 장, 첫 절, 끝 장, 끝 절, 범위 표시, 글]
#     intro: 같은 자료의 책 요약(tosn-BookIntroSummaries.xml) — 목적, 저자, 시기, 배경
#   data/ref/bible-{ot1,ot2,ot3,nt}.js — 나머지 61권의 개역한글(AI가 다른 구절을 찾아볼 때만)
# python3 tools/gospels/build_ref.py <참조 폴더>   (참조 폴더는 PLAN-gospels.md의 ‘참조 본문’대로 세션마다 다시 받는다)
import html, json, os, re, sys
HERE = os.path.dirname(os.path.abspath(__file__)); REPO = os.path.dirname(os.path.dirname(HERE))
REF = sys.argv[1] if len(sys.argv) > 1 else os.environ['GOSPEL_REF']
SBL = {'mat': 'Matt', 'mrk': 'Mark', 'luk': 'Luke', 'jhn': 'John'}
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

def wlc(osis):
    x = open(f'{REF}/{osis}.xml', encoding='utf-8').read(); out = {}
    for m in re.finditer(rf'<verse osisID="{osis}\.(\d+)\.(\d+)">(.*?)</verse>', x, re.S):
        body = re.sub(r'<note\b.*?</note>', '', m[3], flags=re.S)
        s = ''
        for t in re.finditer(r'<w\b[^>]*>(.*?)</w>|<seg type="([^"]+)">(.*?)</seg>', body, re.S):
            if t[1] is not None:
                word = re.sub('[֑-ֽ֯]', '', t[1].replace('/', ''))
                s += ('' if not s or s.endswith('־') else ' ') + word
            elif t[2] in ('x-maqqef', 'x-sof-pasuq'): s += t[3]
        out[f'{m[1]}:{m[2]}'] = s.strip()
    return out

def han(b):
    d = json.load(open(f'{REF}/han-{b}.json', encoding='utf-8'))
    return {f'{c}:{v}': t for c in d for v, t in d[c]['verses'].items()}

TOSN = {'mat': 'Matt', 'mrk': 'Mark', 'luk': 'Luke', 'jhn': 'John', 'pro': 'Pr'}
TOSN_INTRO = {'mat': 'Matthew', 'mrk': 'Mark', 'luk': 'Luke', 'jhn': 'John', 'pro': 'Proverbs'}
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
        sr = re.search(r'<span class="sn-ref">(.*?)</span>', body, re.S)
        href = re.search(r'\?bref=([^"]+)"', sr[1]) if sr else None
        cover = href[1] if href and href[1].split('.')[0] == pre else m[2]  # 보이는 범위(sn-ref)가 그 노트가 다루는 곳. 없으면 refs
        r = re.match(rf'^{pre}\.(\d+)\.(\d+)(?:-(?:(\d+)\.)?(\d+))?$', cover)
        assert r, (b, cover)
        c1, v1 = int(r[1]), int(r[2]); c2 = int(r[3] or r[1]); v2 = int(r[4] or r[2])
        label = text_of(sr[1]) if sr else f'{c1}:{v1}'
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
for b in ('mat', 'mrk', 'luk', 'jhn', 'pro'):
    lang = 'hbo' if b == 'pro' else 'grc'
    orig = wlc('Prov') if b == 'pro' else sblgnt(SBL[b])
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
    'ot3': 'job psa ecc sng isa jer lam ezk dan hos jol amo oba jnh mic nam hab zep hag zec mal',
    'nt': 'act rom 1co 2co gal eph php col 1th 2th 1ti 2ti tit phm heb jas 1pe 2pe 1jn 2jn 3jn jud rev',
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
