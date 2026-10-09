# millwatergames.com

The website of Millwater Games: the studio's home page, and each game's page and privacy policy.
A Next.js app exported as static HTML and served by Cloudflare Workers (static assets only, the
free plan). Every push to `main` deploys.

| Page | URL | Source |
|---|---|---|
| Studio home | https://millwatergames.com/ | `app/page.tsx` |
| Thalassa | https://millwatergames.com/thalassa | `app/thalassa/page.tsx` |
| Thalassa's privacy policy | https://millwatergames.com/thalassa/privacy | `app/thalassa/privacy/page.tsx` |
| Star Tap | https://millwatergames.com/star-tap | `app/star-tap/page.tsx` |
| Star Tap's privacy policy | https://millwatergames.com/star-tap/privacy | `app/star-tap/privacy/page.tsx` |
| AdMob's app-ads.txt | https://millwatergames.com/app-ads.txt | `public/app-ads.txt` |

The pages were first published on `zablas.github.io` (repo `Zablas/Zablas.github.io`).

## Commands

- `npm run dev`: Next.js's development server.
- `npm run build`: the static site into `out/`.
- `npm run preview`: build, then serve `out/` locally with Cloudflare's own runtime
  (`wrangler dev`, http://127.0.0.1:8787), with the same routing as the live site:
  `/thalassa/privacy` serves `thalassa/privacy.html`, and `.html` addresses and trailing slashes
  redirect to the clean address.
- `npm run deploy`: build and deploy from this PC (`wrangler login` first). Normally unnecessary:
  Cloudflare builds and deploys every push to `main` (Workers Builds: build command
  `npm run build`, deploy command `npx wrangler deploy`).

## Where the addresses are registered

Changing an address means changing it in every place below as well.

| Address | Registered in |
|---|---|
| `millwatergames.com` | Google Search Console (Domain property, verified by DNS TXT in Cloudflare); Google Cloud → Google Auth Platform → Branding → Authorized domains (Thalassa's project, and Star Tap's if it has branding) |
| `/thalassa` | Google Cloud → Branding → Application home page (Thalassa); Play Console → Thalassa → Store settings → Website (AdMob reads its host for app-ads.txt) |
| `/thalassa/privacy` | Google Cloud → Branding → Application privacy policy link; Play Console → Thalassa → App content → Privacy policy; AdMob → Privacy & messaging → Thalassa's privacy policy URL |
| `/thalassa/privacy#delete` | Play Console → Thalassa → App content → Data safety → Delete account URL |
| `/star-tap` | Play Console → Star Tap → Store settings → Website |
| `/star-tap/privacy` | Play Console → Star Tap → App content → Privacy policy; AdMob → Privacy & messaging → Star Tap's privacy policy URL |
| `/app-ads.txt` | found by AdMob at the root of the Website host of both apps; one line for the one AdMob account |

Google requires Thalassa's home page to link to the same privacy policy URL as the consent screen,
so keep the link on `/thalassa` exactly `/thalassa/privacy`.

## Updating a policy

Whenever what a game stores, sends or asks for changes, update its privacy page and its
"Last updated" date in the same change. A push publishes it.
