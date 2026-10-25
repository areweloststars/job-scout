import re, json
def points(path='/home/user/job-scout/docs/PLAN-points.md'):
    out = []
    for line in open(path, encoding='utf-8'):
        m = re.match(r'^\| (\d+) \| (.+) \|$', line.strip())
        if not m: continue
        c = int(m[1])
        for i, item in enumerate(m[2].split(' · '), 1):
            mm = re.match(r'^(\d+:\d+(?:–\d+(?::\d+)?)?(?:, ?\d+(?:–\d+)?)*) (.+)$', item.strip())
            assert mm, item
            out.append({'c': c, 'i': i, 'r': mm[1], 't': mm[2]})
    return out
