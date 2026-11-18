# 장을 쓰기 전에 볼 원문: SBLGNT 헬라어와 개역한글을 절마다 나란히 (누가복음). python3 tools/gospels/side.py 21 22
import json, os, sys
R = os.environ['GOSPEL_REF']
S = json.load(open(f'{R}/sbl-luk.json', encoding='utf-8')); H = json.load(open(f'{R}/han-luk.json', encoding='utf-8'))
for c in sys.argv[1:]:
    print(f'## {c}장')
    for v in sorted(set(S[c]) | set(H[c]['verses']), key=int):
        print(f"{v} {S[c].get(v, '(SBLGNT 없음)')}\n  한 {H[c]['verses'].get(v, '(없음)')}")
