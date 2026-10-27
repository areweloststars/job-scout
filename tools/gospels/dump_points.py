# 장의 요점을 보여 준다: 범위, 제목, q, 지금의 설명과 질문, 그림 제목
import os, importlib.util, re, sys
REPO = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
b, c = sys.argv[1], int(sys.argv[2])
f = f'{REPO}/content/{b}/ch{c:02d}.py'
s = importlib.util.spec_from_file_location('m', f); m = importlib.util.module_from_spec(s); s.loader.exec_module(m)
for p in m.PTS:
    cap = p.get('cap') or ''; ti = re.search(r'〈([^〉]*)〉', cap)
    print(f"## {p['r']} | {p['t']} | q {p['q'][0] + ' ' + p['q'][1] if p.get('q') else '-'} | 그림 {ti[1] if ti else '-'}")
    print('d:', p['d']); print('me:', p['me'])
