import type { Metadata } from "next";
import JoinButton from "./join-button";

// Where an invite link lands: https://millwatergames.com/climb-bros/join#K7M2QX, shared from the
// game's pause menu. On a phone with the game the link can open it directly; this page is for the
// others, and its button opens the game by its own address, climbbros://join/K7M2QX. The address
// is the game's too: MobileGameDev3's src/Tower.Core/Net/InviteLink.cs.
export const metadata: Metadata = {
  title: "Join a game of Climb Bros — Millwater Games",
  description: "You've been invited to climb a tower together in Climb Bros.",
  alternates: { canonical: "/climb-bros/join" },
  robots: { index: false },
};

export default function ClimbBrosJoin() {
  return (
    <main>
      <header className="masthead">
        <img src="/climb-bros/logo-256.png" alt="Climb Bros' icon: a green goat peeking over the top of a brick tower" />
        <div>
          <h1>Climb Bros</h1>
          <p className="tagline">by Millwater Games</p>
        </div>
      </header>

      <p className="lead">You've been invited to climb a tower together.</p>

      <JoinButton />

      <h2>Don't have the game yet?</h2>
      <p>
        Climb Bros is in development for Android phones. Read more on{" "}
        <a href="/climb-bros">the game's page</a>.
      </p>

      <footer>
        © 2026 <a href="/">Millwater Games</a> ·{" "}
        <a href="/climb-bros/privacy">Privacy policy</a> ·{" "}
        <a href="mailto:millwatergames@gmail.com">millwatergames@gmail.com</a>
      </footer>
    </main>
  );
}
