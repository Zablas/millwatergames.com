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
        Games, which is described below.
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

      <h2>Google Play Games on Android</h2>
      <table>
        <thead>
          <tr>
            <th>What it handles</th>
            <th>Why</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Your Play Games player identifier, earned achievements, and a copy of your
              game progress kept in your Play Games saved games.</td>
            <td>To keep your progress across devices and record achievements. This happens
              only if you connect Play Games and choose it in the game.</td>
          </tr>
        </tbody>
      </table>
      <p>
        Photos, device preferences and purchase records are not included in cloud saves.
        Play Games is operated by Google under the{" "}
        <a href="https://policies.google.com/privacy">Google Privacy Policy</a>.
      </p>

      <h2>Advertising and purchases</h2>
      <p>
        This version of the game shows no ads and sells nothing. If that changes, this
        policy will be updated first.
      </p>

      <h2>Analytics</h2>
      <p>
        The game contains no third-party analytics, advertising-attribution or crash
        reporting software.
      </p>

      <h2>Permissions</h2>
      <p>
        On Android the game asks for vibration, which you can switch off in Settings. Any
        network permission in the Android app comes from Google's Play Games library. The
        game does not request access to your location, camera, microphone or contacts. On
        iPhone the only permission it can ask for is adding a photo to Photos, when you
        choose to save one.
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
      </ul>
      <p>
        Because we hold no data about you ourselves, requests to access, correct, export
        or delete personal data are handled through Google, using the link above. If you
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
