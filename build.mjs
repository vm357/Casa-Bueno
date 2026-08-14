// Casa Bueno production build.
//
//   npm install esbuild
//   node build.mjs
//
// Reads the site as authored, writes a deployable copy to dist/:
//   - transpiles every app/*.jsx to plain JS (no browser Babel)
//   - drops the @babel/standalone script tag from each page
//   - minifies the JSX output and app/analytics.js
//   - copies HTML, CSS, assets, uploads, and the design system through untouched
//
// The authored files are never modified. Deploy dist/, keep editing the root.

import { build } from 'esbuild';
import { readdir, readFile, writeFile, mkdir, cp, rm } from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();
const DIST = path.join(ROOT, 'dist');

const PAGES = ['404.html', 'About.html', 'Buy-Sell.html', 'index.html', 'Listings.html',
  'Privacy.html', 'Relocation.html', 'Reviews.html', 'Terms.html', 'Terms-Conditions.html', 'Accessibility.html'];

// Cloudflare reads _headers and _redirects from the root of the deployed
// directory, so they have to land inside dist/. The API handlers are bundled
// into the Worker from src/ and are deliberately NOT copied here.
// idx-wrapper.html is deliberately plain HTML (no JSX), so it passes through
// untouched rather than going through the page rewrite above.
const PASSTHROUGH = ['idx-wrapper.html', 'assets', '_ds', 'robots.txt', 'sitemap.xml', 'manifest.webmanifest',
  '_headers', '_redirects'];

await rm(DIST, { recursive: true, force: true });
await mkdir(path.join(DIST, 'app'), { recursive: true });

// 1. transpile every .jsx in app/
const jsx = (await readdir(path.join(ROOT, 'app'))).filter((f) => f.endsWith('.jsx'));
for (const file of jsx) {
  await build({
    entryPoints: [path.join(ROOT, 'app', file)],
    outfile: path.join(DIST, 'app', file.replace(/\.jsx$/, '.js')),
    loader: { '.jsx': 'jsx' },
    jsx: 'transform',
    bundle: false,
    // Each page loads shared.jsx plus its own file. Babel gives every
    // type="text/babel" script its own scope, so both can declare
    // `const { Button } = ...`; plain scripts share one global scope and would
    // collide. 'iife' restores the per-file scope. Anything shared between
    // files is passed through `window` explicitly.
    format: 'iife',
    minify: true,
    target: ['es2019'],
    legalComments: 'none',
  });
}
console.log(`transpiled ${jsx.length} jsx files`);

// 2. minify the plain-JS helpers
for (const file of ['analytics.js']) {
  await build({
    entryPoints: [path.join(ROOT, 'app', file)],
    outfile: path.join(DIST, 'app', file),
    minify: true,
    target: ['es2019'],
    legalComments: 'none',
  });
}

// 3. copy the stylesheet as-is
await cp(path.join(ROOT, 'app', 'site.css'), path.join(DIST, 'app', 'site.css'));

// 4. rewrite each page: no Babel, .jsx -> .js, type="text/babel" -> plain script
for (const page of PAGES) {
  let html = await readFile(path.join(ROOT, page), 'utf8');
  html = html
    .replace(/\s*<script src="https:\/\/unpkg\.com\/@babel\/standalone[^>]*><\/script>/g, '')
    .replace(/type="text\/babel"\s+/g, '')
    .replace(/src="app\/([\w-]+)\.jsx"/g, 'src="app/$1.js"');
  await writeFile(path.join(DIST, page), html);
}
console.log(`rewrote ${PAGES.length} pages`);

// 5. pass everything else through
for (const item of PASSTHROUGH) {
  await cp(path.join(ROOT, item), path.join(DIST, item), { recursive: true }).catch(() => {});
}

console.log('\ndist/ is ready to deploy.');
