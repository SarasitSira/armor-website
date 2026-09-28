// Writes a static HTML file for every page in every language so crawlers and link previews get
// real content and per-page metadata. Runs after the client and SSR builds (see "build" in package.json).
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = resolve(root, 'dist');
const ssrDir = resolve(root, 'dist-ssr');

const { render, getPageMeta, PAGE_PATHS, LOCALES, localizePath, SITE_URL, SITE_NAME, OG_IMAGE } = await import(
  pathToFileURL(resolve(ssrDir, 'entry-server.js')).href
);

const template = readFileSync(resolve(dist, 'index.html'), 'utf8');

const escape = (value) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function headTags(meta) {
  const tags = [
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta property="og:locale" content="${meta.ogLocale}" />`,
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
  for (const alt of meta.alternates) tags.push(`<link rel="alternate" hreflang="${alt.hrefLang}" href="${alt.href}" />`);
  if (meta.noindex) tags.push(`<meta name="robots" content="noindex" />`);
  return tags.map((tag) => `    ${tag}`).join('\n');
}

function buildPage(url, { notFound = false } = {}) {
  const meta = getPageMeta(url);
  const rootAttrs = notFound ? ' data-not-found=""' : '';
  const html = template
    .replace(/<html lang="[^"]*">/, `<html lang="${meta.locale}">`)
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escape(meta.title)}</title>`)
    .replace(/<meta name="description"[^>]*\/>/, `<meta name="description" content="${escape(meta.description)}" />`)
    .replace('</head>', `${headTags(meta)}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root"${rootAttrs}>${render(url)}</div>`);

  if (!html.includes(`<html lang="${meta.locale}">`)) throw new Error(`Could not set the page language for ${url}`);
  return html;
}

function write(file, html) {
  const target = resolve(dist, file);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, html);
  console.log(`  prerendered ${file}`);
}

// Vercel's cleanUrls serves /th/industries from th/industries.html, /th from th.html
const urls = LOCALES.flatMap((locale) => PAGE_PATHS.map((path) => localizePath(path, locale)));
for (const url of urls) {
  write(url === '/' ? 'index.html' : `${url.slice(1)}.html`, buildPage(url));
}
// Shared 404 page. The browser re-renders it in the visitor's language (see main.jsx).
write('404.html', buildPage('/404', { notFound: true }));

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls
  .map((url) => {
    const meta = getPageMeta(url);
    const alternates = meta.alternates
      .map((alt) => `    <xhtml:link rel="alternate" hreflang="${alt.hrefLang}" href="${alt.href}" />`)
      .join('\n');
    return `  <url>\n    <loc>${url === '/' ? `${SITE_URL}/` : meta.url}</loc>\n    <lastmod>${today}</lastmod>\n${alternates}\n  </url>`;
  })
  .join('\n')}
</urlset>
`;
writeFileSync(resolve(dist, 'sitemap.xml'), sitemap);
console.log(`  wrote sitemap.xml (${urls.length} URLs)`);

rmSync(ssrDir, { recursive: true, force: true });
