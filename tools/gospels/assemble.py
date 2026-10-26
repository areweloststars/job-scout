# template.html → 저장소의 index.html, 그리고 아티팩트용(문서 뼈대를 뺀) 파일
import os, sys
HERE = os.path.dirname(os.path.abspath(__file__)); REPO = os.path.dirname(os.path.dirname(HERE))
t = open(f'{HERE}/template.html', encoding='utf-8').read()
t = t.replace('const root = document.documentElement;\n', 'const root = document.documentElement;\nroot.lang = "ko";\n', 1)
assert '@@' not in t
open(f'{REPO}/index.html', 'w', encoding='utf-8').write(t)
pub = t
for a in ('<!doctype html>\n<html lang="ko">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n', '</head>\n<body>\n', '</body>\n</html>\n'):
    assert pub.count(a) == 1, a[:30]; pub = pub.replace(a, '')
if len(sys.argv) > 1:
    os.makedirs(os.path.dirname(sys.argv[1]), exist_ok=True); open(sys.argv[1], 'w', encoding='utf-8').write(pub)
print('index.html', len(t), 'publish', len(pub))
