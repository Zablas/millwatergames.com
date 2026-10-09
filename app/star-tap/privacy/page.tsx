import type { Metadata } from "next";

// Star Tap's privacy policy. Its URL is registered in Play Console (privacy policy) and AdMob
// (the GDPR message). Whenever what the game stores, sends or asks for changes, update this
// page and its date.
export const metadata: Metadata = {
  title: "Star Tap — Privacy Policy",
  description: "What information Star Tap handles, who else receives it, and what you can do about it.",
  alternates: { canonical: "/star-tap/privacy" },
};

export default function StarTapPrivacy() {
  return (
    <main>
      <h1>Privacy Policy — Star Tap</h1>
      <p className="meta">Last updated: 2 September 2026</p>

      <p className="lead">
        Star Tap is a mobile game published by Millwater Games. This policy explains
        what information the game handles, who else receives it, and what you can do
        about it.
      </p>

      <h2>The short version</h2>
      <p>
        Star Tap has no servers of its own and no account system. We do not collect,
        receive or store your personal information. Your scores, progress and settings
        are saved on your own device, and optionally to your own Google account.
      </p>
      <p>
        The game does include Google services — advertising, in-app purchases and Play
        Games — and those services collect data under Google's own privacy policy. That
        is described below.
      </p>

      <h2>What the game stores on your device</h2>
      <p>
        A single save file on your device holds your game progress: high scores, level
        stars, combos, in-game currencies (coins and Star Dust), unlocked modes,
        cosmetic items, daily and weekly quest progress, achievement claims, lifetime
        play statistics, and your sound and music settings.
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
            <td>Your purchases. Payment details are handled entirely by Google — the game
              never sees a card number. The game stores only a purchase receipt
              identifier and a flag recording what you own.</td>
            <td>To sell and restore optional in-app purchases, such as removing ads.</td>
          </tr>
          <tr>
            <td><strong>Google Play Games Services</strong></td>
            <td>Your Play Games player identifier, leaderboard scores, achievements, and
              a backup copy of your save file stored in your own Google Drive
              application-data folder.</td>
            <td>To sync progress between your devices and to run leaderboards and
              achievements. This is optional and depends on you signing in to Play
              Games.</td>
          </tr>
        </tbody>
      </table>

      <p>
        All three are operated by Google, and their handling of the data is governed by
        the <a href="https://policies.google.com/privacy">Google Privacy Policy</a>. For
        advertising specifically, see{" "}
        <a href="https://support.google.com/admob/answer/6128543">how Google uses data from apps that use its services</a>.
      </p>

      <h2>Advertising and your consent</h2>
      <p>
        The game shows ads in three places: a banner on the title screen, an
        occasional full-screen ad between runs, and optional videos you choose to watch
        in exchange for a bonus. There are no ads during gameplay.
      </p>
      <p>
        If you are in the European Economic Area, the United Kingdom or Switzerland, the
        game asks for your consent before any personalised advertising, using Google's
        consent form. If you do not give consent, personalised ads are not requested.
      </p>
      <p>
        <strong>You can change your choice at any time</strong> using the{" "}
        <strong>PRIVACY</strong> button on the game's title screen, which reopens the
        same consent form. You can also reset your Advertising ID, or opt out of ad
        personalisation entirely, in your device settings under{" "}
        <em>Settings → Google → Ads</em>.
      </p>

      <h2>Analytics</h2>
      <p>
        The game reports anonymous, aggregate gameplay counters to Google Play Games —
        for example, how many times a game mode was played, or how often a particular
        level was completed. These are totals across all players. They are not linked to
        you, and we cannot see any individual player's activity in them. We use them
        only to judge whether the game's difficulty is fair.
      </p>
      <p>
        The game contains no third-party analytics, advertising-attribution or crash
        reporting software beyond the Google services listed above.
      </p>

      <h2>Permissions</h2>
      <p>
        Star Tap requests internet and network-state access so ads, purchases and Play
        Games can work. The remaining permissions in the app — including the advertising
        ID permission and Google's Privacy Sandbox permissions — are added automatically
        by the Google advertising and Play Services libraries. The game does not request
        access to your location, camera, microphone, contacts, photos or files.
      </p>

      <h2>Children</h2>
      <p>
        Star Tap is not directed at children. It is intended for players aged 13 and
        over, and we do not knowingly collect information from children under 13. If you
        believe a child has provided information through this app, please contact us and
        we will help you address it.
      </p>

      <h2>Keeping and deleting your data</h2>
      <ul>
        <li><strong>On your device:</strong> uninstall the game, or clear its storage in your device's app settings.</li>
        <li><strong>In Google Play Games:</strong> delete the game's saved data and remove it from your Play Games profile at{" "}
          <a href="https://play.google.com/games">play.google.com/games</a>.</li>
        <li><strong>Advertising:</strong> reset or delete your Advertising ID in your device settings, and manage what Google holds at{" "}
          <a href="https://myadcenter.google.com">myadcenter.google.com</a>.</li>
        <li><strong>Purchases:</strong> your purchase history is held by Google Play and managed through your Google account.</li>
      </ul>
      <p>
        Because we hold no data about you ourselves, requests to access, correct, export
        or delete personal data are handled through Google, using the links above. If you
        are unsure where to start, contact us and we will point you to the right place.
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
        <a href="/star-tap">Star Tap</a> · <a href="/">Millwater Games</a>
      </footer>
    </main>
  );
}
