import type { Metadata } from "next";

// Thalassa's home page. Google's OAuth consent screen names this page as the app's home page,
// and its privacy link must be the same URL as the consent screen's privacy policy.
export const metadata: Metadata = {
  title: "Thalassa — Millwater Games",
  description: "Thalassa: an atmospheric strategy game of the ancient Aegean, played on a globe you can hold.",
  alternates: { canonical: "/thalassa" },
};

export default function ThalassaHome() {
  return (
    <main>
      <header className="masthead">
        <img src="/thalassa/logo-256.png" alt="Thalassa's icon: a marble column by the sea under the moon" />
        <div>
          <h1>Thalassa</h1>
          <p className="tagline">by Millwater Games</p>
        </div>
      </header>

      <p className="lead">
        An atmospheric strategy game of the ancient Aegean, played on a globe you can hold.
        Found cities, take to the sea, win the favour of the gods and leave a legend behind.
      </p>

      <h2>The game</h2>
      <ul>
        <li><strong>A world you can hold.</strong> One continuous zoom takes you from a vista on the horizon to the whole globe and back down to any shore.</li>
        <li><strong>The sea is the stage.</strong> Coasts decide where armies can land, and the seasons change the sea: in winter the open ocean is stormy and fleets hug the coast.</li>
        <li><strong>Armies as formations.</strong> Hoplites lock shields, flanks matter, and a beaten army can rout instead of dying.</li>
        <li><strong>Gods, oracles and heroes.</strong> Choose a patron god, follow the Oracle's prophecies, hold the Panhellenic Games, and raise heroes whose deeds are written into an illustrated epic.</li>
        <li><strong>Many roads to glory.</strong> Win by Glory, by holding the sacred Omphaloi, or by conquest.</li>
      </ul>

      <h2>Alone or together</h2>
      <p>
        Play alone against rival powers led by the computer, after a first voyage that teaches you the
        game. Or <strong>sail together</strong> with two to four friends: everyone moves at once each
        round, the computer leads the other powers, and games are found by a five-letter code or in a
        list of voyages open to all. Playing together uses Sign in with Google and Epic Online
        Services.
      </p>

      <h2>Platforms</h2>
      <p>
        Thalassa is in development for Android phones and tablets.
      </p>

      <h2>Privacy</h2>
      <p>
        The game has no analytics. It shows ads (Google AdMob) until you buy Remove ads, and with Google
        Play Games your achievements and saved games follow your Google account. Read the{" "}
        <a href="/thalassa/privacy">privacy policy</a> to see what is shared, and when.
      </p>

      <footer>
        © 2026 <a href="/">Millwater Games</a> ·{" "}
        <a href="/thalassa/privacy">Privacy policy</a> ·{" "}
        <a href="mailto:millwatergames@gmail.com">millwatergames@gmail.com</a>
      </footer>
    </main>
  );
}
