# Building and deploying Casa Bueno

The site as authored runs straight from the filesystem with no build step: the
browser downloads Babel and compiles the JSX on every page load. That is the
right tradeoff while designing and a poor one for visitors — it costs roughly
2 MB of JavaScript and a visible delay on a phone.

`build.mjs` produces a deployable copy with that work done ahead of time.
Output lands in `dist/`. Keep editing the files in the project root; the build
never modifies them.

## Cloudflare Workers

The site deploys as a Cloudflare Worker with static assets. `wrangler.jsonc`
holds the configuration: `dist/` is served as static files, and `src/worker.js`
handles only the two API routes.

Build settings in the dashboard (Workers & Pages → the project → Settings →
Build):

| Field | Value |
| --- | --- |
| Build command | `npm install && npm run build` |
| Deploy command | `npx wrangler deploy` |
| Build output directory | *(leave blank — `wrangler.jsonc` sets it)* |

Every push to `main` republishes.

> **If the deploy fails with "Asset too large… node_modules/workerd".** That
> means `wrangler.jsonc` was missing or not committed, so Wrangler fell back to
> uploading the repository root. Confirm `wrangler.jsonc` is in the repo and
> that `.gitignore` excludes `node_modules` and `dist`.

### Custom domain

**Custom domains** → **Set up a domain** → `sellwithbueno.com`. If the domain's
nameservers already point at Cloudflare the DNS record is created for you.
Otherwise Cloudflare shows the CNAME to add at your registrar. HTTPS is
automatic. There is no `CNAME` file involved — that was a GitHub Pages
mechanism and has been removed.

## The lead relay

`src/lead.js` runs inside the Worker. It receives the contact form submission at
`/api/lead` and forwards it to Follow Up Boss server-side, so the API key never
appears in the page source.

To turn it on: the project → **Settings** → **Variables and Secrets** → add a
**Secret** named `FUB_API_KEY` (Follow Up Boss → Admin → API →
generate a key). Add it to both Production and Preview. Redeploy.

Until that variable exists the endpoint still returns success and writes the
lead to the function log, so the form never shows an error to a visitor. Check
**Workers & Pages → the project → Logs** to see them.

Optional: `FUB_SYSTEM_KEY`, if Follow Up Boss issues you a registered system key
for cleaner source attribution.

`src/review.js` does the same for submitted client reviews. Set
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

`npm run preview` builds and then runs `wrangler dev`, which serves the site
and the API routes together on a local port. Put local secrets in a `.dev.vars`
file (git-ignored) as `FUB_API_KEY=...`.

## What the build changes

| Authored | Built |
| --- | --- |
| `app/home.jsx` compiled in-browser | `app/home.js`, minified |
| `@babel/standalone` (~2.8 MB) | removed |
| `type="text/babel"` | plain `<script>` |
| React development build | React production build (already swapped in the source) |

Everything else — HTML, `app/site.css`, `assets/`, the design
system in `_ds/`, `_headers` and `_redirects` — is copied through unchanged.
The API handlers in `src/` are bundled into the Worker instead, so they are
never served as files.

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
