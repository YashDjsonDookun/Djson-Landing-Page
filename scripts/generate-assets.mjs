import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

const NAVY = '#2B3A4E';
const OFFWHITE = '#FAF9F6';

const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="96" fill="${NAVY}"/>
  <g fill="${OFFWHITE}">
    <polygon points="80,112 144,112 192,208 240,112 304,112 224,240 224,400 160,400 160,240"/>
    <path d="M320,112 H384 C448,112 464,160 464,256 C464,352 448,400 384,400 H320 Z M376,168 V344 C416,344 424,304 424,256 C424,208 416,168 376,168 Z" fill-rule="evenodd"/>
  </g>
</svg>`;

const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" fill="none">
  <rect width="1200" height="630" fill="${NAVY}"/>
  <rect x="40" y="40" width="1120" height="550" rx="16" fill="none" stroke="${OFFWHITE}" stroke-width="1" opacity="0.15"/>

  <!-- YD monogram -->
  <path d="M80 200 L110 200 L135 260 L160 200 L190 200 L150 310 L120 310 Z" fill="${OFFWHITE}" opacity="0.12"/>
  <path d="M200 200 L250 200 Q280 200 280 230 L280 280 Q280 310 250 310 L200 310 Z M225 220 L225 290 L248 290 Q260 290 260 275 L260 235 Q260 220 248 220 Z" fill="${OFFWHITE}" opacity="0.12"/>

  <!-- Name -->
  <text x="80" y="280" font-family="system-ui, -apple-system, sans-serif" font-size="52" font-weight="700" fill="${OFFWHITE}">Yash Djson Dookun</text>

  <!-- Title -->
  <text x="80" y="330" font-family="system-ui, -apple-system, sans-serif" font-size="24" fill="${OFFWHITE}" opacity="0.7">Senior IT Consultant · Mauritius</text>

  <!-- Tagline -->
  <text x="80" y="410" font-family="system-ui, -apple-system, sans-serif" font-size="28" fill="${OFFWHITE}" opacity="0.9">Business Systems · APIs · AI Tools</text>
  <text x="80" y="450" font-family="system-ui, -apple-system, sans-serif" font-size="22" fill="${OFFWHITE}" opacity="0.5">Custom software for SMEs — from scoping to delivery</text>

  <!-- URL -->
  <text x="80" y="540" font-family="monospace" font-size="18" fill="${OFFWHITE}" opacity="0.4">yashdookun.com</text>

  <!-- Accent line -->
  <rect x="80" y="360" width="120" height="3" rx="1.5" fill="#6B8CAE"/>
</svg>`;

async function generate() {
  // PWA icon 512x512
  await sharp(Buffer.from(iconSvg))
    .resize(512, 512)
    .png()
    .toFile(join(publicDir, 'icon-512.png'));
  console.log('  ✓ icon-512.png');

  // PWA icon 192x192
  await sharp(Buffer.from(iconSvg))
    .resize(192, 192)
    .png()
    .toFile(join(publicDir, 'icon-192.png'));
  console.log('  ✓ icon-192.png');

  // Apple touch icon 180x180
  await sharp(Buffer.from(iconSvg))
    .resize(180, 180)
    .png()
    .toFile(join(publicDir, 'apple-touch-icon.png'));
  console.log('  ✓ apple-touch-icon.png');

  // OG image 1200x630
  await sharp(Buffer.from(ogSvg))
    .resize(1200, 630)
    .png()
    .toFile(join(publicDir, 'og-image.png'));
  console.log('  ✓ og-image.png');

  console.log('\nAll assets generated in public/');
}

generate().catch(console.error);
