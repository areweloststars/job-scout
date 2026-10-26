# 장을 쓰기 전에 볼 원문: SBLGNT 헬라어와 개역개정 소제목(-k를 붙이면 개역개정 본문도)
import json, os, sys
REF = os.environ.get('GOSPEL_REF', '/tmp/claude-0/-home-user-job-scout/994516b7-6db5-5528-99fd-98d7f06f74c4/scratchpad/ref/dl')
args = [a for a in sys.argv[1:] if a != '-k']; book = args[0]
G = json.load(open(f'{REF}/gae-{book}.json', encoding='utf-8')); S = json.load(open(f'{REF}/sbl-{book}.json', encoding='utf-8'))
for c in args[1:]:
    print(f'## {book} {c} | ' + ' | '.join(f'{v} {h}' for v, h in G[c]['heads']))
    for v, t in S[c].items(): print(f'{v} {t}')
    if '-k' in sys.argv:
        for v, t in G[c]['verses'].items(): print(f'K{v} {t}')
