# 개역한글판(1961, 2012년 저작권 만료) 복음서 본문을 한국어 위키문헌에서 받아 절별 JSON으로 저장한다.
# python3 tools/gospels/dl_han.py <폴더>  →  <폴더>/han-mat.json 등 {장: {"verses": {절: 본문}}}
import json, os, re, sys, time, urllib.error, urllib.parse, urllib.request

BOOKS = {'mat': '마태복음', 'mrk': '마가복음', 'luk': '누가복음', 'jhn': '요한복음'}
URL = 'https://ko.wikisource.org/wiki/{}?action=raw'
UA = 'gospels-study-page/1.0 (personal Bible study page; https://github.com/areweloststars/job-scout)'


def parse(raw):
    out, ch = {}, None
    for line in raw.splitlines():
        m = re.match(r'==\s*(\d+)장\s*==', line)
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
    page = urllib.parse.quote(f'개역한글판/{name}')
    req = urllib.request.Request(URL.format(page), headers={'User-Agent': UA})
    for wait in (0, 30, 90, 180):  # 너무 잦은 요청(429)이면 기다렸다가 다시 받는다
        time.sleep(wait)
        try:
            return urllib.request.urlopen(req, timeout=60).read().decode('utf-8')
        except urllib.error.HTTPError as e:
            if e.code != 429: raise
    raise SystemExit(f'{name}: 위키문헌이 계속 요청을 막습니다(429)')


def main(folder):
    for b, name in BOOKS.items():
        raw_path = f'{folder}/han-{b}.raw'
        if not os.path.exists(raw_path):  # 원문은 한 번만 받아 두고 다시 쓴다
            open(raw_path, 'w', encoding='utf-8').write(fetch(name))
        data = parse(open(raw_path, encoding='utf-8').read())
        json.dump(data, open(f'{folder}/han-{b}.json', 'w', encoding='utf-8'), ensure_ascii=False)
        print(b, len(data), '장', sum(len(c['verses']) for c in data.values()), '절')


if __name__ == '__main__':
    main(sys.argv[1])
