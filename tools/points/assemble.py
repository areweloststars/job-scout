import json, os, re
from PIL import Image
REPO = '/home/user/job-scout'; B = 'blocks.json'
if not os.path.exists(B):
    s = open(f'{REPO}/index.html', encoding='utf-8').read()
    def between(a, b, inclusive=False, start=0):
        i = s.index(a, start); j = s.index(b, i + len(a))
        return s[i:j + len(b)] if inclusive else s[i + len(a):j]
    blocks = {
        'METHODS_CONST': between('const METHODS = {', '};\n', True).rstrip('\n'),
        'EP': between('const EP = [', '\n];\n', True).rstrip('\n'),
        'METHODS_HTML': between('<section class="sec" id="methods">', '</section>').strip('\n'),
        'WHY_HTML': between('<ul class="intent">', '</ul>', True),
        'SOURCES_HTML': between('<footer class="sources" id="sources">', '</footer>').strip('\n'),
    }
    json.dump(blocks, open(B, 'w', encoding='utf-8'), ensure_ascii=False)
blocks = json.load(open(B, encoding='utf-8'))
src = blocks['SOURCES_HTML']
first_p_end = src.index('</p>') + 4
src = src[:first_p_end] + '\n    <p>‘본문 펼치기’의 쉬운 번역은 헬라어 원문 SBL Greek New Testament(SBLGNT, Society of Biblical Literature)를 이 페이지에서 쉬운 우리말로 옮긴 것으로, 공식 번역이 아닙니다.</p>' + src[first_p_end:]
t = open('template.html', encoding='utf-8').read()
w, h = Image.open(f'{REPO}/images/p07-03.jpg').size
for k, v in {**blocks, 'SOURCES_HTML': src, 'HERO_W': str(w), 'HERO_H': str(h)}.items():
    assert f'@@{k}@@' in t, k; t = t.replace(f'@@{k}@@', v)
t = t.replace('const root = document.documentElement;\n', 'const root = document.documentElement;\nroot.lang = "ko";\n', 1)
assert '@@' not in t
open(f'{REPO}/index.html', 'w', encoding='utf-8').write(t)
pub = t
for a in ('<!doctype html>\n<html lang="ko">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n', '</head>\n<body>\n', '</body>\n</html>\n'):
    assert pub.count(a) == 1, a[:30]; pub = pub.replace(a, '')
os.makedirs('../publish', exist_ok=True); open('../publish/index.html', 'w', encoding='utf-8').write(pub)
print('index.html', len(t), 'publish', len(pub))
