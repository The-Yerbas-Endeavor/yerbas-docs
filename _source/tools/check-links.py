#!/usr/bin/env python3
"""Check built local links, fragments, and resource paths without a server."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit,unquote,urljoin
import json,sys
root=Path(sys.argv[1] if len(sys.argv)>1 else 'build').resolve()
class Page(HTMLParser):
 def __init__(self,text):
  super().__init__();self.links=[];self.ids=set();self.feed(text)
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if 'id' in a:self.ids.add(a['id'])
  for key in ['href','src']:
   if a.get(key):self.links.append(a[key])
pages={p:Page(p.read_text()) for p in root.rglob('*.html')}
errors=[];external=set();checked=0
for p,page in pages.items():
 url='/'+p.relative_to(root).as_posix()
 if url.endswith('index.html'):url=url[:-10]
 for link in page.links:
  u=urlsplit(urljoin('https://docs.yerbas.org'+url,link))
  if u.scheme not in ['http','https']:continue
  if u.netloc!='docs.yerbas.org':external.add(u.geturl());continue
  q=root/unquote(u.path).lstrip('/')
  if q.is_dir():q=q/'index.html'
  if not q.exists() and not q.suffix:q=q/'index.html'
  checked+=1
  if u.path=='/404' and (root/'404.html').exists():continue
  if not q.exists():errors.append([url,link,'missing file'])
  elif u.fragment and q in pages and unquote(u.fragment) not in pages[q].ids:errors.append([url,link,'missing fragment'])
print(json.dumps({'pages':len(pages),'local_links_checked':checked,'errors':errors,'external_urls':sorted(external)},indent=2))
sys.exit(bool(errors))
