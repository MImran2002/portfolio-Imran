from playwright.sync_api import sync_playwright
from pathlib import Path
from PIL import Image
from io import BytesIO
import base64, re, json
root=Path(__file__).parent
HTML=(root/'index.html').read_text()
CSS=(root/'styles.css').read_text()
JS=(root/'app.js').read_text()
errors=[]

# Use data URL thumbnails for the internal preview environment where navigation and file URLs are blocked.
# The distributed files retain ordinary relative asset links for static hosting.
assets={}
for path in (root/'assets').iterdir():
 if path.suffix.lower() not in ('.png','.jpg','.jpeg','.gif'):
  continue
 try:
  with Image.open(path) as im:
   im.thumbnail((750,600))
   out=BytesIO()
   if 'A' in im.getbands():
    im.save(out,format='PNG',optimize=True)
    mime='image/png'
   else:
    im.convert('RGB').save(out,format='JPEG',quality=65)
    mime='image/jpeg'
   assets['assets/'+path.name]='data:'+mime+';base64,'+base64.b64encode(out.getvalue()).decode()
 except Exception:pass
for path,uri in assets.items():
 HTML=HTML.replace('src="'+path+'"','src="'+uri+'"')
 JS=JS.replace("image:'"+path+"'","image:'"+uri+"'")

with sync_playwright() as p:
 browser=p.chromium.launch(headless=True,executable_path='/usr/bin/chromium',args=['--no-sandbox','--disable-dev-shm-usage'])
 for width,height in [(1440,900),(1280,800),(1024,768),(768,1024),(390,844),(320,700)]:
  page=browser.new_page(viewport={'width':width,'height':height},device_scale_factor=1)
  page.on('pageerror',lambda e:errors.append(str(e)))
  page.set_content(HTML,wait_until='domcontentloaded',timeout=60000)
  page.add_style_tag(content=CSS)
  page.add_script_tag(content=JS)
  page.wait_for_timeout(300)
  obj=page.evaluate('''() => ({sx:document.querySelector('.exhibition').scrollLeft,sw:document.querySelector('.exhibition').scrollWidth,cw:document.querySelector('.exhibition').clientWidth,docScrollWidth:document.documentElement.scrollWidth,innerWidth:innerWidth,display:getComputedStyle(document.querySelector('.exhibition')).display})''')
  print('VIEW',width,height,'initial',obj)
  if width>=1024:
   assert obj['sw']>obj['cw']+1500, 'missing horizontal panels'
   page.mouse.move(width//2,200)
   page.mouse.wheel(0,550)
   page.wait_for_timeout(200)
   pos=page.evaluate('document.querySelector(".exhibition").scrollLeft')
   print(' WHEEL vertical -> horizontal',pos)
   assert pos>400,'wheel did not scroll sideways'
   page.mouse.move(width//2,40) # hover header and wheel
   page.mouse.wheel(0,300)
   page.wait_for_timeout(180)
   pos2=page.evaluate('document.querySelector(".exhibition").scrollLeft')
   print(' WHEEL on header',pos2)
   assert pos2>pos+150,'header wheel did not scroll'
   page.evaluate('document.querySelector(".exhibition").scrollLeft=0')
   page.wait_for_timeout(100)
  else:
   assert obj['docScrollWidth']<=width+1, f'mobile horizontal overflow {obj}'
   page.mouse.wheel(0,400)
   page.wait_for_timeout(100)
   assert page.evaluate('window.scrollY')>100,'vertical mobile scroll missing'
  # Open a project by dispatch to a known button even if off screen
  page.locator('[data-detail="mindroute"]').first.evaluate('(el)=>el.click()')
  assert page.locator('#detail-dialog').evaluate('(d)=>d.open'), 'project modal not open'
  title=page.locator('#detail-title').inner_text()
  assert title=='MindRoute',title
  page.locator('#detail-close').click()
  assert not page.locator('#detail-dialog').evaluate('(d)=>d.open'), 'modal did not close'
  # immersive open directly in demo tab
  page.locator('[data-detail="nand"][data-demo-first]').evaluate('(el)=>el.click()')
  assert page.locator('.demo-iframe').count()==1,'interactive iframe missing'
  assert page.locator('.demo-iframe').get_attribute('src')=='demos/nand.html','incorrect source'
  page.keyboard.press('Escape')
  assert not page.locator('#detail-dialog').evaluate('(d)=>d.open'),'Escape failed'
  if width==1440:
   page.screenshot(path=str(root/'previews/desktop-initial.png'),full_page=False)
   page.locator('[data-to="projects"]').first.click()
   page.wait_for_timeout(700)
   page.screenshot(path=str(root/'previews/desktop-projects.png'),full_page=False)
   page.locator('[data-detail="trove"][data-demo-first]').evaluate('(el)=>el.click()')
   page.screenshot(path=str(root/'previews/desktop-modal-shell.png'),full_page=False)
  if width==390:
   page.evaluate('document.documentElement.style.scrollBehavior="auto";window.scrollTo(0,0)')
   page.wait_for_timeout(450)
   page.screenshot(path=str(root/'previews/mobile-initial.png'),full_page=False)
  page.close()

 # Test original self-contained demos directly, bypassing blocked local navigation.
 for demo in ['nand','bacnet']:
  page=browser.new_page(viewport={'width':1200,'height':820})
  page.on('pageerror',lambda e:errors.append(str(e)))
  page.set_content((root/f'demos/{demo}.html').read_text(),wait_until='domcontentloaded',timeout=30000)
  print('DEMO',demo,'title',page.title(),'buttons',page.locator('button').count())
  assert page.locator('button').count()>2
  page.close()
 browser.close()
print('PAGE_ERRORS',errors)
assert not errors, f'JavaScript errors: {errors}'
print('ALL QA ASSERTIONS PASSED')
