import sys, json, re, os, shutil, html
from PIL import Image
sys.path.insert(0, '.')
REPO = '/home/user/job-scout'
P = {}
for m in ('c01', 'c02', 'c03'): P.update(__import__(m).P)
PTS = json.load(open('points.json')); A = json.load(open('assign.json'))
C = json.load(open('credits.json')) if os.path.exists('credits.json') else {}
T = 'TISSOT'
CAPS = {  # captions for images chosen after the text was written
 '4-3': "로마 시대의 흙 등잔(1세기, 메트로폴리탄 미술관). 예수 시대의 ‘등불’은 이런 손바닥만 한 등잔이었습니다.",
 '4-4': "피터르 브뤼헐(아버지), 〈추수하는 사람들〉(1565). 열매가 익자 곧 낫을 대는(4:29) 들판.",
 '4-5': "헤르만 아돌프 쾰러, 〈흑겨자〉(《쾰러의 약용식물》 도판). 성경의 겨자로 흔히 보는 식물입니다.",
 '5-3': T + "〈귀신 들린 두 사람〉. 마태복음은 이 사건을 귀신 들린 두 사람의 이야기로 전합니다(마 8:28).",
 '7-3': T + "〈바닷가에서 사람들을 가르치시는 예수〉. 무리를 다시 불러 가르치신 장면(7:14)과 이어집니다.",
 '7-5': "한스 쇼이펠라인, 〈귀 먹고 말 더듬는 사람을 고치시는 그리스도〉(1517, 목판화). 손가락을 귀에 넣으시는 장면입니다.",
 '8-3': T + "〈폭풍 중에 주무시는 예수〉. 4장의 장면이지만, 8장에서도 제자들은 같은 배 안에서 떡 한 개를 두고 걱정합니다.",
 '9-6': T + "〈회당의 귀신 들린 사람〉. 예수의 이름으로 귀신을 쫓는 일이 어떤 모습이었을지 보여 줍니다(1:23–26).",
 '9-7': "매트슨 사진 컬렉션, 〈맷돌 앞의 베두인 남자〉(1900년경). 9:42의 연자맷돌은 이보다 훨씬 커서 나귀가 돌렸습니다.",
 '10-1': "알브레히트 뒤러, 〈아담과 하와〉(1504, 동판화). 예수는 이혼 논쟁에 창조의 처음(10:6)으로 답하십니다.",
 '10-4': "〈낙타〉(12세기 전반, 스페인 산 바우델리오 성당 벽화). 그 지역에서 가장 큰 짐승입니다.",
 '12-4': "도메니키노, 〈떨기나무 앞의 모세가 있는 풍경〉(1610–16). 예수가 부활 논쟁에서 인용하신 출애굽기 3장의 장면입니다.",
 '13-3': T + "〈사도들에게 주시는 권면〉. 제자들에게 닥칠 일을 미리 일러 주시는 장면으로 읽을 수 있습니다.",
 '13-4': "웬체슬라우스 홀라르, 〈예루살렘 전경〉(1660, 동판화). 성전이 서 있던 도성의 모습입니다.",
 '13-5': "얀 반 에이크, 〈십자가 처형; 최후의 심판〉(1436–38년경). 오른쪽 그림 위쪽에 영광 중에 오시는 그리스도가 있습니다.",
 '16-3': T + "〈거룩한 여인들〉. 무덤을 찾아갔던 여인들.",
}
def cap(k, c):
    c = CAPS.get(k, c)
    if c.startswith(T):
        c = '제임스 티소, ' + c[len(T):]; c = c.replace('〉', '〉(1886–94)', 1)
    return c
