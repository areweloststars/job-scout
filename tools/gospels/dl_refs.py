# 사복음서 참조 본문 내려받기: SBLGNT(LogosBible) 텍스트와 대한성서공회 개역개정 장별 페이지
import urllib.request, time, os, sys
UA = {'User-Agent': 'Mozilla/5.0 (job-scout bible reader)'}
OUT = sys.argv[1]
def get(url, path, tries=5):
    if os.path.exists(path) and os.path.getsize(path) > 1000: return
    for t in range(tries):
        try:
            b = urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=60).read()
            open(path, 'wb').write(b); print('ok', path, len(b), flush=True); return
        except Exception as e:
            print('retry', url, e, flush=True); time.sleep(5 * (t + 1))
    print('FAIL', url, flush=True)
for name in ('Matt', 'Mark', 'Luke', 'John'):
    get(f'https://raw.githubusercontent.com/LogosBible/SBLGNT/master/data/sblgnt/text/{name}.txt', f'{OUT}/sbl-{name}.txt')
for b, n in (('mat', 28), ('mrk', 16), ('luk', 24), ('jhn', 21)):
    for c in range(1, n + 1):
        get(f'https://www.bskorea.or.kr/bible/korbibReadpage.php?version=GAE&book={b}&chap={c}', f'{OUT}/gae-{b}{c}.html'); time.sleep(1)
for n, name in (('61', 'Mt'), ('62', 'Mk'), ('63', 'Lk'), ('64', 'Jn')):  # 헬라어 낱말의 기본형(lemma) 대조용
    get(f'https://raw.githubusercontent.com/morphgnt/sblgnt/master/{n}-{name}-morphgnt.txt', f'{OUT}/{n}-{name}-morphgnt.txt')
for ot in ('Gen', 'Exod', 'Lev', 'Num', 'Deut', '1Sam', '2Sam', '1Kgs', 'Ps', 'Prov', 'Isa', 'Jer', 'Ezek', 'Dan', 'Hos', 'Joel', 'Jonah', 'Mic', 'Zech', 'Mal'):  # 히브리어 대조용 WLC
    get(f'https://raw.githubusercontent.com/openscriptures/morphhb/master/wlc/{ot}.xml', f'{OUT}/{ot}.xml')
print('DONE', flush=True)
