import json, urllib.request, urllib.parse, sys
B = 'https://collectionapi.metmuseum.org/public/collection/v1'
def j(u): return json.load(urllib.request.urlopen(urllib.request.Request(u, headers={'User-Agent': 'job-scout-bible-reader/1.0'}), timeout=60))
def search(q, n=6, **kw):
    r = j(B + '.1/search?' + urllib.parse.urlencode({'q': q, 'hasImages': 'true', **kw}))
    return (r.get('objectIDs') or [])[:n]
def obj(i): return j(f'{B}/objects/{i}')
if __name__ == '__main__':
    for q in sys.argv[1:]:
        print('##', q)
        for i in search(q):
            try: o = obj(i)
            except Exception: continue
            if o.get('isPublicDomain') and o.get('primaryImageSmall'):
                print(f"  {i} | {o['title'][:60]} | {o['artistDisplayName'][:28]} | {o['objectDate']} | {o['classification'] or o['objectName']}")
