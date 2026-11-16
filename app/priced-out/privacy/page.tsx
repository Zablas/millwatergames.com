import type { Metadata } from "next";

// Priced Out's privacy policy. Its URL is registered in Play Console (privacy policy), AdMob
// (the GDPR message) and Google Cloud (the Play Games consent screen's privacy policy link), and
// the game itself links to it from Settings → Privacy. #delete is its Data safety deletion link.
// Its source of truth is the game's repo (Documents/AppThatWillBuyMeAHouse, site/), which also
// keeps the shorter in-game version in step. Whenever what the game stores, sends or asks for
// changes, update this page and its date.
export const metadata: Metadata = {
  title: "Priced Out — Privacy Policy",
  description: "What information Priced Out handles, who else receives it, and what you can do about it.",
  alternates: { canonical: "/priced-out/privacy" },
};

export default function PricedOutPrivacy() {
  return (
    <main>
      <h1>Privacy Policy — Priced Out</h1>
      <p className="meta">Last updated: 16 November 2026</p>

      <p className="lead">
        Priced Out is a mobile game published by Millwater Games. This policy explains what
        information the game handles, who else receives it, and what you can do about it.
      </p>

      <h2>The short version</h2>
      <p>
        Priced Out has no servers of its own and no account system. We do not collect, receive or
        store your personal information. Your game is saved on your own device, and optionally to
        your own Google Play Games account (on Android) or your own iCloud through Game Center (on
        iPhone).
      </p>
      <p>
        The game does include outside services: advertising, in-app purchases, and Play Games on
        Android or Game Center on iPhone. Those services collect data under their own privacy
        policies, as described below.
      </p>

      <h2>What the game stores on your device</h2>
      <p>
        The game saves itself as you play, in its own storage on your device. The save holds your
        game: money, side hustles, upgrades, property, city, skills, achievements, statistics, the
        boosts running, and your settings for the look, sound, vibration and reminders. It also
        records which one-off purchases you own, and the receipt identifiers of the windfalls already
        paid out, so that no purchase is granted twice.
      </p>
      <p>
        It contains no name, no email address, no phone number, no location, no contacts and no
        photos. Uninstalling the game deletes it. If your device's own backup is switched on
        (Google's on Android, iCloud on an iPhone), your device may include the save in that backup,
        as it does for other apps; that copy is yours, and we never receive it.
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
            <td>Advertising ID and similar device identifiers, device and app information, IP
              address (which gives a rough location, never a street address), how you interact with
              ads, and diagnostics.</td>
            <td>To show ads, measure them, and prevent fraud. This is the only part of the game that
              involves advertising data.</td>
          </tr>
          <tr>
            <td><strong>Google Play Billing</strong></td>
            <td>Your purchases. Payment details are handled entirely by Google: the game never sees a
              card number, your name or your address. It is told only that a purchase went
              through.</td>
            <td>To sell and restore the optional in-app purchases.</td>
          </tr>
          <tr>
            <td><strong>Google Play Games Services</strong></td>
            <td>Your Play Games player identifier and player name, and a copy of your save, kept in
              the hidden application-data folder of your own Google Drive. Play Games also collects
              analytics and diagnostics of its own.</td>
            <td>Cloud save: so your game can follow you to a new device. This is optional and
              depends on you signing in to Play Games; the game works the same without it.</td>
          </tr>
        </tbody>
      </table>

      <p>
        All three are operated by Google, and their handling of the data is governed by the{" "}
        <a href="https://policies.google.com/privacy">Google Privacy Policy</a>. For advertising
        specifically, see{" "}
        <a href="https://policies.google.com/technologies/partner-sites">how Google uses information from sites or apps that use its services</a>.
      </p>

      <h2>Services used in the game on iPhone</h2>
      <p>
        An iPhone version is planned. When it is available, it uses these services in place of the
        ones above.
      </p>

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
            <td>Device and app information, IP address, how you interact with ads, and diagnostics.
              The game asks your permission, through Apple's tracking prompt, before the ads may
              use your advertising identifier; if you decline, they cannot.</td>
            <td>To show ads, measure them, and prevent fraud.</td>
          </tr>
          <tr>
            <td><strong>App Store purchases</strong> (Apple)</td>
            <td>Your purchases. Payment details are handled entirely by Apple: the game never sees
              them.</td>
            <td>To sell and restore the optional in-app purchases.</td>
          </tr>
          <tr>
            <td><strong>Game Center</strong> (Apple)</td>
            <td>Your Game Center player identifier and name, and a copy of your save kept as a Game
              Center saved game in your own iCloud.</td>
            <td>Cloud save: so your game can follow you to a new device. This depends on you being
              signed in to Game Center and iCloud.</td>
          </tr>
        </tbody>
      </table>

      <p>
        Google's handling of the data is governed by the{" "}
        <a href="https://policies.google.com/privacy">Google Privacy Policy</a>, and Apple's by the{" "}
        <a href="https://www.apple.com/legal/privacy/">Apple Privacy Policy</a>.
      </p>

      <h2>Advertising and your consent</h2>
      <p>
        The game shows two kinds of ad: optional videos you choose to watch in exchange for a boost,
        and an occasional full-screen ad between screens, never in your first ten minutes of play and
        at most one every five minutes. There are no banners. The game asks only for ads rated
        suitable for teenagers.
      </p>
      <p>
        If you are in the European Economic Area, the United Kingdom or Switzerland, the game asks
        for your consent before any personalised advertising, using Google's consent form. If you do
        not give consent, you still see ads, but they are not based on a profile of you. Players in
        US states with privacy laws can likewise opt out of the sale or sharing of their information
        for advertising.
      </p>
      <p>
        <strong>You can change your choice at any time</strong> in the game: open{" "}
        <strong>Settings</strong> on the Home screen, then <strong>Ad privacy choices</strong>,
        shown wherever these laws apply, which reopens the same form. On Android you can also reset
        or delete your Advertising ID in your device settings under{" "}
        <em>Settings → Google → Ads</em> (on some devices, <em>Settings → Privacy → Ads</em>).
      </p>

      <h2>Legal basis</h2>
      <p>
        Where European data protection law applies, personalised advertising relies on your
        consent, which you can withdraw as described above. Showing non-personalised ads, measuring
        them and preventing fraud rely on legitimate interests: paying for a game that is free to
        play. Cloud save relies on providing the feature you chose to use by signing in.
      </p>

      <h2>Analytics</h2>
      <p>
        The game sends no analytics of its own, and contains no third-party analytics,
        advertising-attribution or crash-reporting software beyond the services listed above.
      </p>

      <h2>Reminders and sharing</h2>
      <p>
        If you switch reminders on, your device itself schedules a notification for when your away
        earnings stop growing. Nothing is sent to anyone. If you tap a share button, the game hands a
        picture or a line of text to the app you pick; what happens next is up to that app.
      </p>

      <h2>Permissions</h2>
      <p>
        Priced Out requests internet and network-state access so ads, purchases and Play Games can
        work; permission to send notifications, asked only when you switch reminders on; permission
        to run at start-up, so a reminder already scheduled survives a restart of your device; and
        vibration for the small tap on each shift, which you can switch off in Settings. The
        remaining permissions in the app, including the advertising ID permission and Google's
        Privacy Sandbox permissions, are added automatically by the Google advertising and Play
        Services libraries. The game does not request access to your location, camera, microphone,
        contacts, photos or files.
      </p>

      <h2>Children</h2>
      <p>
        Priced Out is made for adults. It is not directed at children, and we do not knowingly
        collect information from children. If you believe a child has provided information through
        this app, please contact us and we will help you address it.
      </p>

      <h2 id="delete">Keeping and deleting your data</h2>
      <ul>
        <li><strong>On your device:</strong> uninstall the game, or clear its storage in your device's app settings. To start the game again from nothing without uninstalling, use <em>Settings → Start over</em> in the game, which also replaces your cloud save.</li>
        <li><strong>In Google Play Games:</strong> delete the game's saved data, and remove it from your Play Games profile, at{" "}<a href="https://play.google.com/games">play.google.com/games</a>.</li>
        <li><strong>Advertising:</strong> reset or delete your Advertising ID in your device settings, and manage what Google holds at{" "}<a href="https://myadcenter.google.com">myadcenter.google.com</a>.</li>
        <li><strong>In Game Center and iCloud:</strong> delete the game's saved game from your iCloud storage in your iPhone's Settings, and manage your Game Center profile under <em>Settings → Game Center</em>.</li>
        <li><strong>Purchases:</strong> your purchase history is held by Google Play and managed through your Google account, or on iPhone by the App Store and your Apple Account.</li>
      </ul>
      <p>
        Because we hold no data about you ourselves, requests to access, correct, export or delete
        personal data are handled through Google or Apple, using the links above. If you are unsure
        where to start, contact us and we will point you to the right place.
      </p>

      <h2>Your rights</h2>
      <p>
        If you are in the European Economic Area or the United Kingdom, the GDPR gives you rights
        over your personal data, including access, correction, erasure, restriction, portability and
        objection, and the right to withdraw consent at any time. As we hold no personal data
        ourselves, these rights are exercised against Google or Apple as the controller of the data
        described above. You also have the right to complain to your national data protection
        authority.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        If this policy changes, the updated version will be posted at this address with a new date
        at the top.
      </p>

      <h2>Contact</h2>
      <p>
        Millwater Games<br />
        <a href="mailto:millwatergames@gmail.com">millwatergames@gmail.com</a>
      </p>

      <footer>
        <a href="/priced-out">Priced Out</a> · <a href="/">Millwater Games</a>
      </footer>
    </main>
  );
}
