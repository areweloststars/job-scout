# 표준입력의 {범위: (설명, 질문)} 사전으로 장 파일의 d와 me를 바꾼다(None이면 그대로 둔다)
import os, ast, re, sys
REPO = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
b, c = sys.argv[1], int(sys.argv[2])
f = f'{REPO}/content/{b}/ch{c:02d}.py'
s = open(f, encoding='utf-8').read(); new = ast.literal_eval(sys.stdin.read())
for r, (d, me) in new.items():
    assert '"' not in (d or '') + (me or ''), r
    assert me is None or me.rstrip().endswith('?'), r
    i = s.index(f'dict(r="{r}"'); j = s.find('dict(r=', i + 5); j = len(s) if j < 0 else j
    seg = s[i:j]
    seg, n1 = re.subn(r'(\s)d="[^"]*"', lambda x: x[1] + 'd="' + d + '"', seg, count=1) if d else (seg, 1)
    seg, n2 = re.subn(r'(\s)me="[^"]*"', lambda x: x[1] + 'me="' + me + '"', seg, count=1) if me else (seg, 1)
    assert n1 == 1 and n2 == 1, (r, n1, n2)
    s = s[:i] + seg + s[j:]
open(f, 'w', encoding='utf-8').write(s); print('applied', b, c, len(new))
