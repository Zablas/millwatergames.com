import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main>
      <h1>Millwater Games</h1>
      <p className="meta">Games for Android</p>

      <h2>Our games</h2>

      <div className="card game">
        <img src="/thalassa/logo-256.png" alt="Thalassa's icon: a marble column by the sea under the moon" />
        <div>
          <h3><a href="/thalassa">Thalassa</a></h3>
          <p>An atmospheric strategy game of the ancient Aegean, played on a globe you can hold.</p>
          <p className="muted">In development for Android phones and tablets · <a href="/thalassa/privacy">Privacy policy</a></p>
        </div>
      </div>

      <div className="card game">
        <img src="/star-tap/icon-512.png" alt="Star Tap's icon: a golden star in a blue ring among the stars" />
        <div>
          <h3><a href="/star-tap">Star Tap</a></h3>
          <p>A one-thumb arcade game about timing, for Android.</p>
          <p className="muted">In testing on Google Play · <a href="/star-tap/privacy">Privacy policy</a></p>
        </div>
      </div>

      <h2>Contact</h2>
      <p>
        Bug reports, questions and complaints about any of our games:{" "}
        <a href="mailto:millwatergames@gmail.com">millwatergames@gmail.com</a>.
      </p>

      <footer>© 2026 Millwater Games</footer>
    </main>
  );
}
