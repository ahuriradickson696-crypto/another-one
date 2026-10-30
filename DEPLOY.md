# Deploy AVIU website to Vercel

## Why you saw `404 NOT_FOUND`

This is a **Vite React SPA**. Vercel must:

1. Build from the **project** folder (where `package.json` lives)
2. Publish the **`dist`** folder
3. Rewrite all routes to `index.html` (see `vercel.json`)

Your app uses **hash routing** (`/#/study`).  
- Correct: `https://your-app.vercel.app/` or `https://your-app.vercel.app/#/study`  
- Wrong: `https://your-app.vercel.app/study` (no hash → can 404 without rewrites)

## Fix on Vercel (Dashboard)

1. Import the Git repo **or** upload the project.
2. **Root Directory** → set to `project`  
   (if the ZIP extracted as `AVIU-Website/project`, Root Directory is that `project` folder)
3. Framework Preset: **Vite**
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Install Command: `npm install`
7. Redeploy

`vercel.json` in the project root already sets:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

## Deploy with Vercel CLI

```bash
cd project
npm install
npm run build
npx vercel --prod
```

When prompted, link the project and accept defaults (output `dist`).

## Local check before deploy

```bash
cd project
npm install
npm run build
npm run preview
```

Open http://localhost:4173 — if this works, the build is fine and the issue is Vercel settings.

## After deploy

Open the **root URL** only:

`https://YOUR-PROJECT.vercel.app/`

Then use the site menu (hash routes). Bookmark home, not a deep path without `#`.


## Home page hero video (optional, self-hosted)

The home page hero plays the YouTube campus video silently in the background after the page loads,
and "See AVIU in action" opens it with sound in a pop-up.

To play your own file behind the hero text instead of YouTube:
1. Export a short clip (10-20 s, 1280x720, no audio, under about 4 MB) as MP4 (H.264).
   Optionally also export a WebM copy.
2. Put the file(s) in `public/videos/` (for example `public/videos/campus-hero.mp4`).
3. In `src/pages/Home.tsx` set `HERO_VIDEO_SRC = '/videos/campus-hero.mp4'`
   (and `HERO_VIDEO_WEBM` if you made one).

Visitors who have reduced-motion or Data Saver turned on still see the photo only.

## Things you fill in (all optional; nothing shows until you do)

| What | Where | Effect |
|---|---|---|
| Social media pages | `src/data/university.ts` → `universityInfo.social` (paste the full page addresses) | Footer icons appear, only for the ones you fill in |
| NCHE licence number / certificate link | `universityInfo.accreditation` | Shown in the footer |
| Fee schedule | `feeSchedule` (bottom of `university.ts`) and `feesLastUpdated` | The Fees page shows the table and hides "coming soon" |
| Staff photos | Drop files in `src/assets/staff/` named after the person (see the README there) | Photo replaces the initials automatically |
| News stories | Add an item to `newsItems` in `university.ts` (unique `id`) | Gets its own page at `/news/<id>`; add it to `public/sitemap.xml` too |

## Contact form + newsletter (server side)

Both post to `/api/forms` (`api/forms.js`). In Vercel → Settings → Environment Variables set either:
- `RESEND_API_KEY` and `FORMS_TO_EMAIL` (optional `FORMS_FROM_EMAIL`), or
- `FORMS_WEBHOOK_URL` (Zapier, Make or Slack).

Until one is set, the forms open the visitor's email app with the message filled in, and tell them to press Send.

## Visitor statistics

Set `VITE_GA_MEASUREMENT_ID` (a Google Analytics 4 ID like `G-XXXXXXXXXX`). It only runs after a visitor accepts all cookies.
