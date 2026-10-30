import type { Metadata } from "next";

// Climb Bros' home page. Google's OAuth consent screen names this page as the app's home page,
// and its privacy link must be the same URL as the consent screen's privacy policy.
export const metadata: Metadata = {
  title: "Climb Bros — Millwater Games",
  description: "Climb Bros: a cartoon climbing game for one to four friends. Climb a new tower every run and bring the colour back.",
  alternates: { canonical: "/climb-bros" },
};

export default function ClimbBrosHome() {
  return (
    <main>
      <header className="masthead">
        <img src="/climb-bros/logo-256.png" alt="Climb Bros' icon: a green goat peeking over the top of a brick tower" />
        <div>
          <h1>Climb Bros</h1>
          <p className="tagline">by Millwater Games</p>
        </div>
      </header>

      <p className="lead">
        A climbing game for one to four friends, drawn like a 1930s rubber-hose cartoon. Climb a new
        tower every run, floor by floor, beat the ink creatures that seal each way up, and bring the
        colour back to a world gone grey.
      </p>

      <h2>The game</h2>
      <ul>
        <li><strong>Climb for real.</strong> Grab the bricks, lunge for the next hold and rest on a ledge before your stamina runs out. Slippery walls, hot pipes and ladders change how every shaft climbs.</li>
        <li><strong>A new tower every run.</strong> Every floor is made fresh, and there is always a way up. Today's tower is the same for everyone that day.</li>
        <li><strong>Ink creatures and bosses.</strong> Mallets, pies, slingshots and seltzer against the ink, and a boss at the top of every tower: The Boiler, The Maestro, The Clockwork King and Mister Matinee.</li>
        <li><strong>Four towers, linked by funiculars.</strong> Ride the cable car to the next tower while bats attack it: man its guns, mend what breaks, and free the pulley when it jams.</li>
        <li><strong>The colour comes back</strong> as you climb and fight, until the whole tower is in colour again.</li>
      </ul>

      <h2>Alone or together</h2>
      <p>
        Climb alone, or with up to three friends: a friend who goes down can be helped up, and a ghost
        can float back to life. Play together on the same Wi-Fi, or online with friends by a code.
        Playing online uses Epic Online Services, and Sign in with Google if you choose it.
      </p>

      <h2>Platforms</h2>
      <p>
        Climb Bros is in development for Android phones.
      </p>

      <h2>Privacy</h2>
      <p>
        The game shows no ads, sells nothing inside the game and has no analytics. Read the{" "}
        <a href="/climb-bros/privacy">privacy policy</a> to see what playing together shares, and with
        whom.
      </p>

      <footer>
        © 2026 <a href="/">Millwater Games</a> ·{" "}
        <a href="/climb-bros/privacy">Privacy policy</a> ·{" "}
        <a href="mailto:millwatergames@gmail.com">millwatergames@gmail.com</a>
      </footer>
    </main>
  );
}
