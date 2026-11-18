# 누가복음 설명·질문·줄거리 안의 ‘…’ 인용이 그 장 개역한글 본문에 그대로 있는지, 설명 길이는 얼마인지. python3 tools/gospels/qcheck.py 21 22
# (낱말 뜻풀이처럼 성경 인용이 아닌 ‘…’도 걸리므로 눈으로 가려 본다)
import importlib.util, json, os, re, sys
R = os.environ['GOSPEL_REF']
H = json.load(open(f'{R}/han-luk.json', encoding='utf-8')); norm = lambda s: re.sub(r'[\W_]', '', s)
for c in sys.argv[1:]:
    f = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', 'content', 'luk', f'ch{int(c):02d}.py')
    s = importlib.util.spec_from_file_location('m', f); m = importlib.util.module_from_spec(s); s.loader.exec_module(m)
    full = norm(''.join(H[c]['verses'].values()))
    texts = [('EP.' + k, m.EP[k]) for k in ('fun', 'plot', 'mission')] + [(p['r'] + '.' + k, p[k]) for p in m.PTS for k in ('d', 'me')]
    miss = [(w, q) for w, t in texts for q in re.findall(r'‘([^’]+)’', t) if norm(q) not in full]
    L = [len(p['d']) for p in m.PTS]
    print(f'{c}장: 요점 {len(m.PTS)}, 설명 {L} 평균 {sum(L)//len(L)}, 절 {len(m.TX)}, 확인할 인용 {len(miss)}')
    for w, q in miss: print('   ?', w, '‘' + q + '’')
