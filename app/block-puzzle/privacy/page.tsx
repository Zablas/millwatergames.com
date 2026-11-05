import type { Metadata } from "next";

// Falling Block Match Puzzle's privacy policy. Its URL is registered in Play Console (privacy
// policy) and AdMob (the GDPR message), and goes on the game's Google Cloud consent screen.
// Whenever what the game stores, sends or asks for changes, update this page and its date.
export const metadata: Metadata = {
  title: "Falling Block Match Puzzle — Privacy Policy",
  description: "What information Falling Block Match Puzzle handles, who else receives it, and what you can do about it.",
  alternates: { canonical: "/block-puzzle/privacy" },
};

export default function BlockPuzzlePrivacy() {
  return (
    <main>
      <h1>Privacy Policy — Falling Block Match Puzzle</h1>
      <p className="meta">Last updated: 5 November 2026</p>

      <p className="lead">
        Falling Block Match Puzzle is a mobile game published by Millwater Games. This
        policy explains what information the game handles, who else receives it, and
        what you can do about it.
      </p>

      <h2>The short version</h2>
      <p>
        Falling Block Match Puzzle has no servers of its own and no account system. We
        do not collect, receive or store your personal information. Your scores,
        progress and settings are saved on your own device, and optionally to your own
        Google account.
      </p>
      <p>
        The game does include Google services — advertising, an in-app purchase, Play
        Games and Google Play's updates — and those services collect data under
        Google's own privacy policy. That is described below.
      </p>

      <h2>What the game stores on your device</h2>
      <p>
        A single save file on your device holds your game progress: best scores and
        records, your level, your Daily streak and calendar, missions, awards, the words
        and answers collected in the game's books, Voyage stars, the looks you have
        picked, and your settings for sound, music, vibration, controls and reminders.
        It also records whether you own Remove Ads, and the hours of the day you started
        your last few games, which the reminders use to choose their time.
      </p>
      <p>
        It contains no name, no email address, no phone number, no location, no
        contacts and no photos. Uninstalling the game deletes it.
      </p>

      <h2>Google services used in the game</h2>

      <table>
        <thead>
          <tr>
            <th>Service</th>
            <th>What it handles</th>
            <th>Why</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Google AdMob</strong></td>
            <td>Advertising ID, device and app information, IP address, and how you
              interact with ads.</td>
            <td>To show ads, measure them, and prevent fraud. This is the only part of
              the game that involves advertising data.</td>
          </tr>
          <tr>
            <td><strong>Google Play Billing</strong></td>
            <td>Your purchase of Remove Ads. Payment details are handled entirely by
              Google — the game never sees a card number. The game stores only a flag
              recording that you own it, and checks it with Google Play each time it
              starts.</td>
            <td>To sell and restore the one optional purchase, removing ads.</td>
          </tr>
          <tr>
            <td><strong>Google Play Games Services</strong></td>
            <td>Your Play Games player identifier, leaderboard scores, achievements, and
              a copy of your progress stored in your own Google Drive application-data
              folder.</td>
            <td>To run leaderboards and achievements and to carry your progress between
              your devices. This is optional and depends on you signing in to Play
              Games.</td>
          </tr>
          <tr>
            <td><strong>Google Play in-app updates</strong></td>
            <td>Whether a newer version of the game is available on Google Play. Google
              Play itself shows the update screen, downloads the new version and installs
              it; the game learns only whether a newer version exists.</td>
            <td>To keep everyone on the current version: when a newer one is out, the game
              asks you to install it before you play on.</td>
          </tr>
        </tbody>
      </table>

      <p>
        All four are operated by Google, and their handling of the data is governed by
        the <a href="https://policies.google.com/privacy">Google Privacy Policy</a>. For
        advertising specifically, see{" "}
        <a href="https://support.google.com/admob/answer/6128543">how Google uses data from apps that use its services</a>.
      </p>

      <h2>Advertising and your consent</h2>
      <p>
        The game shows ads in three ways: a banner along the bottom of the title screen,
        the modes screen and the game, in a space of its own that never covers the
        board; a full-screen ad when you leave a game (never in your first few games,
        and in the Voyage after every second stage); and, only if you choose it, a video
        that lets you continue a game. Ads never interrupt play. Remove Ads takes away
        the banner and the full-screen ads.
      </p>
      <p>
        Ads in the game are limited to content suitable for teenagers.
      </p>
      <p>
        If you are in the European Economic Area, the United Kingdom or Switzerland, the
        game asks for your consent before any personalised advertising, using Google's
        consent form. If you do not give consent, personalised ads are not requested.
      </p>
      <p>
        <strong>You can change your choice at any time</strong> using the{" "}
        <strong>PRIVACY</strong> button in the game's Settings, which reopens the
        same consent form. You can also reset your Advertising ID, or opt out of ad
        personalisation entirely, in your device settings under{" "}
        <em>Settings → Google → Ads</em>.
      </p>

      <h2>Reminders</h2>
      <p>
        If you turn reminders on, the game sets them on your device: at most one a day,
        at the hour you usually play, never on a day you have already played. They are
        created on your phone, and no information leaves it for them. Android asks your
        permission to show notifications first. Turn them off under{" "}
        <strong>REMINDERS</strong> in the game's Settings, or in your device's
        notification settings.
      </p>

      <h2>Sharing</h2>
      <p>
        After a Daily, the <strong>SHARE</strong> button opens your device's share
        sheet with a short text: the mode, the day, your score, your streak and the
        game's Google Play address. You choose where it goes; the game sends nothing
        by itself.
      </p>

      <h2>Analytics</h2>
      <p>
        The game contains no analytics, advertising-attribution or crash reporting
        software beyond the Google services listed above, and it reports nothing about
        how you play to us.
      </p>

      <h2>Permissions</h2>
      <p>
        The game requests internet and network-state access so ads, the purchase and
        Play Games can work, and vibration for its haptic feedback. Its reminders
        request permission to show notifications, and to know when your phone has
        restarted so the reminders already set survive it. The remaining permissions in
        the app — including the advertising ID permission and Google's Privacy
        Sandbox permissions — are added automatically by the Google advertising, billing
        and Play Services libraries. The game does not request access to your location,
        camera, microphone, contacts, photos or files.
      </p>

      <h2>Children</h2>
      <p>
        Falling Block Match Puzzle is not directed at children. It is intended for
        players aged 13 and over, and we do not knowingly collect information from
        children under 13. If you believe a child has provided information through this
        app, please contact us and we will help you address it.
      </p>

      <h2 id="delete">Deleting your data</h2>
      <p>
        Falling Block Match Puzzle keeps nothing about you on any server of ours: what it keeps is
        on your phone or in your own Google account, and you can delete all of it yourself.
      </p>
      <ol>
        <li><strong>Your save on the phone</strong> (scores, progress, settings, the Remove Ads flag and your usual play hours): uninstall the game, or clear its storage in your device's app settings. It is deleted at once.</li>
        <li><strong>The cloud copy of your progress</strong>, if you signed in to Play Games: in Google Drive on the web, open <em>Settings → Manage apps</em>, find Falling Block Match Puzzle and choose <em>Delete hidden app data</em>.</li>
        <li><strong>Your leaderboard scores and achievements:</strong> in the Google Play Games app's settings, delete this game's data. You can delete one game's data without deleting your Play Games account. See also{" "}
          <a href="https://play.google.com/games">play.google.com/games</a>.</li>
        <li><strong>Advertising data:</strong> reset or delete your Advertising ID in your device settings, and manage what Google holds at{" "}
          <a href="https://myadcenter.google.com">myadcenter.google.com</a>.</li>
      </ol>
      <p>
        <strong>What is kept:</strong> your purchase of Remove Ads stays in your Google Play purchase
        history, so you can restore it on any device; Google holds it, not us. Google keeps the data its
        services collect for the periods in its{" "}
        <a href="https://policies.google.com/technologies/retention">retention policy</a>. We keep
        nothing, so no retention period of ours applies.
      </p>
      <p>
        You can also ask us: write to{" "}
        <a href="mailto:millwatergames@gmail.com?subject=Delete%20my%20Falling%20Block%20Match%20Puzzle%20data">millwatergames@gmail.com</a>{" "}
        with the subject “Delete my Falling Block Match Puzzle data”. As we hold no data about you
        ourselves, we will reply with the steps above for your case. Requests to access, correct or
        export personal data are handled through Google in the same way.
      </p>

      <h2>Your rights</h2>
      <p>
        If you are in the European Economic Area or the United Kingdom, the GDPR gives
        you rights over your personal data, including access, correction, erasure,
        restriction, portability and objection, and the right to withdraw consent at any
        time. As we hold no personal data ourselves, these rights are exercised against
        Google as the controller of the data described above. You also have the right to
        complain to your national data protection authority.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        If this policy changes, the updated version will be posted at this address with a
        new date at the top.
      </p>

      <h2>Contact</h2>
      <p>
        Millwater Games<br />
        <a href="mailto:millwatergames@gmail.com">millwatergames@gmail.com</a>
      </p>

      <footer>
        <a href="/block-puzzle">Falling Block Match Puzzle</a> · <a href="/">Millwater Games</a>
      </footer>
    </main>
  );
}
