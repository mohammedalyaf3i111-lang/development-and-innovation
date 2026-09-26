import {test,expect} from '@playwright/test';
for(const [name,width,height] of [['desktop',1440,1000],['tablet',768,1024],['mobile',390,844]] as const){
 test(`${name}: layout, navigation, catalogue and console`,async({page})=>{
 const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
 await page.setViewportSize({width,height});await page.goto('/');
 await expect(page.getByRole('heading',{level:1})).toContainText('Real Industrial Challenges');
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth)).toBeTruthy();
 if(width<=850){await page.getByRole('button',{name:'Open navigation'}).click();}
 await page.getByRole('navigation').getByRole('link',{name:'Jewelry Solutions',exact:true}).click();
 await expect(page).toHaveURL(/#jewelry$/);
 if(width<=850)await expect(page.getByRole('button',{name:'Open navigation'})).toBeVisible();
 await page.getByRole('button',{name:'Surface preparation'}).click();await expect(page.getByRole('heading',{name:'Gold Color Restoration Solution',exact:true})).toBeVisible();
 await page.getByRole('button',{name:'Precious metal finishing'}).click();await expect(page.getByRole('heading',{name:'Stainless Steel Burnishing Solution',exact:true})).toBeVisible();
 await page.getByRole('button',{name:'Rhodium systems'}).click();
 await page.getByRole('article').filter({has:page.getByRole('heading',{name:'White Rhodium Concentrate',exact:true})}).getByRole('link').click();
 await expect(page.getByLabel('Message *')).toHaveValue(/White Rhodium Concentrate/);
 await page.goto('/');await page.waitForLoadState('networkidle');await page.screenshot({path:`test-results/${name}.png`,fullPage:false});expect(errors).toEqual([]);
 });
}
test('inquiry validates and truthfully reports unconfigured delivery',async({page,request})=>{
 await page.goto('/#contact');await page.getByRole('button',{name:'Submit Inquiry'}).click();await expect(page.getByRole('status')).toBeEmpty();
 await page.getByLabel('Full Name *').fill('Test Inquiry');await page.getByLabel('Country *').fill('Saudi Arabia');await page.getByLabel('Email *').fill('test@example.com');await page.getByLabel('Industry *').selectOption('Gold Workshops');await page.getByLabel('Project Type *').selectOption('Rhodium Solution');await page.getByLabel('Message *').fill('Local QA only: evaluation of an inquiry form.');
 await page.getByRole('button',{name:'Submit Inquiry'}).click();await expect(page.getByRole('status')).toContainText('has not been sent');
 const downloadPromise=page.waitForEvent('download');await page.getByRole('button',{name:'Download inquiry copy'}).click();expect((await downloadPromise).suggestedFilename()).toBe('aiso-project-inquiry.txt');
 const invalid=await request.post('/api/inquiries',{headers:{Origin:'http://localhost:3100'},data:{}});expect(invalid.status()).toBe(400);
 const cross=await request.post('/api/inquiries',{headers:{Origin:'https://example.com'},data:{}});expect(cross.status()).toBe(403);
});
test('policy routes and internal anchor destinations',async({page})=>{await page.goto('/');const missing=await page.locator('a[href^="#"]').evaluateAll(links=>links.map(a=>a.getAttribute('href')!).filter(h=>!document.getElementById(h.slice(1))));expect(missing).toEqual([]);for(const path of ['/privacy','/terms']){const r=await page.goto(path);expect(r?.status()).toBe(200);await expect(page.getByRole('heading',{level:1})).toBeVisible();}});

