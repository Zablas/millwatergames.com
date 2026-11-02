import type { Metadata } from "next";

// Falling Block Match Puzzle's home page: the Website on its Play listing (AdMob reads its host
// for app-ads.txt) and the application home page on its Play Games consent screen, whose privacy
// link must be the same URL as the consent screen's privacy policy.
export const metadata: Metadata = {
  title: "Falling Block Match Puzzle — Millwater Games",
  description: "Falling Block Match Puzzle: three falling block puzzles in one, color floods, words and number sums, for Android.",
  alternates: { canonical: "/block-puzzle" },
};

export default function BlockPuzzleHome() {
  return (
    <main>
      <header className="masthead">
        <img src="/block-puzzle/icon-512.png" alt="Falling Block Match Puzzle's icon: four glossy tiles, a heart, an A, a Z and a star, on a night sky" />
        <div>
          <h1>Falling Block Match Puzzle</h1>
          <p className="tagline">by Millwater Games</p>
        </div>
      </header>

      <p className="lead">
        Three puzzles fall from the same glowing sky. Drag, tap to turn, flick to drop, and set off
        chains that keep going long after the piece lands.
      </p>

      <h2>Three puzzles in one</h2>
      <ul>
        <li><strong>Color.</strong> Fill a row from wall to wall and it clears, then the clear floods through every block of the same color it touches. Blocks drop into the gaps one by one and the chain goes on. Every block carries a symbol as well as a color, so the game plays the same for color-blind players.</li>
        <li><strong>Words.</strong> Rows never clear here: words do. Spell them left to right or top to bottom with the letters as they fall, from ON and OR to long, rare finds.</li>
        <li><strong>Numbers.</strong> Every block holds a number from 1 to 9, and a strip of signs sits under the board. Fill a row and it becomes a sum, times and divide first: the bigger the answer, the bigger the score.</li>
      </ul>

      <h2>Every day</h2>
      <ul>
        <li><strong>A Daily in each mode:</strong> three minutes on the same pieces as every other player, with a leaderboard of its own.</li>
        <li><strong>Missions and a streak that forgives:</strong> shields cover a missed day, and a lost streak can be won back.</li>
        <li><strong>A calendar of your Dailies,</strong> with a trophy each month.</li>
      </ul>

      <h2>The Voyage</h2>
      <p>
        120 stages across eight chapters, each with a goal of its own and a set number of pieces.
        Clear the goal for a star, score high for two more, and the next stage opens.
      </p>

      <h2>Keep growing</h2>
      <p>
        Levels all the way to 100, with something new every few levels: tile themes, skies, drop
        trails, clear bursts, badge colors and titles, all yours to pick. Books fill as you play, with
        every word you have spelled, every answer from 1 to 100 and the moments you have pulled off.
        Medals for each mode, achievements and leaderboards with Google Play Games, and your progress
        saved to the cloud.
      </p>

      <h2>Where to get it</h2>
      <div className="card">
        <p>
          Falling Block Match Puzzle is coming to Google Play for Android phones. It is not listed
          yet.
        </p>
      </div>

      <h2>Fair by design</h2>
      <p>
        No energy, no timers to wait out, no currency, no loot boxes: every reward is earned by
        playing. The game shows ads, and one purchase removes them for good. The optional video that
        rescues a run is always your choice.
      </p>

      <h2>Privacy</h2>
      <p>
        The game has no servers of its own and no account system. Your progress and settings are
        saved on your own device, and optionally to your own Google account. The full detail,
        including the Google services the game uses, is in the{" "}
        <a href="/block-puzzle/privacy">privacy policy</a>.
      </p>

      <h2>Support</h2>
      <p>
        Bug reports, questions and complaints all go to the same place:{" "}
        <a href="mailto:millwatergames@gmail.com">millwatergames@gmail.com</a>.
      </p>

      <footer>
        © 2026 <a href="/">Millwater Games</a> ·{" "}
        <a href="/block-puzzle/privacy">Privacy policy</a> ·{" "}
        <a href="mailto:millwatergames@gmail.com">millwatergames@gmail.com</a>
      </footer>
    </main>
  );
}
