// Writes a static HTML file for every page so crawlers and link previews get real content
// and per-page metadata. Runs after the client and SSR builds (see "build" in package.json).
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = resolve(root, 'dist');
const ssrDir = resolve(root, 'dist-ssr');

const { render, PAGES, NOT_FOUND, SITE_URL, SITE_NAME, OG_IMAGE } = await import(
  pathToFileURL(resolve(ssrDir, 'entry-server.js')).href
);

const template = readFileSync(resolve(dist, 'index.html'), 'utf8');

const escape = (value) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function headTags(meta) {
  const tags = [
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta property="og:title" content="${escape(meta.title)}" />`,
    `<meta property="og:description" content="${escape(meta.description)}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escape(meta.title)}" />`,
    `<meta name="twitter:description" content="${escape(meta.description)}" />`,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`,
  ];
  if (meta.url) {
    tags.push(`<link rel="canonical" href="${meta.url}" />`);
    tags.push(`<meta property="og:url" content="${meta.url}" />`);
  }
  if (meta.noindex) tags.push(`<meta name="robots" content="noindex" />`);
  return tags.map((tag) => `    ${tag}`).join('\n');
}

function buildPage(url, meta) {
  const html = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escape(meta.title)}</title>`)
    .replace(/<meta name="description"[^>]*\/>/, `<meta name="description" content="${escape(meta.description)}" />`)
    .replace('</head>', `${headTags(meta)}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${render(url)}</div>`);

  if (html.includes('<div id="root"></div>')) throw new Error(`Pre-render produced no markup for ${url}`);
  return html;
}

function write(file, html) {
  const target = resolve(dist, file);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, html);
  console.log(`  prerendered ${file}`);
}

// Vercel's cleanUrls serves /industries from industries.html, /solutions/bexo from solutions/bexo.html
for (const [path, page] of Object.entries(PAGES)) {
  const file = path === '/' ? 'index.html' : `${path.slice(1)}.html`;
  write(file, buildPage(path, { ...page, url: `${SITE_URL}${path === '/' ? '' : path}` }));
}
write('404.html', buildPage('/404', { ...NOT_FOUND, url: null }));

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Object.keys(PAGES)
  .map((path) => `  <url><loc>${SITE_URL}${path === '/' ? '/' : path}</loc><lastmod>${today}</lastmod></url>`)
  .join('\n')}
</urlset>
`;
writeFileSync(resolve(dist, 'sitemap.xml'), sitemap);
console.log('  wrote sitemap.xml');

rmSync(ssrDir, { recursive: true, force: true });
