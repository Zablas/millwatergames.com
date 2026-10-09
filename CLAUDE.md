@AGENTS.md

# millwatergames.com

Millwater Games' website: a static Next.js export (`output: "export"`, `out/`) served by Cloudflare
Workers static assets (`wrangler.jsonc`). Pushing to `main` publishes it: ask the user before every
push. The README lists the pages, the commands and every console that registers an address.

- The privacy policies are legal text the games' stores and Google's consent screen point at. Port or
  edit their words exactly, and change a policy's "Last updated" date whenever its content changes.
  The games' own repos (`Documents/MobileGameDev2` for Thalassa, `Documents/MobileGameDev` for Star
  Tap) say when a change in the game needs one.
- Addresses never change lightly: each is registered in Play Console, AdMob or Google Cloud (README).
  `app-ads.txt` must stay byte for byte at the root; changing it cuts both games' ads.
- Links between pages are plain `<a>` with absolute paths (`/thalassa/privacy`), never `.html`.
- JSX drops whitespace at a line break beside a tag: keep text and its inline tags on one line, or
  write `{" "}`. After editing a page, `npm run build` and read the exported HTML in `out/`.
- `npm run preview` serves `out/` as Cloudflare does (http://127.0.0.1:8787).
