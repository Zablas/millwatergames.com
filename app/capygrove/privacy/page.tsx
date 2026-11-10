import type { Metadata } from "next";

// Whenever what CapyGrove stores, sends or asks for changes, update this page and its date.
export const metadata: Metadata = {
  title: "CapyGrove — Privacy Policy",
  description: "What information CapyGrove handles, who else receives it, what you can do about it, and the game's sound and font credits.",
  alternates: { canonical: "/capygrove/privacy" },
};

export default function CapyGrovePrivacy() {
  return (
    <main>
      <h1>Privacy Policy &mdash; CapyGrove</h1>
      <p className="meta">Last updated: 10 November 2026</p>

      <p className="lead">
        CapyGrove is a mobile game published by Millwater Games. This policy explains
        what information the game handles, who else receives it, and what you can do
        about it. The game's sound and font credits are at the end of this page.
      </p>

      <h2>The short version</h2>
      <p>
        CapyGrove has no servers of its own and no account system. We do not collect,
        receive or store your personal information. Your progress, photos and settings
        are saved on your own device. On Android you can choose to connect Google Play
        Games.
      </p>
      <p>
        The game does include outside services: advertising, in-app purchases, and Play
        Games on Android or Game Center on iPhone. Those services collect data under
        their own privacy policies, as described below.
      </p>

      <h2>What the game stores on your device</h2>
      <p>
        The game's save files hold your puzzle, story and daily progress, coins and
        lives, your capybara's looks, your My home layout, and your preferences such as
        style, grid, vibrations and sound levels. They save automatically. Photos you
        take in My home are stored inside the game.
      </p>
      <p>
        These files contain no name, no email address, no phone number, no location and
        no contacts. Uninstalling the game deletes them.
      </p>

      <h2>Your photos</h2>
      <p>
        Photos stay inside the game unless you choose to save one to your phone's
        gallery. On iPhone the game then asks for permission to add it to Photos; it
        cannot read your existing photos. Photos are never uploaded by the game.
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
            <td>Your purchases. Payment details are handled entirely by Google; the game
              never sees a card number. The game keeps only a record of what you own and a
              one-way fingerprint of the purchase, so it can be restored.</td>
            <td>To sell and restore the optional Premium purchase.</td>
          </tr>
          <tr>
            <td><strong>Google Play Games Services</strong></td>
            <td>Your Play Games player identifier, earned achievements, and a copy of your
              game progress kept in your Play Games saved games.</td>
            <td>To keep your progress across devices and record achievements. This happens
              only if you connect Play Games and choose it in the game.</td>
          </tr>
        </tbody>
      </table>
      <p>
        Photos, device preferences and purchase records are not included in cloud saves.
        All three services are operated by Google, and their handling of the data is
        governed by the{" "}
        <a href="https://policies.google.com/privacy">Google Privacy Policy</a>. For
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
            <td>Device and app information, IP address, and how you interact with ads. The
              game never asks for permission to track you, so the ads have no access to
              your advertising identifier.</td>
            <td>To show ads, measure them, and prevent fraud. This is the only part of the
              game that involves advertising data.</td>
          </tr>
          <tr>
            <td><strong>App Store purchases</strong> (Apple)</td>
            <td>Your purchases. Payment details are handled entirely by Apple; the game
              never sees them. The game keeps only a record of what you own and a reference
              to the purchase, so it can be restored.</td>
            <td>To sell and restore the optional Premium purchase.</td>
          </tr>
          <tr>
            <td><strong>Game Center</strong> (Apple)</td>
            <td>Your Game Center player identifier and earned achievements.</td>
            <td>To record achievements. This depends on you being signed in to Game
              Center.</td>
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
        The game shows two kinds of ad: an occasional full-screen ad after you finish a
        level, and optional videos you choose to watch for extra coins, lives or hints.
        There are no banner ads and no ads during a puzzle.
      </p>
      <p>
        If you are in the European Economic Area, the United Kingdom or Switzerland, the
        game asks for your consent before any personalised advertising, using Google's
        consent form. If you do not give consent, personalised ads are not requested.
      </p>
      <p>
        <strong>You can change your choice at any time</strong> using the{" "}
        <strong>Privacy options</strong> button in the game's Settings, shown wherever the
        consent form applies, which reopens the same form. On Android you can also reset your Advertising ID, or opt out of
        ad personalisation entirely, in your device settings under{" "}
        <em>Settings &rarr; Google &rarr; Ads</em>. On iPhone the game has no access to your
        advertising identifier.
      </p>

      <h2>In-app purchases</h2>
      <p>
        CapyGrove offers one optional purchase, Premium, bought once. It removes all ads
        and gives unlimited lives and hints. Coins cannot be bought with money; every coin
        is earned in play. Purchases are made through Google Play on Android and the App
        Store on iPhone, as described above.
      </p>

      <h2>Analytics</h2>
      <p>
        The game contains no third-party analytics, advertising-attribution or crash
        reporting software beyond the services listed above.
      </p>

      <h2>Permissions</h2>
      <p>
        On Android, CapyGrove requests internet and network-state access so ads,
        purchases and Play Games can work, and vibration, which you can switch off in
        Settings. The remaining permissions in the app, including the advertising ID
        permission and Google's Privacy Sandbox permissions, are added automatically by
        the Google advertising and Play Services libraries. The game does not request
        access to your location, camera, microphone or contacts. On iPhone the only
        permission it can ask for is adding a photo to Photos, when you choose to save
        one.
      </p>

      <h2>Children</h2>
      <p>
        CapyGrove is not directed at children under 13, and we do not knowingly collect
        information from them. If you believe a child has provided information through
        this app, please contact us and we will help you address it.
      </p>

      <h2>Keeping and deleting your data</h2>
      <ul>
        <li><strong>On your device:</strong> uninstall the game, or clear its storage in your device's app settings. Photos you saved to your gallery stay there until you delete them.</li>
        <li><strong>In Google Play Games:</strong> delete the game's saved data and remove it from your Play Games profile at{" "}
          <a href="https://play.google.com/games">play.google.com/games</a>.</li>
        <li><strong>Advertising:</strong> reset or delete your Advertising ID in your device settings, and manage what Google holds at{" "}
          <a href="https://myadcenter.google.com">myadcenter.google.com</a>.</li>
        <li><strong>In Game Center:</strong> manage your Game Center profile under <em>Settings &rarr; Game Center</em> on your iPhone.</li>
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

      <h2>Sound credits</h2>
      <p>
        CapyGrove's lakeside soundscape uses these recordings, each licensed under{" "}
        <a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 (CC BY 4.0)</a>:
      </p>
      <ul>
        <li>
          <a href="https://freesound.org/people/Funkelfang/sounds/851178/">Detailed Beach Ambiance: Lapping Baltic Tide</a>{" "}
          by Funkelfang, of Freesound.org; looped, tamed and level-adjusted.
        </li>
        <li>
          <a href="https://freesound.org/s/456440/">Bird Whistling, Robin, Single, 13</a> and{" "}
          <a href="https://freesound.org/s/416529/">Bird Whistling, Single, Robin, A</a>{" "}
          by InspectorJ (<a href="https://www.jshaw.co.uk">www.jshaw.co.uk</a>), of Freesound.org; sliced and level-adjusted.
        </li>
        <li>
          <a href="https://freesound.org/s/122055/">Frogs in June</a>{" "}
          by juskiddink, of Freesound.org; sliced and level-adjusted.
        </li>
        <li>
          <a href="https://freesound.org/people/dobroide/sounds/27816/">20061224.wind.canaveral</a>{" "}
          by dobroide, of Freesound.org; sliced and level-adjusted.
        </li>
      </ul>
      <p>
        Vibraphone samples: University of Iowa Electronic Music Studios,{" "}
        <a href="https://theremin.music.uiowa.edu/Misvibraphone.html">Musical Instrument Samples</a>.
      </p>

      <h2>Font credits</h2>
      <p>
        <a href="https://github.com/huertatipografica/Alegreya-Sans">Alegreya Sans</a> by Huerta Tipografica,
        Copyright 2013 The Alegreya Sans Project Authors, licensed under the{" "}
        <a href="http://scripts.sil.org/OFL">SIL Open Font License, Version 1.1</a>.
      </p>

      <footer>
        <a href="/">Millwater Games</a>
      </footer>
    </main>
  );
}
