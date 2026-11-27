# 개역한글판(1961, 2012년 저작권 만료) 본문을 한국어 위키문헌에서 받아 절별 JSON으로 저장한다.
# python3 tools/gospels/dl_han.py <폴더>        →  다섯 책(사복음서와 잠언): <폴더>/han-mat.json 등 {장: {"verses": {절: 본문}}}
# python3 tools/gospels/dl_han.py <폴더> all    →  성경 66권 모두(AI가 다른 구절을 찾아볼 때 쓰는 data/ref/bible-*.js용)
import json, os, re, sys, time, urllib.error, urllib.parse, urllib.request

FIVE = ('mat', 'mrk', 'luk', 'jhn', 'pro')
# 책 코드(대한성서공회 누리집 주소에 쓰는 것과 같다)와 위키문헌 쪽 이름(개역한글판 책 이름)
ALL = {
    'gen': '창세기', 'exo': '출애굽기', 'lev': '레위기', 'num': '민수기', 'deu': '신명기', 'jos': '여호수아', 'jdg': '사사기', 'rut': '룻기',
    '1sa': '사무엘상', '2sa': '사무엘하', '1ki': '열왕기상', '2ki': '열왕기하', '1ch': '역대상', '2ch': '역대하', 'ezr': '에스라', 'neh': '느헤미야',
    'est': '에스더', 'job': '욥기', 'psa': '시편', 'pro': '잠언', 'ecc': '전도서', 'sng': '아가', 'isa': '이사야', 'jer': '예레미야',
    'lam': '예레미야 애가', 'ezk': '에스겔', 'dan': '다니엘', 'hos': '호세아', 'jol': '요엘', 'amo': '아모스', 'oba': '오바댜', 'jnh': '요나',
    'mic': '미가', 'nam': '나훔', 'hab': '하박국', 'zep': '스바냐', 'hag': '학개', 'zec': '스가랴', 'mal': '말라기',
    'mat': '마태복음', 'mrk': '마가복음', 'luk': '누가복음', 'jhn': '요한복음', 'act': '사도행전', 'rom': '로마서', '1co': '고린도전서', '2co': '고린도후서',
    'gal': '갈라디아서', 'eph': '에베소서', 'php': '빌립보서', 'col': '골로새서', '1th': '데살로니가전서', '2th': '데살로니가후서', '1ti': '디모데전서', '2ti': '디모데후서',
    'tit': '디도서', 'phm': '빌레몬서', 'heb': '히브리서', 'jas': '야고보서', '1pe': '베드로전서', '2pe': '베드로후서', '1jn': '요한일서', '2jn': '요한이서',
    '3jn': '요한삼서', 'jud': '유다서', 'rev': '요한계시록',
}
BOOKS = {b: ALL[b] for b in FIVE}
PAGE = {'lam': '예레미야애가', '1jn': '요한1서', '2jn': '요한2서', '3jn': '요한3서'}  # 위키문헌 쪽 이름이 책 이름과 다른 것
URL = 'https://ko.wikisource.org/w/index.php?title={}&action=raw'
UA = 'bible-study-page/1.0 (personal Bible study; low-volume)'  # 누구의 프로젝트인지 드러내지 않는 이름


def parse(raw):
    out, ch = {}, None
    for line in raw.splitlines():
        m = re.match(r'==\s*(\d+)\s*(?:장|편)\s*==', line)  # 시편은 ‘편’
        if m:
            ch = m[1]; out[ch] = {'verses': {}}; continue
        m = re.match(r'\{\{절\|(\d*)\|(\d*)\}\}\s*(.*)', line)
        if m and ch:
            v = m[2] or '1'  # 장 첫 절은 {{절|장|}}, 나머지는 {{절||절}}
            text = re.sub(r'\{\{[^}]*\}\}|<[^>]+>', '', m[3])
            # 위키문헌 본문은 침례교판 표기(침례)라, 1961년 개역한글판 표기(세례)로 되돌린다
            out[ch]['verses'][v] = re.sub(r'\s+', ' ', text).strip().replace('침례', '세례')
    return out


def fetch(name):
    page = urllib.parse.quote(f'개역한글판/{name}'.replace(' ', '_'))
    req = urllib.request.Request(URL.format(page), headers={'User-Agent': UA})
    for wait in (0, 30, 90, 180):  # 너무 잦은 요청(429)이면 기다렸다가 다시 받는다
        time.sleep(wait)
        try:
            return urllib.request.urlopen(req, timeout=60).read().decode('utf-8')
        except urllib.error.HTTPError as e:
            if e.code != 429: raise
    raise SystemExit(f'{name}: 위키문헌이 계속 요청을 막습니다(429)')


def main(folder, books):
    failed = []
    for b, name in books.items():
        raw_path = f'{folder}/han-{b}.raw'
        if not os.path.exists(raw_path):  # 원문은 한 번만 받아 두고 다시 쓴다
            try:
                raw = fetch(PAGE.get(b, name))  # 받은 뒤에 파일을 만든다(실패하면 빈 파일이 남지 않게)
            except (urllib.error.URLError, SystemExit) as e:
                print(b, name, '받지 못함:', e); failed.append(b); continue
            open(raw_path, 'w', encoding='utf-8').write(raw)
            time.sleep(3)  # 위키문헌에 부담이 없게 천천히
        data = parse(open(raw_path, encoding='utf-8').read())
        json.dump(data, open(f'{folder}/han-{b}.json', 'w', encoding='utf-8'), ensure_ascii=False)
        print(b, len(data), '장', sum(len(c['verses']) for c in data.values()), '절')
    if failed: raise SystemExit(f'받지 못한 책: {failed}')


if __name__ == '__main__':
    main(sys.argv[1], ALL if sys.argv[2:] == ['all'] else BOOKS)
