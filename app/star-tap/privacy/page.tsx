import type { Metadata } from "next";

// Star Tap's privacy policy. Its URL is registered in Play Console (privacy policy), AdMob
// (the GDPR message) and App Store Connect (App Information > Privacy Policy URL).
// Whenever what the game stores, sends or asks for changes, update this page and its date.
export const metadata: Metadata = {
  title: "Star Tap — Privacy Policy",
  description: "What information Star Tap handles, who else receives it, and what you can do about it.",
  alternates: { canonical: "/star-tap/privacy" },
};

export default function StarTapPrivacy() {
  return (
    <main>
      <h1>Privacy Policy — Star Tap</h1>
      <p className="meta">Last updated: 23 November 2026</p>

      <p className="lead">
        Star Tap is a mobile game published by Millwater Games. This policy explains
        what information the game handles, who else receives it, and what you can do
        about it.
      </p>

      <h2>The short version</h2>
      <p>
        Star Tap has no servers of its own and no account system. We do not collect,
        receive or store your personal information. Your scores, progress and settings
        are saved on your own device, and optionally to your own Google account (on
        Android) or your own iCloud (on iPhone).
      </p>
      <p>
        The game does include outside services — advertising, in-app purchases, and Play
        Games on Android or Game Center on iPhone — and those services collect data under
        their own privacy policies. That is described below.
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

      <h2>Google services used in the game on Android</h2>

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

      <h2>Services used in the game on iPhone</h2>

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
            <td><strong>Google AdMob</strong> (Google)</td>
            <td>Device and app information, IP address, and how you interact with ads, and your
              advertising identifier only if you allow the game to track you (see below).</td>
            <td>To show ads, measure them, and prevent fraud. This is the only part of the game
              that involves advertising data.</td>
          </tr>
          <tr>
            <td><strong>App Store purchases</strong> (Apple)</td>
            <td>Your purchases. Payment details are handled entirely by Apple — the game never
              sees them. The game's save file keeps each purchase's transaction identifier
              and what it bought: Remove Ads, Unlimited Energy, energy and Star Dust.</td>
            <td>To sell and restore optional in-app purchases, such as removing ads.</td>
          </tr>
          <tr>
            <td><strong>Game Center</strong> (Apple)</td>
            <td>Your Game Center player identifier, leaderboard scores, achievements, and a
              backup copy of your save file kept as a Game Center saved game in your own
              iCloud.</td>
            <td>To sync progress between your devices and to run leaderboards and achievements.
              This depends on you being signed in to Game Center.</td>
          </tr>
        </tbody>
      </table>

      <p>
        Google's handling of the data is governed by the{" "}
        <a href="https://policies.google.com/privacy">Google Privacy Policy</a>, and Apple's by the{" "}
        <a href="https://www.apple.com/legal/privacy/">Apple Privacy Policy</a>.
      </p>
      <p>
        These are the only third parties the game shares data with. Each receives it only
        for the purposes listed above, under its own privacy policy, which provides the same
        or equal protection of your data as this policy.
      </p>

      <h2>Advertising and your consent</h2>
      <p>
        The game shows three kinds of ad: a banner on the title screen and on the
        results screen after a run, an occasional full-screen ad between runs, and
        optional videos you choose to watch in exchange for a bonus. There are no ads
        during gameplay.
      </p>
      <p>
        If you are in the European Economic Area, the United Kingdom or Switzerland, the
        game asks for your consent before any personalised advertising, using Google's
        consent form. If you do not give consent, personalised ads are not requested.
      </p>
      <p>
        <strong>You can change your choice at any time</strong> using the{" "}
        <strong>PRIVACY</strong> button on the game's title screen, shown wherever the
        consent form applies, which reopens the same form. On Android you can also reset your Advertising ID, or opt out of
        ad personalisation entirely, in your device settings under{" "}
        <em>Settings → Google → Ads</em>.
      </p>
      <p>
        On iPhone the game asks whether it may track you (Apple's App Tracking Transparency), after Google's consent form where that applies. If you allow it, Google's Mobile Ads SDK also receives your device's advertising identifier and may use it to personalise ads; if you ask the game not to track, it does not receive it, and the ads are shown without it. The game is the same either way. You can change your answer at any time in your iPhone's <em>Settings → Privacy &amp; Security → Tracking</em>.
      </p>

      <h2>Your age range</h2>
      <p>
        Where a law requires app stores to share an age range with apps, such as in Texas,
        the game asks the store for your age range: on iPhone through Apple&apos;s Declared
        Age Range feature, and on Android through Google Play&apos;s Age Signals feature. The
        store decides when this applies, and Apple may ask you, or a parent or guardian,
        whether to share it. The game receives only a range, such as &quot;13 to 15&quot; or
        &quot;18 or over&quot;, and whether that range was declared or verified, never your
        date of birth.
      </p>
      <p>
        The game uses the range to choose age-appropriate settings before any ad is
        requested. If you are under 13, or your age is not shared where the law applies,
        ads are requested as directed to a child, with no personalised advertising and only
        content suitable for all ages. If you are 13 to 17, ads are requested as for a user
        under the age of consent, which asks Google not to personalise them. Google&apos;s
        Mobile Ads SDK receives only these settings, not your age range. On Android, the
        same answer also switches off the gameplay counters described under{" "}
        <em>Analytics</em> for anyone under 18 or whose age is not shared.
      </p>
      <p>
        The game does not store your age range, does not send it to us or to anyone else,
        and asks the store again each time it starts. Where no such law applies, the game
        does not ask, and it uses its usual settings.
      </p>

      <h2>Analytics</h2>
      <p>
        On Android, the game reports anonymous, aggregate gameplay counters to Google Play Games —
        for example, how many times a game mode was played, or how often a particular
        level was completed. These are totals across all players. They are not linked to
        you, and we cannot see any individual player's activity in them. We use them
        only to judge whether the game's difficulty is fair. Where an age law applies, the
        counters are sent only once the store has said you are 18 or over (see{" "}
        <em>Your age range</em>). On iPhone the game sends no gameplay counters at all.
      </p>
      <p>
        The game contains no third-party analytics, advertising-attribution or crash
        reporting software beyond the services listed above.
      </p>

      <h2>Permissions</h2>
      <p>
        Star Tap requests internet and network-state access so ads, purchases and Play
        Games can work, and vibration for the short tick when you pop an orb, which you
        can switch off in SETTINGS. The remaining permissions in the app — including the advertising
        ID permission and Google's Privacy Sandbox permissions — are added automatically
        by the Google advertising and Play Services libraries. The game does not request
        access to your location, camera, microphone, contacts, photos or files. On iPhone
        the only permission the game asks for is whether it may track you for ads.
      </p>

      <h2>Children</h2>
      <p>
        Star Tap is a general-audience game. It is not directed at children under 13, and
        we do not knowingly collect personal information from children under 13. If you
        believe a child has provided information through this app, please contact us and
        we will help you address it. Where the App Store or Google Play tells the game a
        player is under 13, the game applies the child settings described under{" "}
        <em>Your age range</em>.
      </p>

      <h2>Keeping and deleting your data</h2>
      <ul>
        <li><strong>On your device:</strong> uninstall the game, or clear its storage in your device's app settings.</li>
        <li><strong>In Google Play Games:</strong> delete the game's saved data and remove it from your Play Games profile at{" "}
          <a href="https://play.google.com/games">play.google.com/games</a>.</li>
        <li><strong>Advertising:</strong> reset or delete your Advertising ID in your device settings, and manage what Google holds at{" "}
          <a href="https://myadcenter.google.com">myadcenter.google.com</a>. On iPhone, turn tracking off for Star Tap in <em>Settings → Privacy &amp; Security → Tracking</em>.</li>
        <li><strong>In Game Center and iCloud:</strong> delete the game's saved game from your iCloud storage in your iPhone's Settings, and manage your Game Center profile under <em>Settings → Game Center</em>.</li>
        <li><strong>Purchases:</strong> your purchase history is held by Google Play and managed through your Google account, or on iPhone by the App Store and your Apple Account.</li>
      </ul>
      <p>
        Because we hold no data about you ourselves, requests to access, correct, export
        or delete personal data are handled through Google or Apple, using the links above. If you
        are unsure where to start, contact us and we will point you to the right place.
      </p>

      <h2>Your rights</h2>
      <p>
        If you are in the European Economic Area or the United Kingdom, the GDPR gives
        you rights over your personal data, including access, correction, erasure,
        restriction, portability and objection, and the right to withdraw consent at any
        time. As we hold no personal data ourselves, these rights are exercised against
        Google or Apple as the controller of the data described above. You also have the right to
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
