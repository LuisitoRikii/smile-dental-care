// Download gallery + inner-page hero assets for the Smile Dental Care redesign (Etapa 2).
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const BASE = 'https://img1.wsimg.com/isteam/ip/7e702cfd-6b59-4722-a5ab-02aa26243195/';
const OUT = join(process.cwd(), 'public', 'sites', 'smiledentalcare.info-b93df72c', 'root-8a5edab2', 'images');

const CROP = '/:/cr=t:0%25,l:5.68%25,w:88.63%25,h:100%25/rs=w:1160,h:872';

const assets = [
  {
    name: 'gallery-1.jpg',
    url: BASE + 'photo_2026-01-15_10-36-18%20(13).jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1160,h:773',
  },
  { name: 'gallery-2.jpg', url: BASE + 'photo_2026-01-15_10-36-18%20(18).jpg' + CROP },
  { name: 'gallery-3.jpg', url: BASE + 'photo_2026-01-15_10-36-18%20(8).jpg' + CROP },
  { name: 'gallery-4.jpg', url: BASE + 'photo_2026-01-15_10-36-18%20(7).jpg' + CROP },
  {
    name: 'gallery-5.jpg',
    url: BASE + 'photo_2026-01-15_10-36-18%20(20).jpg/:/rs=w:1160,h:773',
  },
  { name: 'gallery-6.jpg', url: BASE + 'photo_2026-01-15_10-36-18%20(5).jpg' + CROP },
  {
    name: 'service-hero.jpg',
    url: BASE + 'photo_2026-01-15_10-36-18%20(8).jpg/:/rs=w:1600,cg:true',
  },
  {
    name: 'contact-hero.jpg',
    url: BASE + 'photo_2026-01-15_10-36-18%20(20).jpg/:/rs=w:1600,cg:true',
  },
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
