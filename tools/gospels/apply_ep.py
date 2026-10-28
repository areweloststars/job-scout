# 표준입력의 {칸: 글} 사전으로 장 파일의 회차 소개(EP)를 바꾼다. plot을 주면 예전 intent 줄을 plot 줄로 바꾼다
import os, ast, re, sys
REPO = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
b, c = sys.argv[1], int(sys.argv[2])
f = f'{REPO}/content/{b}/ch{c:02d}.py'
s = open(f, encoding='utf-8').read(); new = ast.literal_eval(sys.stdin.read())
head, sep, rest = s.partition('\nPTS = [')
for k, v in new.items():
    assert k in ('title', 'fun', 'plot', 'mission') and '"' not in v and '\\' not in v, k
    pat = r'\n  (intent|plot)="(?:[^"\\]|\\.)*"' if k == 'plot' else rf'\n  {k}="(?:[^"\\]|\\.)*"'
    head, n = re.subn(pat, lambda x: f'\n  {k}="{v}"', head, count=1)
    assert n == 1, k
open(f, 'w', encoding='utf-8').write(head + sep + rest); print('ep', b, c, sorted(new))
