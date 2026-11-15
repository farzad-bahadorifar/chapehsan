import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import vm from 'node:vm';
const here=path.dirname(fileURLToPath(import.meta.url));
const source=await readFile(path.join(here,'prototype-v02.fragment.html'),'utf8');
const iconRuntime=await readFile(path.join(here,'vendor','lucide.min.js'),'utf8');
for(const script of source.matchAll(/<script>([\s\S]*?)<\/script>/g))new vm.Script(script[1]);
const pages={home:'index.html',banner:'index-02-banner.html',upload:'index-03-upload.html',checkout:'index-04-checkout.html',result:'index-05-result.html',tracking:'index-06-tracking.html',poster:'index-07-poster.html',plot:'index-08-plot.html',sticker:'index-09-sticker.html',exhibition:'index-10-exhibition.html',flag:'index-11-flag.html',admin:'index-12-admin.html',guide:'index-13-guide.html',contact:'index-14-contact.html',map:'index-map.html'};
await mkdir(path.join(here,'dist'),{recursive:true});
for(const [page,file] of Object.entries(pages)){
 let html=source.replace('data-start="home"','data-start="'+page+'"').replace('data-standalone="false"','data-standalone="true"');
 html=html.replace(/(<section class="ep-page" data-page="([^"]+)")( hidden)?/g,(_,prefix,name)=>prefix+(name===page?'':' hidden'));
 await writeFile(path.join(here,'dist',file),'<!doctype html>\n<html lang="fa" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><meta name="color-scheme" content="light"><title>پیش‌نمایش چاپ احسان</title><style>body{margin:0;background:#fff;color-scheme:light}</style><script>'+iconRuntime+'</script></head><body>'+html+'</body></html>');
}
const targets=[...source.matchAll(/href="(index[^"#]*\.html)"/g)].map(x=>x[1]);
if(targets.some(x=>!Object.values(pages).includes(x)))throw new Error('Unresolved page link');
console.log('Built '+Object.keys(pages).length+' standalone pages; script syntax and internal links checked.');
await writeFile(path.join(here,'dist','LUCIDE-LICENSE.txt'),await readFile(path.join(here,'vendor','LUCIDE-LICENSE.txt'),'utf8'));
