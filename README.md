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
| Climb Bros | https://millwatergames.com/climb-bros | `app/climb-bros/page.tsx` |
| Climb Bros' privacy policy | https://millwatergames.com/climb-bros/privacy | `app/climb-bros/privacy/page.tsx` |
| Falling Block Match Puzzle's privacy policy | https://millwatergames.com/block-puzzle/privacy | `app/block-puzzle/privacy/page.tsx` |
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
| `millwatergames.com` | Google Search Console (Domain property, verified by DNS TXT in Cloudflare); Google Cloud → Google Auth Platform → Branding → Authorized domains (Thalassa's project, Climb Bros' project, and Star Tap's if it has branding) |
| `/thalassa` | Google Cloud → Branding → Application home page (Thalassa); Play Console → Thalassa → Store settings → Website (AdMob reads its host for app-ads.txt) |
| `/thalassa/privacy` | Google Cloud → Branding → Application privacy policy link; Play Console → Thalassa → App content → Privacy policy; AdMob → Privacy & messaging → Thalassa's privacy policy URL; Epic Developer Portal → Thalassa → Brand settings; App Store Connect → Thalassa → App Information → Privacy Policy URL, once it is there |
| `/thalassa/privacy#delete` | Play Console → Thalassa → App content → Data safety → Delete account URL |
| `/star-tap` | Play Console → Star Tap → Store settings → Website |
| `/star-tap/privacy` | Play Console → Star Tap → App content → Privacy policy; AdMob → Privacy & messaging → Star Tap's privacy policy URL |
| `/climb-bros` | Google Cloud → Branding → Application home page (Climb Bros); Play Console → Climb Bros → Store settings → Website, once it is there |
| `/climb-bros/privacy` | Google Cloud → Branding → Application privacy policy link (Climb Bros); Play Console → Climb Bros → App content → Privacy policy, once it is there |
| `/climb-bros/privacy#delete` | Play Console → Climb Bros → App content → Data safety → Delete account URL, once it is there |
| `/block-puzzle/privacy` | Play Console → Falling Block Match Puzzle → App content → Privacy policy; AdMob → Privacy & messaging → its privacy policy URL; Google Cloud → Branding → Application privacy policy link (its Play Games project); all once they are there |
| `/app-ads.txt` | found by AdMob at the root of the Website host of both apps; one line for the one AdMob account |

Google requires a game's home page to link to the same privacy policy URL as its consent screen,
so keep the link on `/thalassa` exactly `/thalassa/privacy`, and on `/climb-bros` exactly
`/climb-bros/privacy`.

## Updating a policy

Whenever what a game stores, sends or asks for changes, update its privacy page and its
"Last updated" date in the same change. A push publishes it.
