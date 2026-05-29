# Yash Dookun — Personal Landing Page

Professional landing page for a solo IT consultant in Mauritius. Static site with English, French, and Mauritian Creole.

**Live site:** [yashdookun.com](https://yashdookun.com)

---

## Tech stack

| Layer | Tool |
|-------|------|
| Site generator | [Astro](https://astro.build) 6 (static output) |
| Styling | [Tailwind CSS](https://tailwindcss.com) v4 |
| Language | TypeScript |
| Hosting | [Cloudflare Pages](https://pages.cloudflare.com) (CDN + auto HTTPS) |
| Tests | Playwright (E2E) |

---

## Prerequisites

- **Node.js** ≥ 22.12 (`node -v`)
- **npm** (comes with Node)
- **Cloudflare account** (free tier is enough)
- **Docker** (optional, local preview only)

---

## Quick start (local)

```bash
git clone <your-repo-url>
cd Djson-Landing-Page
make install          # npm install
make dev              # http://localhost:4321
```

Other useful commands:

```bash
make build            # production build → dist/
make preview          # serve dist/ locally
make test             # run Playwright tests
make lint             # astro check
```

---

## Project structure

```
Djson-Landing-Page/
├── src/
│   ├── components/       # UI sections (Header, Hero, Services, …)
│   ├── data/
│   │   ├── i18n/         # ★ Most editable text (EN / FR / Kreol)
│   │   │   ├── en.ts
│   │   │   ├── fr.ts
│   │   │   ├── mrc.ts
│   │   │   └── index.ts  # locale config, shared URLs, GitHub API base
│   │   ├── projects.ts   # GitHub project cards (English)
│   │   ├── contact.ts    # email / WhatsApp / LinkedIn (from .env)
│   │   └── techStack.ts  # technology labels + icons
│   ├── layouts/
│   │   └── BaseLayout.astro   # SEO, fonts, JSON-LD, theme script
│   ├── pages/
│   │   ├── index.astro        # English (/)
│   │   ├── fr/index.astro     # French (/fr/)
│   │   ├── mrc/index.astro    # Kreol (/mrc/)
│   │   └── 404.astro
│   └── styles/
│       └── global.css    # colours, dark mode, animations
├── public/               # static files (copied as-is to site root)
│   ├── fonts/            # self-hosted Inter + JetBrains Mono
│   ├── favicon.svg
│   ├── og-image.png      # social share preview
│   └── manifest.json
├── scripts/
│   ├── deploy-cloudflare.sh  # ★ build + upload to Cloudflare Pages
│   ├── generate-assets.mjs   # regenerate PNG icons + OG image
│   ├── build.sh
│   └── dev.sh
├── public/_headers       # cache + security headers on Cloudflare
├── wrangler.toml         # Cloudflare Pages project name
├── tests/e2e/            # Playwright tests
├── Dockerfile            # optional: self-hosted preview (Hetzner/VPS)
├── docker-compose.yaml
├── Makefile
└── .env.example          # copy to .env — never commit .env
```

---

## Maintenance guide

Use this when you come back later and need to change copy, projects, or contact details **without digging through components**.

### Golden rule

| What you want to change | Where to edit |
|-------------------------|---------------|
| Headlines, services, FAQ, About text, nav labels | `src/data/i18n/en.ts` (+ `fr.ts`, `mrc.ts` if translated) |
| Project showcase cards | `src/data/projects.ts` |
| Email, WhatsApp, LinkedIn | `.env` → `PUBLIC_*` variables |
| GitHub username / API base | `src/data/i18n/index.ts` → `sharedConfig.dataSources` |
| Site URL (SEO, sitemap, canonical) | `astro.config.mjs` → `site:` and `sharedConfig.url` in `index.ts` |
| Colours / dark mode | `src/styles/global.css` → `@theme` block |
| Favicon, OG image, PWA icons | `public/` + `node scripts/generate-assets.mjs` |

You rarely need to touch `.astro` files for content-only updates.

---

### 1. Edit page text (most common)

All section copy lives in three parallel files:

- `src/data/i18n/en.ts` — English (master; keep structure in sync)
- `src/data/i18n/fr.ts` — French
- `src/data/i18n/mrc.ts` — Mauritian Creole

Each file exports the same keys, for example:

| Section in file | What it controls on the site |
|-----------------|------------------------------|
| `siteTitle`, `siteDescription` | Browser tab + Google description |
| `hero` | Top banner, headline, CTAs |
| `terminalScenarios` | Animated terminal in hero |
| `navLinks`, `navCta` | Header navigation |
| `services`, `servicesSection` | Services grid (6 items) |
| `buildAreas` | “What I build” cards |
| `process` | “How I work” steps |
| `stats` | Number row |
| `scope` | “What I do / don’t do” |
| `projectsSection` | Project section headings only |
| `about` | About section (paragraphs + social/contact pills) |
| `principles` | Working principles |
| `faq` | FAQ accordion |
| `contactSection` | Contact CTA block |
| `footer` | Footer links |
| `notFoundPage` | 404 page |

**Workflow:**

1. Edit `en.ts` first.
2. Update `fr.ts` and `mrc.ts` with the same structural changes (same keys, translated values).
3. Run `make dev` and check `/`, `/fr/`, `/mrc/`.
4. Deploy when happy (see [Deploy](#deploy-to-hetzner) below).

**Kreol notes:** Keep degree titles, university names, and technical terms in English where appropriate. Use natural code-switching (e.g. “workflow”, “dashboard”) — see comments at the top of `mrc.ts`.

---

### 2. Change contact details

Edit `.env` (create from `.env.example` if missing):

```env
PUBLIC_EMAIL=dookun88@gmail.com
PUBLIC_WHATSAPP=https://wa.me/23057522027
PUBLIC_LINKEDIN=https://www.linkedin.com/in/yashdjsondookun
```

These are read at **build time**. After changing them, run `make deploy-cloudflare` so production picks them up.

About-section email/phone links are in `about.links` inside each `i18n/*.ts` file — update there too if you change addresses shown in About.

---

### 3. Add or update a GitHub project

Edit `src/data/projects.ts`:

- Add an object to the `projects` array matching the `Project` interface.
- `repoName` must match your GitHub repo name (used for language bar API at build time).
- `terminalLines` power the terminal preview on each card.

Project **section titles** (heading, “View on GitHub”) are in `projectsSection` inside the i18n files.

---

### 4. Change tech stack icons

Edit `src/data/techStack.ts` — list of `{ name, icon }` entries shown under the hero.

---

### 5. Change global name / URL / GitHub source

Edit `src/data/i18n/index.ts`:

```ts
export const sharedConfig = {
  name: 'Yash Djson Dookun',
  url: 'https://yashdookun.com',   // must match astro.config.mjs
  dataSources: {
    githubApiBase: 'https://api.github.com/repos/YashDjsonDookun',
    githubUsername: 'YashDjsonDookun',
  },
};
```

Also update `site:` in `astro.config.mjs` if the domain changes.

---

### 6. Add a new language (advanced)

1. Add locale in `astro.config.mjs` → `i18n.locales`.
2. Create `src/pages/<code>/index.astro` rendering `<PageHome locale="..." />`.
3. Add `src/data/i18n/<code>.ts` mirroring `en.ts`.
4. Register in `src/data/i18n/index.ts` (`contentMap`, `locales`, `hreflangMap`).
5. Run `make build` and fix any type errors.

---

### 7. Regenerate favicon / OG image / PWA icons

After editing `public/favicon.svg`:

```bash
node scripts/generate-assets.mjs
```

Creates `og-image.png`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` in `public/`.

To change the OG image layout, edit the `ogSvg` template in `scripts/generate-assets.mjs`.

---

### 8. Enable analytics (optional)

In `src/layouts/BaseLayout.astro`, uncomment **one** analytics script (Plausible or Umami), then redeploy.

---

### 9. Styling and layout

| Task | File |
|------|------|
| Colours, fonts, dark mode variables | `src/styles/global.css` |
| Section layout / markup | `src/components/<Section>.astro` |
| Page order | `src/components/PageHome.astro` |

Prefer Tailwind utility classes already used in components. Avoid large one-off CSS unless necessary.

---

## Typical update workflow (checklist)

Use this every time you change the site:

```
[ ] Edit content in src/data/i18n/ (and projects.ts if needed)
[ ] Update .env if contact details changed
[ ] make dev          → check in browser (all locales you changed)
[ ] make test         → optional but recommended before deploy
[ ] make deploy-cloudflare
[ ] Open https://yashdookun.com and spot-check
```

**Content-only changes:** steps 1, 3, 5, 6 are enough.

**Contact / env changes:** must rebuild and redeploy (`make deploy-cloudflare`).

---

## Deploy to Cloudflare Pages (recommended)

No VPS to manage. Global CDN, free SSL, and fast delivery in Mauritius.

### Option A — Deploy from your laptop (Wrangler CLI)

**One-time setup**

1. Create a [Cloudflare](https://dash.cloudflare.com/sign-up) account.
2. Copy env file and set contact details:

   ```bash
   cp .env.example .env
   ```

   Optional: set `CLOUDFLARE_PROJECT_NAME=yashdookun` (default in `wrangler.toml`).

3. Log in to Wrangler (opens browser):

   ```bash
   make install
   make cf-login
   ```

4. **First deploy** (creates the Pages project if it does not exist):

   ```bash
   make deploy-cloudflare
   ```

   You’ll get a `*.pages.dev` preview URL.

5. **Custom domain** — in Cloudflare dashboard:
   - **Workers & Pages** → your project → **Custom domains**
   - Add `yashdookun.com` (and `www` if you want)
   - If the domain is already on Cloudflare, DNS is configured automatically.
   - If the domain is elsewhere, follow the dashboard CNAME instructions.

**Every update after that**

```bash
make deploy-cloudflare
```

That runs `make build` (with `.env` contact vars) and uploads `dist/` to Cloudflare.

---

### Option B — Auto deploy from GitHub (no Wrangler on your machine)

1. Push this repo to GitHub.
2. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Select the repo and use these settings:

   | Setting | Value |
   |---------|--------|
   | Framework preset | Astro |
   | Build command | `npm ci && npm run build` |
   | Build output directory | `dist` |
   | **Deploy command** | `bash scripts/cf-pages-deploy.sh` |
   | Node version | `22` (or set env `NODE_VERSION=22`) |

   > **Do not use** `npx wrangler deploy` — that is for Workers and will fail.
   > Use `wrangler pages deploy` (via the script above) to upload `dist/`.

4. **Environment variables** (Settings → Environment variables) — add for Production:

   ```
   PUBLIC_EMAIL=dookun88@gmail.com
   PUBLIC_WHATSAPP=https://wa.me/23057522027
   PUBLIC_LINKEDIN=https://www.linkedin.com/in/yashdjsondookun
   ```

5. Save and deploy. Each `git push` to `main` rebuilds the site.

6. Attach custom domain under **Custom domains** (same as Option A step 5).

---

### Fix: build succeeds but deploy fails (`wrangler deploy`)

If logs show **Build command completed** then **Failed on `npx wrangler deploy`**:

1. Cloudflare dashboard → your Pages project → **Settings** → **Build**
2. Set **Deploy command** to:

   ```bash
   bash scripts/cf-pages-deploy.sh
   ```

   (Or inline: `npx wrangler pages deploy dist --project-name=yashdookun --branch=main` — use your real project name.)

3. Confirm **Build command** is `npm ci && npm run build` and output directory is `dist`
4. **Retry deployment**

If your project name is not `yashdookun`, either rename it in the dashboard to match `wrangler.toml`, or edit `scripts/cf-pages-deploy.sh` / pass `CLOUDFLARE_PROJECT_NAME` in Cloudflare env vars.

### Fix: Authentication error [code: 10000] on deploy

Logs show `CLOUDFLARE_API_TOKEN` with **Authentication error** — the token in your Pages env vars does not have **Pages** permission (even if your login is Super Admin; API tokens are scoped separately).

**Fix (try this first):**

1. Cloudflare → your Pages project → **Settings** → **Environment variables**
2. **Delete** `CLOUDFLARE_API_TOKEN` (and `CLOUDFLARE_ACCOUNT_ID` if you added it) from Production
3. **Retry deployment**

Cloudflare’s own build runner usually authenticates Wrangler without a custom token.

**If you must keep a token** (e.g. external CI), create one at [API Tokens](https://dash.cloudflare.com/profile/api-tokens):

- **Custom token**
- Permissions: **Account** → **Cloudflare Pages** → **Edit**
- Account resources: include your account
- Set in Pages env: `CLOUDFLARE_API_TOKEN` + `CLOUDFLARE_ACCOUNT_ID` (your account ID from the build log)

---

### Cloudflare notes

- Security and cache headers are in `public/_headers` (applied by Cloudflare at the edge).
- `404.html` from Astro is served automatically for missing pages.
- Analytics: uncomment Plausible/Umami in `src/layouts/BaseLayout.astro`, then redeploy.

---

## Alternative: self-hosted VPS (Hetzner / DigitalOcean)

Docker + Caddy scripts are still in the repo if you ever want a server:

```bash
make bootstrap SERVER_IP=YOUR_IP    # once
make deploy-server                  # each update
```

See `scripts/bootstrap-server.sh` and `.env.example` (`SERVER_IP`, `SITE_DOMAIN`, etc.).

---

## Command reference

| Command | Purpose |
|---------|---------|
| `make install` | Install npm dependencies |
| `make dev` | Dev server with hot reload |
| `make build` | Production build to `dist/` |
| `make preview` | Preview `dist/` locally |
| `make test` | Build + Playwright E2E tests |
| `make test-headed` | Tests with visible browser |
| `make lint` | `astro check` |
| `make clean` | Remove `dist/`, `node_modules/`, `.astro/` |
| `make cf-login` | Log in to Cloudflare (Wrangler) |
| `make deploy-cloudflare` | **Build + deploy to Cloudflare Pages** |
| `make bootstrap SERVER_IP=…` | One-time VPS setup (optional) |
| `make deploy-server` | Deploy to VPS via Docker (optional) |
| `make server-status` | Check remote VPS containers |
| `make server-logs` | Tail VPS logs |
| `make docker-build` | Build Docker image locally |
| `make docker-up` | Run local Docker stack |
| `make docker-down` | Stop local Docker stack |

---

## Troubleshooting

| Problem | What to try |
|---------|-------------|
| `make dev` fails | `make clean && make install` |
| Contact links wrong on live site | Update `.env`, run `make deploy-cloudflare` |
| `wrangler` not authenticated | `make cf-login` |
| Build OK, deploy fails on `wrangler deploy` | Use `bash scripts/cf-pages-deploy.sh` as deploy command (not `wrangler deploy`) |
| Deploy: Authentication error 10000 | Remove `CLOUDFLARE_API_TOKEN` from Pages env vars, or give token **Pages → Edit** |
| Deploy fails: project not found | Set `CLOUDFLARE_PROJECT_NAME` in `.env` or create project in dashboard |
| Custom domain not working | Cloudflare dashboard → Custom domains; check DNS (orange cloud = proxied) |
| Old site after deploy | Hard refresh; Cloudflare cache clears in ~minutes, or Purge Cache in dashboard |
| Kreol page broken layout | Ensure `mrc.ts` exports match `en.ts` structure exactly |
| Missing fonts / OG image | Run `node scripts/generate-assets.mjs`, commit `public/` files, redeploy |
| Old favicon in browser | Hard refresh (Cmd+Shift+R) or clear site data |

---

## Environment variables (`.env`)

| Variable | Used for |
|----------|----------|
| `PUBLIC_EMAIL` | Contact mailto link (build time) |
| `PUBLIC_WHATSAPP` | WhatsApp URL (build time) |
| `PUBLIC_LINKEDIN` | LinkedIn URL (build time) |
| `CLOUDFLARE_PROJECT_NAME` | Pages project name (default `yashdookun`) |
| `CLOUDFLARE_API_TOKEN` | Optional: non-interactive / CI deploy |
| `CLOUDFLARE_BRANCH` | Preview branch label for Wrangler (default `main`) |
| `SERVER_IP` | VPS deploy only |
| `SITE_DOMAIN` | VPS / Caddy only |
| `SSH_KEY`, `DEPLOY_USER`, `DEPLOY_PATH` | VPS deploy only |

Never commit `.env` to git.

---

## Legacy deploy (rsync static files)

If you host `dist/` on a plain web server without Docker:

```env
DEPLOY_METHOD=rsync
DEPLOY_HOST=user@your-server.com
DEPLOY_PATH=/var/www/site
```

```bash
make deploy
```

---

## License / ownership

Personal site — all rights reserved unless you add a license file.
