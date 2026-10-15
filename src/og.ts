/**
 * Link-preview images (Open Graph), rendered to JPEG at build time.
 *
 * JPEG because LinkedIn - where these get shared - handles it reliably and
 * WebP inconsistently. 1200 x 630 is the size LinkedIn, Facebook and X all
 * crop to without cutting anything off.
 */
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';

export const OG_WIDTH = 1200;
export const OG_HEIGHT = 630;

// From the project root, not relative to this module: at build time the code
// runs from a bundled copy under dist/.prerender/, where `../public` doesn't exist.
const publicFile = (path: string) => readFile(join(process.cwd(), 'public', path));

/**
 * A project's own map, whole, on the site's paper colour. Fitted rather than
 * cropped: the finished maps are A4 sheets (about 1.41:1) and a crop to the
 * preview's 1.91:1 cuts off the title, north arrow and credits.
 */
export async function projectCard(imagePath: string) {
  return sharp(await publicFile(imagePath))
    .resize(OG_WIDTH, OG_HEIGHT, { fit: 'contain', background: '#f7f5f1' })
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer();
}

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/**
 * The site's own card, for pages without a map: portrait, name, role and
 * address on the site's paper colour, with the accent as a single rule.
 */
export async function defaultCard(name: string, role: string, url: string) {
  const size = 360;
  const portrait = await sharp(await publicFile('/images/portrait.webp'))
    .resize(size, size)
    .composite([
      {
        input: Buffer.from(
          `<svg width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}"/></svg>`,
        ),
        blend: 'dest-in',
      },
    ])
    .png()
    .toBuffer();

  const [roleA, roleB] = role.split(' | ');
  const text = `
    <svg width="${OG_WIDTH}" height="${OG_HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f7f5f1"/>
      <rect x="0" y="0" width="${OG_WIDTH}" height="10" fill="#1c5d5d"/>
      <text x="500" y="270" font-family="Georgia, 'Times New Roman', serif" font-size="58" font-weight="600" fill="#23282d">${esc(name)}</text>
      <text x="500" y="330" font-family="Segoe UI, Arial, sans-serif" font-size="30" fill="#1c5d5d">${esc(roleA)}</text>
      ${roleB ? `<text x="500" y="372" font-family="Segoe UI, Arial, sans-serif" font-size="26" fill="#5f6b76">${esc(roleB)}</text>` : ''}
      <text x="500" y="440" font-family="Segoe UI, Arial, sans-serif" font-size="24" fill="#5f6b76">${esc(url)}</text>
    </svg>`;

  return sharp(Buffer.from(text))
    .composite([{ input: portrait, left: 90, top: (OG_HEIGHT - size) / 2 }])
    .jpeg({ quality: 85, mozjpeg: true })
    .toBuffer();
}