BOOK = {'mrk': '마가복음', 'mat': '마태복음', 'luk': '누가복음', 'jhn': '요한복음', 'gen': '창세기', 'exo': '출애굽기'}
GAE = 'https://www.bskorea.or.kr/bible/korbibReadpage.php?version=GAE&book={}&chap={}&sec={}'
IMGREF = {  # 그림이 마가복음 밖의 본문을 그린 경우: (책, 장, 시작 절, 표시할 범위)
 '2-5': ('jhn', 2, 1, '2장 1–11절'), '3-4': ('mat', 12, 22, '12장 22–24절'), '5-3': ('mat', 8, 28, '8장 28–34절'),
 '6-1': ('luk', 4, 16, '4장 16–30절'), '7-2': ('mat', 23, 13, '23장 13–36절'), '7-3': ('mrk', 4, 1, '4장 1–2절'),
 '8-1': ('mat', 15, 29, '15장 29–31절'), '8-3': ('mrk', 4, 35, '4장 35–41절'), '8-4': ('mat', 9, 27, '9장 27–31절'),
 '8-5': ('mat', 16, 13, '16장 13–20절'), '8-7': ('luk', 12, 16, '12장 16–21절'), '9-2': ('mat', 3, 7, '3장 7–10절'),
 '9-6': ('mrk', 1, 23, '1장 23–26절'), '10-1': ('gen', 2, 18, '2장 18절–3장 7절'), '10-7': ('jhn', 13, 1, '13장 1–17절'),
 '10-8': ('mat', 20, 29, '20장 29–34절'), '11-5': ('mat', 6, 9, '6장 9–15절'), '12-4': ('exo', 3, 1, '3장 1–6절'),
 '12-5': ('luk', 10, 25, '10장 25–37절'), '12-6': ('jhn', 10, 22, '10장 22–23절'), '12-7': ('mat', 23, 13, '23장 13–36절'),
 '13-6': ('luk', 13, 6, '13장 6–9절'), '13-7': ('mat', 25, 1, '25장 1–13절'),
}
NOSCENE = {'1-1', '4-3', '4-4', '4-5', '9-7', '10-4', '13-3', '13-4'}  # 그림이 장면이 아니라 사물·풍경·인물인 경우
def mark_ref(r):
    m = re.match(r'^(\d+):(\d+)–(\d+):(\d+)$', r)
    if m: return f'마가복음 {m[1]}장 {m[2]}절–{m[3]}장 {m[4]}절', int(m[1]), int(m[2])
    c, rest = r.split(':', 1)
    return f"마가복음 {c}장 {'절, '.join(x.strip() for x in rest.split(','))}절", int(c), int(re.match(r'\d+', rest)[0])
def go(k, r, has_img):
    lab, c, v = mark_ref(r); links = [{'t': lab, 'u': GAE.format('mrk', c, v)}]
    if k in IMGREF:
        b, ic, iv, il = IMGREF[k]; il = f'{BOOK[b]} {il}'; links.append({'t': il, 'u': GAE.format(b, ic, iv)})
        where = f'이 이야기는 <b>{lab}</b>에, 그림 속 장면은 <b>{il}</b>에 기록되어 있습니다.'
    elif has_img and k not in NOSCENE: where = f'이 그림과 이야기는 <b>{lab}</b>에 기록되어 있습니다.'
    else: where = f'이 이야기는 <b>{lab}</b>에 기록되어 있습니다.'
    return {'w': where + ' 대한성서공회 성경에서 바로 읽어 보세요.', 'links': links}
def mark(s):
    s = re.sub(r'⟪([^⟫]+)⟫', r'<span class="gk" lang="grc">\1</span>', s)
    return re.sub(r'⟦([^|⟧]+)\|[^⟧]+⟧', r'<span class="he" lang="he" dir="rtl">\1</span>', s)
out = {}; os.makedirs(f'{REPO}/images', exist_ok=True); missing = []
for p in PTS:
    k = f"{p['c']}-{p['i']}"; e = P[k]; a = A[k]
    if a.startswith('ep'): img = f'images/{a}.jpg'
    elif os.path.exists(f'raw/{k}.jpg'):
        img = f"images/p{p['c']:02d}-{p['i']:02d}.jpg"; shutil.copyfile(f'raw/{k}.jpg', f'{REPO}/{img}')
    else: img = None; missing.append(k)
    rec = {'r': p['r'], 't': e.get('t', p['t']), 'd': mark(e['d']), 'h': mark(e['h']), 'me': e['me']}
    if e['q']: rec['q'] = list(e['q'])
    if img:
        w, h = Image.open(f'{REPO}/{img}').size
        c = cap(k, e['cap']); m = re.search(r'〈([^〉]+)〉', c)
        rec.update(img=img, iw=w, ih=h, cap=c, alt=(m[1] if m else c.split('.')[0]))
    rec['go'] = go(k, p['r'], bool(img))
    out.setdefault(p['c'], []).append(rec)
cred = [f'<li>{html.escape(cap(k, CAPS.get(k, "")).split(". ")[0])} · <a href="{html.escape(v["url"])}" target="_blank" rel="noopener">출처</a> · {html.escape(v["lic"])}</li>'
        for k, v in sorted(C.items(), key=lambda kv: [int(x) for x in kv[0].split('-')]) if os.path.exists(f'raw/{k}.jpg')]
js = '// 마가복음 장별 논점 데이터: docs/PLAN-points.md 기준. 빌드 스크립트가 생성합니다.\nconst POINTS = ' + json.dumps(out, ensure_ascii=False, indent=0) + ';\nconst EXTRA_CREDITS = ' + json.dumps(''.join(cred), ensure_ascii=False) + ';\n'
open(f'{REPO}/points.js', 'w', encoding='utf-8').write(js)
chars = {c: sum(len(re.sub(r'<[^>]+>', '', x['t'] + x.get('q', ['', ''])[1] + x['d'] + x['h'] + x['me'])) for x in v) for c, v in out.items()}
print('points.js', len(js), 'bytes; missing images:', missing); print('chars/ch:', chars)
