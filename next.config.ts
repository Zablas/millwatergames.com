import type { NextConfig } from "next";

// A static export: `next build` writes plain HTML into out/, which Cloudflare
// serves as static assets (wrangler.jsonc). Nothing runs on a server.
const nextConfig: NextConfig = {
  output: "export",
  // Pages are /thalassa and /thalassa/privacy, written as thalassa.html and
  // thalassa/privacy.html; Cloudflare serves them without the .html.
  trailingSlash: false,
  // The image optimizer needs a server; keep next/image usable if it is ever used.
  images: { unoptimized: true },
};

export default nextConfig;
