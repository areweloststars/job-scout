# dl_refs.py로 받은 참조 본문을 장:절 JSON으로 바꾼다: sbl-{책}.json(SBLGNT), gae-{책}.json(개역개정 본문과 소제목)
import glob, html, json, re, sys
D = sys.argv[1]
SBL = {'mat': 'Matt', 'luk': 'Luke', 'jhn': 'John'}
clean = lambda s: re.sub(r'\s+', ' ', html.unescape(re.sub(r'<[^>]+>', '', s))).strip()
for b, name in SBL.items():
    sbl = {}
    for line in open(f'{D}/sbl-{name}.txt', encoding='utf-8'):
        m = re.match(r'^\S+ (\d+):(\d+)\t(.*)$', line.rstrip('\n'))
        if m: sbl.setdefault(m[1], {})[m[2]] = m[3].strip()
    json.dump(sbl, open(f'{D}/sbl-{b}.json', 'w', encoding='utf-8'), ensure_ascii=False)
    gae = {}
    for f in glob.glob(f'{D}/gae-{b}*.html'):
        c = re.search(rf'gae-{b}(\d+)\.html$', f)[1]
        s = open(f, encoding='utf-8', errors='replace').read(); s = s[s.index('tdBible1'):]
        s = re.sub(r"<div id='D_[^']*' class=D2.*?</div>", '', s, flags=re.S)  # 각주 내용
        s = re.sub(r'<a class=comment.*?</a>', '', s, flags=re.S)  # 각주 번호
        heads, verses = [], {}
        for m in re.finditer(r'<font class="smallTitle">(.*?)</font>|<span class="number">(\d+)&nbsp;&nbsp;&nbsp;</span>(.*?)</span>\s*(?:<br|</div>)', s, re.S):
            if m[1] is not None: heads.append([None, clean(m[1])])
            else:  # 절 가운데서 시작하는 소제목(눅 9:43, 23:56; 요 18:38)은 본문에서 떼어 그 절에 단다
                heads += [[int(m[2]), clean(t)] for t in re.findall(r'<font class="smallTitle">(.*?)</font>', m[3], re.S)]
                verses[m[2]] = clean(re.sub(r'<font class="smallTitle">.*?</font>', ' ', m[3], flags=re.S))
                for h in heads:
                    if h[0] is None: h[0] = int(m[2])
        gae[c] = {'verses': verses, 'heads': heads}
    json.dump(gae, open(f'{D}/gae-{b}.json', 'w', encoding='utf-8'), ensure_ascii=False)
    nv = lambda d: sum(len(x) for x in d.values())
    diff = {c: (len(gae[c]['verses']), len(sbl.get(c, {}))) for c in sorted(gae, key=int) if len(gae[c]['verses']) != len(sbl.get(c, {}))}
    print(b, '장', len(gae), len(sbl), '| 절 개역개정', sum(len(x['verses']) for x in gae.values()), 'SBLGNT', nv(sbl), '| 절 수가 다른 장', diff)
