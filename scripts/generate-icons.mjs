import sharp from 'sharp';
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const src = resolve(process.cwd(), 'app/icon.svg');
const out192 = resolve(process.cwd(), 'public/icons/icon-192.png');
const out256 = resolve(process.cwd(), 'public/icons/icon-256.png');
const out384 = resolve(process.cwd(), 'public/icons/icon-384.png');
const out512 = resolve(process.cwd(), 'public/icons/icon-512.png');

async function ensureDir(p) { await mkdir(dirname(p), { recursive: true }); }

async function main() {
  const svg = await readFile(src);
  await ensureDir(out192);
  await ensureDir(out256);
  await ensureDir(out384);
  await ensureDir(out512);
  const img192 = await sharp(svg).resize(192, 192).png().toBuffer();
  const img256 = await sharp(svg).resize(256, 256).png().toBuffer();
  const img384 = await sharp(svg).resize(384, 384).png().toBuffer();
  const img512 = await sharp(svg).resize(512, 512).png().toBuffer();
  await writeFile(out192, img192);
  await writeFile(out256, img256);
  await writeFile(out384, img384);
  await writeFile(out512, img512);
  console.log('Generated icons:', out192, out256, out384, out512);
}

main().catch((e) => { console.error(e); process.exit(1); });
