import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found — Millwater Games",
};

export default function NotFound() {
  return (
    <main>
      <h1>Page not found</h1>
      <p className="meta">There is nothing at this address.</p>
      <p>
        Go to <a href="/">Millwater Games</a>, or straight to{" "}
        <a href="/thalassa">Thalassa</a> or <a href="/star-tap">Star Tap</a>.
      </p>
    </main>
  );
}
