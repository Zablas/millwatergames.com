import type { Metadata } from "next";

// Climb Bros' terms for playing online: the game shows them (Read the terms) before a player's first
// online game, as Google Play asks of a game where strangers meet (Quick join). Whenever the rules
// or what happens about reports changes, update this page and its date, and raise
// Moderation.TermsVersion in the game so that everyone agrees again.
export const metadata: Metadata = {
  title: "Climb Bros — Terms for Playing Online",
  description: "The rules for playing Climb Bros online with others, and how to mute, block and report players.",
  alternates: { canonical: "/climb-bros/terms" },
};

export default function ClimbBrosTerms() {
  return (
    <main>
      <h1>Terms for Playing Online — Climb Bros</h1>
      <p className="meta">Last updated: 10 November 2026</p>

      <p className="lead">
        These terms are for playing Climb Bros online with other people: with friends who join by your
        game's code, and with anyone through Quick join. The game asks you to agree to them before your
        first online game.
      </p>

      <h2>Be a good sport</h2>
      <p>
        In an online game, the other players see your player name and hear you while you hold TALK.
        Keep both fit for anyone:
      </p>
      <ul>
        <li>No hateful talk or names: nothing that attacks people for their race, ethnicity, religion, nationality, sex, gender, sexuality, disability or age.</li>
        <li>No threats, harassment or bullying, and no following a player from game to game to do it.</li>
        <li>No sexual talk or names, and nothing that sexualises children, ever.</li>
        <li>No pretending to be someone else, Millwater Games and Epic included.</li>
        <li>No spamming the voice chat or the quick-chat phrases, and no scams.</li>
        <li>No cheating: no changed copies of the game, nothing that plays for you or changes what the game sends, and no using a bug to spoil the others' game.</li>
        <li>Nothing against the law.</li>
      </ul>

      <h2>Mute, block and report</h2>
      <p>In a game, open the pause menu and its PLAYERS list:</p>
      <ul>
        <li><strong>Mute</strong> a player to stop hearing them while the game stays open.</li>
        <li><strong>Block</strong> a player: you don't hear them, they show as their character instead of their name, your Quick join never picks a game they are in, and they can't join a game you host. The game's settings can unblock everyone.</li>
        <li><strong>Report</strong> a player, choosing why: an offensive name, abusive talk, cheating, or something else. The report goes to Millwater Games through Epic Online Services, with your Climb Bros account ID, theirs, the reason, and the game's code and version.</li>
      </ul>
      <p>
        You can also report a player by email to{" "}
        <a href="mailto:millwatergames@gmail.com?subject=Climb%20Bros%20report">millwatergames@gmail.com</a>, with their player name, the game's code and what happened.
      </p>

      <h2>What we do about reports</h2>
      <p>
        We read the reports. If a player breaks these terms, we may keep their account out of public
        games, the ones Quick join finds, for a time or for good. Games joined by a code, among friends,
        still work. We may delete an account that keeps breaking them. If you think we got it wrong,
        email us.
      </p>

      <h2>Your player name</h2>
      <p>
        You choose your player name, 2 to 16 letters or digits. Choose one that keeps to these terms:
        other players can report a name that doesn't.
      </p>

      <h2>Changes</h2>
      <p>
        If these terms change, the new version is posted here with a new date, and the game asks you to
        agree again before your next online game.
      </p>

      <h2>Contact</h2>
      <p>
        Millwater Games<br />
        <a href="mailto:millwatergames@gmail.com">millwatergames@gmail.com</a>
      </p>
      <p>
        How the game handles your information is in the <a href="/climb-bros/privacy">privacy policy</a>.
      </p>

      <footer>
        <a href="/climb-bros">Climb Bros</a> · <a href="/">Millwater Games</a>
      </footer>
    </main>
  );
}
