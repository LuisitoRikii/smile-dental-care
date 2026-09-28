// Download assets for smiledentalcare.info-b93df72c / root-8a5edab2
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const BASE = 'https://img1.wsimg.com/isteam/ip/7e702cfd-6b59-4722-a5ab-02aa26243195/';
const OUT = join(process.cwd(), 'public', 'sites', 'smiledentalcare.info-b93df72c', 'root-8a5edab2', 'images');

const assets = [
  { name: 'logo.png', url: BASE + 'SMILE%20DENTALok.png/:/rs=w:418,h:150,cg:true,m/qt=q:95' },
  { name: 'favicon.png', url: BASE + 'SMILE%20DENTALok.png/:/rs=w:180,h:180,m' },
  { name: 'hero.jpg', url: BASE + 'photo_2026-01-15_10-36-18%20(17).jpg/:/rs=h:1000,cg:true,m' },
  { name: 'og.jpg', url: BASE + 'photo_2026-01-15_10-36-18%20(17).jpg' },
  { name: 'about-1.jpg', url: BASE + 'photo_2026-01-15_10-36-18%20(10).jpg/:/cr=t:12.49%25,l:0%25,w:100%25,h:75.03%25/rs=w:600,h:300,cg:true' },
  { name: 'about-2.jfif', url: BASE + '443563a7-9e44-4a63-b495-14552c76f7c0.jfif/:/cr=t:25%25,l:0%25,w:100%25,h:50%25/rs=w:600,h:300,cg:true' },
  { name: 'about-3.jpg', url: BASE + 'photo_2026-01-15_10-36-18%20(18).jpg/:/cr=t:12.49%25,l:0%25,w:100%25,h:75.03%25/rs=w:600,h:300,cg:true' },
  { name: 'subscribe-bg.jpg', url: BASE + '469734307_18476456215058891_142870297664653754.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1535,m' },
  { name: 'trustedsite.svg', url: 'https://cdn.ywxi.net/meter/smiledentalcare.info/205.svg?ts=1769609249382&l=es' },
];

async function dl({ name, url }) {
  const dest = join(OUT, name);
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  if (!res.ok) throw new Error(`${name}: HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await mkdir(dirname(dest), { recursive: true });
  await writeFile(dest, buf);
  console.log(`OK ${name} (${buf.length} bytes)`);
}

for (const asset of assets) {
  try {
    await dl(asset);
  } catch (err) {
    console.error(`FAIL ${asset.name}: ${err.message}`);
    process.exitCode = 1;
  }
}
