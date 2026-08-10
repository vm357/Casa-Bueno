# Building and deploying Casa Bueno

The site as authored runs straight from the filesystem with no build step: the
browser downloads Babel and compiles the JSX on every page load. That is the
right tradeoff while designing and a poor one for visitors — it costs roughly
2 MB of JavaScript and a visible delay on a phone.

`build.mjs` produces a deployable copy with that work done ahead of time.
Output lands in `dist/`. Keep editing the files in the project root; the build
never modifies them.

## Cloudflare Pages

Cloudflare runs the build itself on every push. Connect the repository once:

1. Push this project to GitHub.
2. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** →
   **Connect to Git**, and pick the repository.
3. Build settings:

   | Field | Value |
   | --- | --- |
   | Framework preset | None |
   | Build command | `npm install && npm run build` |
   | Build output directory | `dist` |
   | Node version | 20 (set `NODE_VERSION` = `20` under environment variables) |

4. Save and deploy. Every push to `main` republishes; other branches get their
   own preview URL.

### Custom domain

**Custom domains** → **Set up a domain** → `sellwithbueno.com`. If the domain's
nameservers already point at Cloudflare the DNS record is created for you.
Otherwise Cloudflare shows the CNAME to add at your registrar. HTTPS is
automatic. There is no `CNAME` file involved — that was a GitHub Pages
mechanism and has been removed.

## The lead relay

`functions/api/lead.js` is a Cloudflare Pages Function. It receives the contact
form submission at `/api/lead` and forwards it to Follow Up Boss server-side, so
the API key never appears in the page source.

To turn it on: Pages project → **Settings** → **Environment variables** → add an
**encrypted** variable named `FUB_API_KEY` (Follow Up Boss → Admin → API →
generate a key). Add it to both Production and Preview. Redeploy.

Until that variable exists the endpoint still returns success and writes the
lead to the function log, so the form never shows an error to a visitor. Check
**Workers & Pages → the project → Logs** to see them.

Optional: `FUB_SYSTEM_KEY`, if Follow Up Boss issues you a registered system key
for cleaner source attribution.

`functions/api/review.js` does the same for submitted client reviews. Set
`REVIEW_WEBHOOK` to any URL that accepts JSON (Zapier, Make, a Slack incoming
webhook) to receive them; otherwise they are logged.

### Why /events and not /people

Follow Up Boss's own guidance: `POST /v1/events` triggers the account's
automations, routes the lead to the right agent, and de-duplicates against
existing contacts. `POST /v1/people` creates a bare record, runs nothing, and
produces duplicates.

## Running the build locally

```
npm install
npm run build
```

To preview the Functions too, install Wrangler and run
`npx wrangler pages dev dist`. A plain file server will serve the pages but
`/api/lead` will 404.

## What the build changes

| Authored | Built |
| --- | --- |
| `app/home.jsx` compiled in-browser | `app/home.js`, minified |
| `@babel/standalone` (~2.8 MB) | removed |
| `type="text/babel"` | plain `<script>` |
| React development build | React production build (already swapped in the source) |

Everything else — HTML, `app/site.css`, `assets/`, `uploads/`, the design
system in `_ds/`, `functions/`, `_headers` and `_redirects` — is copied through
unchanged.

## Still to settle

1. **Remove the tweaks panel.** `app/tweaks-panel.jsx` is a design tool. It
   loads on `index.html` and renders a floating control panel. Delete the file,
   its `<script>` tag, and the `<TweaksPanel>` block at the bottom of
   `app/home.jsx` once the hero layout is locked in.
2. **Set `FUB_API_KEY`** in the Cloudflare dashboard.
3. **Set `CB_GA4_ID`** at the top of `app/analytics.js`. The file is inert until
   then — no script loads and no cookies are set while it is blank.
4. **Add the Follow Up Boss Pixel** snippet to each page's `<head>` for return
   visit and property view tracking.
