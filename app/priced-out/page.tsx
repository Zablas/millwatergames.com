import type { Metadata } from "next";

// Priced Out's home page: the Website on its Play listing (AdMob reads its host for
// app-ads.txt) and the application home page on its Play Games consent screen, whose privacy
// link must be the same URL as the consent screen's privacy policy.
export const metadata: Metadata = {
  title: "Priced Out — Millwater Games",
  description: "Priced Out is an idle game about never affording a house, for Android.",
  alternates: { canonical: "/priced-out" },
};

export default function PricedOutHome() {
  return (
    <main>
      <header className="masthead">
        <img src="/priced-out/icon-512.png" alt="Priced Out's icon: a green brick house with a red up arrow beside its roof" />
        <div>
          <h1>Priced Out</h1>
          <p className="tagline">by Millwater Games</p>
        </div>
      </header>

      <p className="lead">
        Balance: €0.00. The house on the hill: €600,000. It has gone up since you started reading
        this.
      </p>

      <p>
        Priced Out is an idle game about the one thing a whole generation cannot buy. You live at the
        bottom of the road. The house is at the top, with its price pinned to the roof, and the price
        does not stand still.
      </p>

      <h2>How it goes</h2>
      <ul>
        <li><strong>Work.</strong> Tap to work a shift and watch rent take more than half of it. Start a side hustle. Then another. Nine jobs later you are, technically, a business.</li>
        <li><strong>Cut back.</strong> Cancel the gym, pack your own lunch, share a room with Dave. Every sacrifice lowers what rent takes and costs a little morale.</li>
        <li><strong>Climb.</strong> A parking space, a garden shed, a camper van, a converted garage, a studio and a one-bed flat. Then, one day, the house. It will cost more than it did when you began.</li>
        <li><strong>Survive.</strong> Rent reviews, letting agents with new fees, a cousin with a tip about HouseCoin: sixty-two things happen to you, and each comes with a choice.</li>
        <li><strong>Do it again.</strong> Sell up and move somewhere dearer, or change the year you were born and find out how easy 1955 had it.</li>
      </ul>
      <p className="muted">
        Two looks, day and night, or let your phone's clock choose. Your game can follow you to a new
        phone through Google Play Games.
      </p>

      <h2>Where to get it</h2>
      <div className="card">
        <p>
          Priced Out is coming to Google Play for Android phones. It is not listed yet.
        </p>
      </div>

      <h2>Money, plainly</h2>
      <p>
        Priced Out is free and shows ads. Boosts are optional: you choose whether to watch a video for
        one. There is an occasional ad between screens, never in your first ten minutes, and no
        banners. Five optional purchases are on offer: two you keep for good, one of which ends the
        ads between screens, and three one-off windfalls. Nothing has to be bought to play.
      </p>
      <p>
        It is a game. Rung, the bank in it, is not a real bank: it holds no real money, and nothing in
        the game is financial advice.
      </p>

      <h2>Privacy</h2>
      <p>
        The game has no servers of its own and no account system. Your game is saved on your own
        device, and optionally to your own Google Play Games account. The full detail, including the
        Google services the game uses, is in the{" "}
        <a href="/priced-out/privacy">privacy policy</a>.
      </p>

      <h2>Support</h2>
      <p>
        Bug reports, questions and complaints all go to the same place:{" "}
        <a href="mailto:millwatergames@gmail.com">millwatergames@gmail.com</a>.
      </p>

      <footer>
        © 2026 <a href="/">Millwater Games</a> ·{" "}
        <a href="/priced-out/privacy">Privacy policy</a> ·{" "}
        <a href="mailto:millwatergames@gmail.com">millwatergames@gmail.com</a>
      </footer>
    </main>
  );
}
