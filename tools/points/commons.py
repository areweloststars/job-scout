import json, re, urllib.request, urllib.parse, html
UA = {'User-Agent': 'job-scout-bible-reader/1.0 (https://github.com/areweloststars/job-scout)'}
API = 'https://commons.wikimedia.org/w/api.php'
import time, urllib.error
def fetch(url, tries=8):
    for t in range(tries):
        try:
            time.sleep(1.5)
            return urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=90).read()
        except urllib.error.HTTPError as e:
            if e.code not in (429, 503) or t == tries - 1: raise
            time.sleep(int(e.headers.get('retry-after') or 20) + 2 + 5 * t)
def get(params):
    q = urllib.parse.urlencode({**params, 'format': 'json', 'formatversion': 2})
    return json.loads(fetch(API + '?' + q))
def clean(s): return re.sub(r'\s+', ' ', html.unescape(re.sub(r'<[^>]+>', '', s or ''))).strip()
def info(pages):
    out = []
    for p in pages:
        ii = (p.get('imageinfo') or [{}])[0]; md = ii.get('extmetadata', {})
        out.append({'title': p['title'], 'w': ii.get('width'), 'h': ii.get('height'), 'thumb': ii.get('thumburl'),
                    'lic': clean(md.get('LicenseShortName', {}).get('value')), 'artist': clean(md.get('Artist', {}).get('value'))[:80],
                    'date': clean(md.get('DateTimeOriginal', {}).get('value'))[:40], 'desc': clean(md.get('ImageDescription', {}).get('value'))[:200],
                    'url': ii.get('descriptionurl')})
    return out
IIP = {'prop': 'imageinfo', 'iiprop': 'url|size|extmetadata', 'iiurlwidth': 960,
       'iiextmetadatafilter': 'LicenseShortName|Artist|DateTimeOriginal|ImageDescription'}
def search(q, n=4):
    r = get({'action': 'query', 'generator': 'search', 'gsrsearch': q + ' filetype:bitmap', 'gsrnamespace': 6, 'gsrlimit': n, **IIP})
    return info(sorted(r.get('query', {}).get('pages', []), key=lambda p: p.get('index', 0)))
def titles(ts):
    out = []
    for i in range(0, len(ts), 40):
        r = get({'action': 'query', 'titles': '|'.join(ts[i:i+40]), **IIP})
        out += info(r['query']['pages'])
    return out
