// Download extra assets for the Smile Dental Care redesign (homepage).
// Only smiledentalcare.info assets — never assets from the other two clones.
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const BASE = 'https://img1.wsimg.com/isteam/ip/7e702cfd-6b59-4722-a5ab-02aa26243195/';
const OUT = join(process.cwd(), 'public', 'sites', 'smiledentalcare.info-b93df72c', 'root-8a5edab2', 'images');

const assets = [
  { name: 'hero-lg.jpg', url: BASE + 'photo_2026-01-15_10-36-18%20(17).jpg/:/rs=w:1920,cg:true' },
  {
    name: 'about-1-lg.jpg',
    url: BASE + 'photo_2026-01-15_10-36-18%20(10).jpg/:/cr=t:12.49%25,l:0%25,w:100%25,h:75.03%25/rs=w:1200,cg:true',
  },
  {
    name: 'about-2-lg.jfif',
    url: BASE + '443563a7-9e44-4a63-b495-14552c76f7c0.jfif/:/cr=t:25%25,l:0%25,w:100%25,h:50%25/rs=w:1200,cg:true',
  },
  {
    name: 'about-3-lg.jpg',
    url: BASE + 'photo_2026-01-15_10-36-18%20(18).jpg/:/cr=t:12.49%25,l:0%25,w:100%25,h:75.03%25/rs=w:1200,cg:true',
  },
  {
    name: 'doctora.jpg',
    url: BASE + 'PixVerse_Image_Effect_prompt__quita%20del%20fondo%20.jpg/:/cr=t:0%25,l:1.61%25,w:96.78%25,h:96.78%25/rs=w:900,cg:true',
  },
  {
    name: 'consultorio.jpg',
    url: BASE + 'photo_2026-01-15_10-36-18%20(15).jpg/:/cr=t:0%25,l:16.68%25,w:66.64%25,h:100%25/rs=w:900,cg:true',
  },
  {
    name: 'office-2.jpg',
    url: BASE + 'photo_2026-01-15_10-36-18%20(7).jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:900,cg:true',
  },
  {
    name: 'service-1.jfif',
    url: BASE + '8e5f8e53-9be8-485a-a053-d377318210a3.jfif/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:900,cg:true',
  },
  {
    name: 'new-patients.jfif',
    url: BASE + '7eeecc04-d9c5-49c3-9f09-61b1d49e126e.jfif/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:900,cg:true',
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
