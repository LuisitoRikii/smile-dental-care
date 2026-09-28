// Download assets for advancedsmileclinic.com-a6cefc1f / root-8a5edab2
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const WP = 'https://advancedsmileclinic.com/wp-content/uploads/';
const CDN = 'https://i0.wp.com/advancedsmileclinic.com/wp-content/uploads/';
const OUT = join(process.cwd(), 'public', 'sites', 'advancedsmileclinic.com-a6cefc1f', 'root-8a5edab2');

const assets = [
  // brand
  { name: 'images/logo.webp', url: CDN + '2025/08/Logo-Advance-Smile-Dental-Clinic-01-2.webp?w=667&ssl=1' },
  { name: 'images/logo-mobile.webp', url: CDN + '2025/08/Logo-Advance-Smile-Dental-Clinic.webp?fit=300%2C208&ssl=1' },
  { name: 'images/logo-white.webp', url: CDN + '2025/08/logo-blanco.webp?w=655&ssl=1' },
  { name: 'images/favicon-32.png', url: CDN + '2025/09/cropped-Group-19.png?fit=32%2C32&ssl=1' },
  { name: 'images/favicon-192.png', url: CDN + '2025/09/cropped-Group-19.png?fit=192%2C192&ssl=1' },
  // hero
  { name: 'videos/hero.mp4', url: WP + '2025/08/video-baner-1.mp4' },
  { name: 'images/hero-poster.webp', url: WP + '2025/08/video-baner-1-frame-at-0m0s.webp' },
  // about
  { name: 'images/about-portrait.webp', url: WP + '2025/09/83609327018-1-1.webp' },
  // services
  { name: 'images/service-emergency.webp', url: WP + '2025/08/Group-16.webp' },
  { name: 'images/service-general.webp', url: WP + '2025/08/Group-17.webp' },
  { name: 'images/service-smile-design.webp', url: WP + '2025/08/Group-13-1.webp' },
  { name: 'images/service-dentures.webp', url: WP + '2025/08/Group-14.webp' },
  // promotions
  { name: 'images/promotions-photo.webp', url: WP + '2026/06/DSC8482-2.webp' },
  // video quote backdrop
  { name: 'images/videoquote-bg.webp', url: WP + '2025/08/shutterstock_1674146218-2.webp' },
  // why choose us
  { name: 'images/why-center.webp', url: WP + '2025/08/Group-13.webp' },
  { name: 'images/why-mobile.webp', url: CDN + '2025/08/shutterstock_346764275-11-1.webp?w=399&ssl=1' },
  // dont wait
  { name: 'images/dontwait-1.webp', url: CDN + '2025/08/iamge11.webp?fit=238%2C246&ssl=1' },
  { name: 'images/dontwait-2.webp', url: CDN + '2026/06/ChatGPT-Image-Jun-9-2026-10_05_42-AM.webp?w=1024&ssl=1' },
  { name: 'images/dontwait-3.webp', url: CDN + '2025/08/iamgedr33.webp?fit=238%2C246&ssl=1' },
  // zocdoc badge (third-party, kept as image)
  { name: 'images/zocdoc-badge.png', url: 'https://offsiteschedule.zocdoc.com/images/remote/zd_bookonline_162x48.png?type=bobjs&monolith_provider_id=143553&practice_id=pt_Qui-Lcd5IESC12aFLuArSw' },
  // insurance logos
  { name: 'images/ins-blue-cross.webp', url: CDN + '2025/08/Blue-Cross-Blue.webp?w=1024&ssl=1' },
  { name: 'images/ins-careington.webp', url: CDN + '2025/08/careington.webp?w=509&ssl=1' },
  { name: 'images/ins-cigna.webp', url: CDN + '2025/08/Cigna-logo-.webp?w=1024&ssl=1' },
  { name: 'images/ins-delta-dental.webp', url: CDN + '2025/08/dental.webp?w=1024&ssl=1' },
  { name: 'images/ins-florida-combined.webp', url: CDN + '2025/08/florida.webp?fit=300%2C100&ssl=1' },
  { name: 'images/ins-sunlife.webp', url: CDN + '2025/08/Sun_Life_Logo.webp?w=620&ssl=1' },
  { name: 'images/ins-humana.webp', url: CDN + '2025/08/Humana_logo-1.webp?fit=249%2C54&ssl=1' },
  { name: 'images/ins-guardian.webp', url: CDN + '2025/08/guardian-logo-1.webp?fit=269%2C70&ssl=1' },
  { name: 'images/ins-metlife.webp', url: CDN + '2025/08/g74.webp?fit=200%2C44&ssl=1' },
  { name: 'images/ins-aetna.webp', url: CDN + '2025/08/aetna-logo.webp?fit=300%2C150&ssl=1' },
  { name: 'images/ins-ameritas.webp', url: CDN + '2025/08/ameritas-logo.webp?w=900&ssl=1' },
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
