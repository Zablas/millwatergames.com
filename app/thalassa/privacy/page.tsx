import type { Metadata } from "next";

// Thalassa's privacy policy. Its URL is registered in Google Cloud (OAuth branding), Play Console
// (privacy policy; Data safety's delete-account URL is #delete), AdMob (the GDPR message), Epic's
// brand settings and App Store Connect (the app's privacy policy URL).
// Whenever what the game stores, sends or asks for changes, update this page and its date.
export const metadata: Metadata = {
  title: "Thalassa — Privacy Policy",
  description: "How Thalassa captures, uses, shares and keeps information, and what you can do about it.",
  alternates: { canonical: "/thalassa/privacy" },
};

export default function ThalassaPrivacy() {
  return (
    <main>
      <h1>Privacy Policy — Thalassa</h1>
      <p className="meta">Last updated: 1 November 2026</p>

      <p className="lead">
        Thalassa is a mobile strategy game for Android and iPhone, published by Millwater Games. This
        policy explains what information the game captures, how it is used, who it is shared with, how
        long it is kept, and what you can do about it. Where the game works differently on Android and
        on iPhone, this policy says so.
      </p>

      <h2>The short version</h2>
      <p>
        The game has no servers of its own. On Android, to learn how it runs on different devices, it
        sends Google measurements of how long it takes to load and how smoothly it plays, with no
        account or advertising identifier. It shows ads, served by Google AdMob, until
        you buy <strong>Remove ads</strong> on Google Play or the App Store. Where the law asks for it
        (the European Economic Area, the United Kingdom and Switzerland), Google asks your consent
        before ads are personalised. On iPhone the game never asks to track you.
      </p>
      <p>
        If you use <strong>Google Play Games</strong> on Android, your achievements and your saved games
        are kept in your Google account, so they follow you to another device. On iPhone,{" "}
        <strong>Game Center</strong> keeps your achievements with your Apple Account.
      </p>
      <p>
        When you <strong>sail together</strong> (play with other people), you sign in with your
        Google account on Android or your Apple Account on iPhone, and the game uses Epic Online
        Services, run by Epic Games, to find the other players and connect to them. Google or Apple,
        Epic and the players in your game then receive the information described below. We never sell
        it.
      </p>

      <h2>How information is captured</h2>
      <p>
        Millwater Games has no servers, and the game sends us nothing. Information is captured in these
        ways:
      </p>
      <ul>
        <li><strong>What you type or choose:</strong> your captain's name; in a harbour, the people you
          play and whether you are ready, and, if you host, the world, the rivals, the round timer and
          whether the harbour is open to all; and anything you write to us by email.</li>
        <li><strong>What the game records as you play:</strong> your saved games, your settings, your
          progress through The First Voyage, the tips you have seen, the achievements you have earned and,
          when you play together, your moves.</li>
        <li><strong>What Google or Apple gives the game when you sign in:</strong> on Android, with{" "}
          <em>Sign in with Google</em>, a sign-in token that identifies your Google account and includes
          your name, email address and a link to your profile picture, and with Google Play Games,
          whether you are signed in, and this game's achievements and saved games; on iPhone, with{" "}
          <em>Sign in with Apple</em>, a sign-in token that identifies your Apple Account (the game does
          not ask for your email address) and, the first time you sign in, the name you choose to share,
          and with Game Center, whether you are signed in.</li>
        <li><strong>What is gathered automatically from your device:</strong>
          <ul>
            <li>by Google's Mobile Ads SDK (AdMob), until you buy Remove ads: your advertising ID (on
              Android only), your IP address, information about your device and the app, and how you
              interact with the ads;</li>
            <li>by Google's Android Performance Tuner, on Android: how long the game takes to start, to
              load a voyage and to draw its frames, with your device's model, Android version and
              memory;</li>
            <li>by Epic Online Services, while you play together: your IP address, to connect you; your
              device's model name, when Epic creates an anonymous ID for your device (always on iPhone,
              where that ID renews your sign-in; on Android only when the game signs in with that ID
              instead of Google); and how its services perform and are used;</li>
            <li>by Google Play, on Android: whether Remove ads is owned on your Google account, and
              whether a newer version of the game is available;</li>
            <li>by the App Store, on iPhone: whether you own Remove ads, when you buy it or restore your
              purchases, and whether a newer version of the game is available.</li>
          </ul>
        </li>
      </ul>

      <h2>How information is used</h2>
      <ul>
        <li><strong>To play:</strong> your saved games, settings and progress let you go on where you left
          off; your captain's name, your harbour choices and your moves let you play with other people;
          your Thalassa account ID at Epic recognises you, so you keep your seat when you come back to a
          voyage.</li>
        <li><strong>To sign you in:</strong> the Google or Apple sign-in token is passed to Epic Online
          Services, which checks it and signs you in to your Thalassa account; your first name is
          suggested as your captain's name, which you can change at any time. On iPhone, your device's
          anonymous ID is linked to the same account, so the game can renew your sign-in without asking
          Apple again.</li>
        <li><strong>To keep your progress across devices:</strong> Google Play Games keeps your
          achievements and saved games in your Google account; on iPhone, Game Center keeps your
          achievements.</li>
        <li><strong>To show ads:</strong> AdMob uses its information to serve, measure and protect ads.
          Where the law asks for it, ads are personalised only with your consent.</li>
        <li><strong>To honour Remove ads:</strong> the game hides the ads once Google Play or the App
          Store says you own it.</li>
        <li><strong>To keep the game up to date:</strong> everyone playing together needs the newest
          version.</li>
        <li><strong>To make the game run better:</strong> on Android, we see the performance
          measurements only as statistics per device model in Google Play Console.</li>
        <li><strong>To answer you</strong> when you email us.</li>
      </ul>
      <p>
        We never sell information, and information from Google or Apple sign-in is never used for
        advertising.
      </p>

      <h2>How information is shared</h2>
      <table>
        <thead>
          <tr><th>Who receives it</th><th>What</th><th>Why</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Epic Games</strong> (Epic Online Services, working for the game)</td>
            <td>The Google or Apple sign-in token, your Thalassa account ID and captain's name, your
              device's anonymous ID and model name when Epic creates that ID, your harbour's details,
              your moves and the game sent between players, how its services perform and are used, and
              your IP address.</td>
            <td>To sign you in, to gather the captains of a voyage and to connect your devices, directly
              or through Epic's relay servers.</td>
          </tr>
          <tr>
            <td><strong>Google</strong></td>
            <td>What each of its services in the game needs: your sign-in (Sign in with Google), your
              achievements and saved games (Play Games), the advertising information above (AdMob, on
              iPhone too), the purchase of Remove ads and the update check (Google Play), and the
              performance measurements (Android Performance Tuner).</td>
            <td>To provide those services.</td>
          </tr>
          <tr>
            <td><strong>Apple</strong> (on iPhone)</td>
            <td>What each of its services in the game needs: your sign-in (Sign in with Apple), your
              achievements and your progress toward them (Game Center), the purchase of Remove ads (the
              App Store), and the update check, with your device's country and IP address (the App
              Store's public lookup).</td>
            <td>To provide those services.</td>
          </tr>
          <tr>
            <td><strong>The other players in your voyage</strong></td>
            <td>Your captain's name, your people, whether you are ready, everything that happens in the
              game, your moves included, and, when your devices connect directly, your IP address. If you
              host a voyage open to all, players of the same version also see your captain's name and
              your harbour in the list of open voyages.</td>
            <td>To play together.</td>
          </tr>
        </tbody>
      </table>
      <p>
        No one else receives it. Epic, Google and Apple provide the same or equal protection of it as
        this policy describes, and their handling of it is governed by their own privacy policies,
        linked in the sections below.
      </p>

      <h2>How long information is kept</h2>
      <table>
        <thead>
          <tr><th>Information</th><th>Where</th><th>How long</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Saved games, settings, progress, achievements, whether Remove ads is owned, your choices
              about ads</td>
            <td>Your device</td>
            <td>Until you delete them, clear the game's storage or uninstall it. Of the games played
              together, the five most recent are kept; older ones are deleted automatically.</td>
          </tr>
          <tr>
            <td>The anonymous ID Epic creates for your device</td>
            <td>Your device</td>
            <td>Until you use <em>Forget this account</em>, which deletes it.</td>
          </tr>
          <tr>
            <td>The Google or Apple sign-in token, and the name Apple shares</td>
            <td>Not kept</td>
            <td>The game holds them only while it signs you in, and never stores them.</td>
          </tr>
          <tr>
            <td>The links between your Thalassa account at Epic and your Google account, Apple Account or
              device's anonymous ID</td>
            <td>Epic</td>
            <td>Until you use <em>Forget this account</em>, which removes them, so nothing can sign in to
              that account again.</td>
          </tr>
          <tr>
            <td>Your Thalassa account at Epic: its account ID and your captain's name</td>
            <td>Epic</td>
            <td>Until you ask us to delete it. Epic gives the game no way to delete it, so <em>Forget this
              account</em> leaves it at Epic, linked to nothing.</td>
          </tr>
          <tr>
            <td>A harbour's details</td>
            <td>Epic</td>
            <td>While the harbour is open; Epic removes them when it closes.</td>
          </tr>
          <tr>
            <td>Your moves and the game sent between players</td>
            <td>Passed on as you play</td>
            <td>Not kept by us; the voyage is kept only in each player's saved game.</td>
          </tr>
          <tr>
            <td>Achievements and saved games in Google Play Games</td>
            <td>Your Google account</td>
            <td>Until you delete them in Play Games. Only the newest copy of each save is kept.</td>
          </tr>
          <tr>
            <td>Achievements in Game Center</td>
            <td>Your Apple Account</td>
            <td>As Apple keeps your Game Center data, under its privacy policy.</td>
          </tr>
          <tr>
            <td>Advertising information</td>
            <td>Google</td>
            <td>As Google's <a href="https://policies.google.com/technologies/retention">data retention policy</a> says. We receive none of it.</td>
          </tr>
          <tr>
            <td>Your purchase of Remove ads</td>
            <td>Google Play or the App Store</td>
            <td>In your purchase history, as Google or Apple keeps it. The game keeps only the answer, on
              your device.</td>
          </tr>
          <tr>
            <td>Whether a newer version is available</td>
            <td>Not kept</td>
            <td>The game asks Google Play or the App Store each time and keeps nothing about it.</td>
          </tr>
          <tr>
            <td>Performance measurements (Android)</td>
            <td>Your device, then Google</td>
            <td>On your device until they are sent (about every ten minutes, and when you leave the game),
              then as statistics per device model, as Google's data retention policy says.</td>
          </tr>
          <tr>
            <td>Emails you send us</td>
            <td>Our mailbox</td>
            <td>As long as we need them to answer you; a deletion request is kept as the record that it
              was carried out.</td>
          </tr>
        </tbody>
      </table>
      <p>
        How to delete what can be deleted is under <a href="#delete">Keeping and deleting your data</a>.
        The sections that follow give the details, service by service.
      </p>

      <h2>What the game stores on your device</h2>
      <p>
        Your saved games and your settings: the interface, sound volumes, vibration, your progress
        through the tutorial, the captain's name you choose for playing together, how you last signed in
        to play together, the achievements you have earned, and whether Remove ads has been bought.
        Google's consent tool keeps your choices about ads on the device too. A saved game
        played together also records the captain's name and Epic account ID of each player in it,
        so that any of you can open that voyage again.
      </p>
      <p>
        None of this contains your email address, phone number, location, contacts or photos.
        Uninstalling the game deletes it. Epic's software also keeps the anonymous ID it creates for
        your device; <em>Forget this account</em> deletes it.
      </p>

      <h2>Signing in with Google</h2>
      <p>
        On Android, playing together starts with <em>Sign in with Google</em>. When you sign in, Google gives
        the game a sign-in token. It identifies your Google account and includes your name, email
        address and a link to your profile picture. The game uses it for two things only:
      </p>
      <ul>
        <li>it passes the token to Epic Online Services, which checks it and signs you in to your Thalassa account there;</li>
        <li>it suggests your first name as your captain's name, which you can change at any time.</li>
      </ul>
      <p>
        The game does not store your email address or your picture.
      </p>
      <p>
        Thalassa's use and transfer of information received from Google APIs adheres to the{" "}
        <a href="https://developers.google.com/terms/api-services-user-data-policy">Google API Services User Data Policy</a>, including the Limited Use requirements. It is never used for advertising
        and never shared except with Epic, as described here, to sign you in.
      </p>
      <p>
        Where Google sign-in is not available, the game signs in with an anonymous ID that Epic creates
        for your device instead; Epic receives your device's model name when it creates that ID.
      </p>

      <h2>Signing in with Apple</h2>
      <p>
        On iPhone, playing together starts with <em>Sign in with Apple</em>. The first time you sail
        together on an iPhone, Apple asks you to confirm, then gives the game a sign-in token that
        identifies your Apple Account. The game does not ask Apple for your email address. That first
        time, you may also choose to share your name. The game uses them for two things only:
      </p>
      <ul>
        <li>it passes the token to Epic Online Services, which checks it and signs you in to your Thalassa account there;</li>
        <li>it suggests your first name as your captain's name, which you can change at any time.</li>
      </ul>
      <p>
        Epic then links an anonymous ID it creates for your iPhone to the same Thalassa account (Epic
        receives your device's model name when it creates that ID), so that the game can renew your
        sign-in on its own, without asking Apple each time. The game does not store the token or your
        name.
      </p>
      <p>
        Information from Sign in with Apple is never used for advertising and never shared except with
        Epic, as described here, to sign you in. You can stop Thalassa's use of your Apple Account at any
        time: see <a href="#delete">Keeping and deleting your data</a>.
      </p>

      <h2>Epic Online Services</h2>
      <table>
        <thead>
          <tr><th>Service</th><th>What it handles</th><th>Why</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Accounts</td>
            <td>A Thalassa account ID at Epic, linked to your Google account, your Apple Account or your device's anonymous ID (on iPhone, to both your Apple Account and that ID), and your captain's name.</td>
            <td>To recognise you, so you keep your seat when you come back to a voyage.</td>
          </tr>
          <tr>
            <td>Harbours (lobbies)</td>
            <td>The harbour's code, your captain's name, the people you chose and whether you are ready.
              The host's choices are kept too: the world, the rivals, the round timer, the game's
              version and whether the harbour is open to all. Once the voyage sails, its harbour also
              carries the voyage's identifier, a random code that is not linked to you. Epic keeps
              these while the harbour is open.</td>
            <td>To gather the captains of a voyage, to list the voyages open to all, and to let the
              captains of a saved voyage find it again when one of them reopens it.</td>
          </tr>
          <tr>
            <td>Connections</td>
            <td>Your moves, the game itself when you join or rejoin, timing messages, and your
              device's IP address.</td>
            <td>To play. The devices connect directly when they can, or through Epic's relay servers
              when they cannot.</td>
          </tr>
        </tbody>
      </table>
      <p>
        Epic's software in the game also tells Epic how its services perform and how they are used.
        Epic's handling of this information is governed by the{" "}
        <a href="https://www.epicgames.com/site/en-US/privacypolicy">Epic Games Privacy Policy</a>.
      </p>

      <h2>What other players see</h2>
      <p>
        The players in a voyage with you see your captain's name, your people, whether you are ready,
        and everything that happens in the game, your moves included. When your devices connect
        directly, theirs also receive your IP address, as in any game played peer to peer.
      </p>
      <p>
        If you host a voyage open to all, any player of the same version of the game can see your
        captain's name and your harbour in the list of open voyages. A voyage for friends only is found
        by its code alone.
      </p>

      <h2>Google Play Games</h2>
      <p>
        On Android the game uses Google Play Games Services, run by Google. Play Games signs you in with
        your Play Games profile (on its own, if you allow it), and then keeps, in your Google account:
      </p>
      <ul>
        <li>your <strong>achievements</strong>;</li>
        <li>your <strong>saved games</strong> (the autosave and the three save slots) and your progress
          beyond any one game (the first voyage sailed, tips seen, achievements and their counts), so
          a new device or a reinstalled game finds them. The newest copy of each save is kept.
          Games played together and the first voyage's own save stay on the device.</li>
      </ul>
      <p>
        The game receives only what it needs for this: whether you are signed in, and the saved games and
        achievements of this game. Google's handling of it is governed by the{" "}
        <a href="https://policies.google.com/privacy">Google Privacy Policy</a>.
      </p>

      <h2>Game Center</h2>
      <p>
        On iPhone the game uses Apple's <strong>Game Center</strong> instead. Game Center signs you in
        with your own Game Center account, and the game reports to it the achievements you earn and your
        progress toward them, which Game Center keeps with your Apple Account. The game receives only
        whether you are signed in. Saved games stay on the iPhone. Apple's handling of this is governed
        by the <a href="https://www.apple.com/legal/privacy/">Apple Privacy Policy</a>.
      </p>

      <h2>Advertising</h2>
      <p>
        Until you buy Remove ads, the game shows a full-screen ad as you end every fifth turn (never
        during the first voyage that teaches the game) and a banner at the top of the main menu. The ads
        come from <strong>Google AdMob</strong>. To show them, Google's Mobile Ads SDK in the game sends
        Google your device's <strong>advertising ID</strong> (on Android), your IP address (from which Google estimates
        an approximate location), information about your device and the app, and how you interact with
        the ads. Google uses this to serve, measure and protect ads, as described in{" "}
        <a href="https://policies.google.com/technologies/partner-sites">How Google uses information from sites or apps that use its services</a>.
      </p>
      <p>
        On iPhone the game never asks to track you (Apple's App Tracking Transparency), so Google's SDK
        does not receive your device's advertising identifier, and the ads are shown without it.
      </p>
      <p>
        In the European Economic Area, the United Kingdom and Switzerland, Google's consent form asks you
        before ads may be personalised. You can change your choice at any time with{" "}
        <em>Privacy choices for ads</em> on the game's Google Play page (on iPhone, its Store page). On
        Android you can reset or delete your advertising ID in Android's settings (Privacy → Ads).
      </p>
      <p>
        We do not receive the information AdMob collects, and we do not use the information from Google
        or Apple sign-in for advertising.
      </p>

      <h2>Purchases</h2>
      <p>
        On Android, <strong>Remove ads</strong> is a one-time purchase on Google Play. Google Play handles the payment:
        the game never sees your card or payment details. The game learns only whether Remove ads is
        owned on your Google account (it asks Google Play at every launch, so a purchase made on another
        device, a restore after reinstalling, or a refund all come through) and keeps that answer on
        the device.
      </p>
      <p>
        On iPhone, Remove ads is a one-time purchase on the App Store, with your Apple Account. Apple
        handles the payment: the game never sees your card or payment details. The game learns that
        Remove ads is owned when you buy it, or when you tap <em>Restore purchases</em> on its Store page
        (on another iPhone, or after reinstalling), and keeps that answer on the device.
      </p>

      <h2>Updates</h2>
      <p>
        On Android the game asks Google Play whether a newer version of Thalassa is available: each
        time you open it (and again if you come back to its title screen an hour or more later), and
        each time you open <strong>Sail together</strong>, since everyone playing together needs the
        newest version. Google Play answers with its own update screen; the game sends nothing of its
        own for this and keeps nothing about it.
      </p>
      <p>
        On iPhone the game asks the App Store at the same moments, through Apple's public lookup
        service, naming your device's country (from its language and region settings); Apple receives
        the question with your device's IP address. If a newer version is out, the game opens its page
        on the App Store. It keeps nothing about it.
      </p>

      <h2>Performance measurements</h2>
      <p>
        On Android the game uses Google's <strong>Android Performance Tuner</strong> to learn how it runs on
        different devices, so that we can make it start and play better where it is slow. It measures how
        long the game takes to start and to load a voyage (and whether a load was left before it
        finished) and how long its frames take to draw, and sends these measurements to Google together
        with the game's version and graphics setting, what was on screen (the title, a voyage, The First
        Voyage or a game played together, and the size of the world), and details of the device that the
        tuner gathers with them, such as its model, its Android version and how much memory it has.
      </p>
      <p>
        The measurements are not linked to your Google account, your advertising ID or your captain's
        name, and we see them only as statistics per device model in Google Play Console. Google's
        handling of them is governed by the{" "}
        <a href="https://policies.google.com/privacy">Google Privacy Policy</a>. The game has no other
        analytics, attribution or crash-reporting software.
      </p>
      <p>
        On iPhone the game sends no performance measurements.
      </p>

      <h2>Permissions</h2>
      <p>
        On Android, Thalassa requests internet and network-state access (to play together, for Google Play Games,
        for ads and to send its performance measurements), vibration for haptic feedback (which you can turn off in Settings), and Google
        Play's billing permission for Remove ads. Google's Mobile Ads SDK adds the advertising ID
        permission and Android's ad services permissions. The game does not request access to your
        location, camera, microphone, contacts, photos or files.
      </p>
      <p>
        On iPhone, the game may ask for access to your local network, which your iPhone asks you about
        the first time: it lets devices playing together on the same network connect directly. It does
        not ask to track you, and it does not request access to your location, camera, microphone,
        contacts or photos.
      </p>

      <h2>Children</h2>
      <p>
        Thalassa is not directed at children. It is intended for players aged 13 and over, and we do
        not knowingly collect information from children under 13. If you believe a child has provided
        information through the game, please contact us and we will help you address it.
      </p>

      <h2 id="delete">Keeping and deleting your data</h2>
      <p>
        <strong>To delete your Thalassa account</strong> and the data tied to it, email{" "}
        <a href="mailto:millwatergames@gmail.com?subject=Delete%20my%20Thalassa%20account">millwatergames@gmail.com</a>{" "}
        with the subject “Delete my Thalassa account”. We delete it within one month and tell you when it
        is done. In the game, <em>Forget this account</em> (below) unlinks it from your sign-in at once,
        so nothing can reach it again, but it cannot delete the account itself at Epic. What else you
        can delete, and what stays, is listed here:
      </p>
      <ul>
        <li><strong>On your device:</strong> uninstall the game, or, on Android, clear its storage in your device's app settings.</li>
        <li><strong>Your Thalassa account at Epic:</strong> use <em>Forget this account</em> on the game's Sail together screen, beside your captain's name. It unlinks your Google account or Apple Account from your Thalassa account ID and removes the device's anonymous ID, so nothing can sign in to that account again; the next time you sail together, you start a new one. Epic gives the game no way to delete the account itself, so its ID and your captain's name stay at Epic, linked to nothing, until you email us and we have them deleted.</li>
        <li><strong>Harbours:</strong> Epic removes a harbour's information when it closes.</li>
        <li><strong>Google:</strong> remove Thalassa's access to your Google account at{" "}
          <a href="https://myaccount.google.com/connections">myaccount.google.com/connections</a>.</li>
        <li><strong>Apple:</strong> stop Thalassa's use of your Apple Account in your iPhone's Settings: tap your name, then <em>Sign in with Apple</em>, then Thalassa, then <em>Delete</em> (<a href="https://support.apple.com/en-us/102571">Apple's instructions</a>).</li>
        <li><strong>Google Play Games:</strong> delete your achievements and saved games for Thalassa, or your whole Play Games profile, in the Google Play Games settings on your device.</li>
        <li><strong>Game Center:</strong> Apple keeps your Game Center data; Apple's Data and Privacy page, <a href="https://privacy.apple.com">privacy.apple.com</a>, says what you can do with it.</li>
        <li><strong>Advertising:</strong> on Android, reset or delete your advertising ID in Android's settings; on iPhone the game has no access to your advertising identifier.</li>
        <li><strong>Performance measurements (Android):</strong> Google keeps them as statistics per device model; they are not linked to you, so there is nothing tied to you to delete. Measurements not yet sent are removed when you uninstall the game or clear its storage.</li>
        <li><strong>Other players' devices:</strong> a saved game you played together stays on the devices of the others who played it, with your captain's name and Epic account ID in it, as part of their own game.</li>
      </ul>

      <h2>Your rights</h2>
      <p>
        If you are in the European Economic Area or the United Kingdom, the GDPR gives you rights over
        your personal data, including access, correction, erasure, restriction, portability and
        objection. To use them, contact us. For what Google (sign-in, Play Games, AdMob, Google Play,
        Performance Tuner), Apple (sign-in, Game Center, the App Store) or Epic hold, you can also contact them directly. You have the right to complain to your national data protection authority.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        If this policy changes, the updated version will be posted at this address with a new date at
        the top.
      </p>

      <h2>Contact</h2>
      <p>
        Millwater Games<br />
        <a href="mailto:millwatergames@gmail.com">millwatergames@gmail.com</a>
      </p>

      <footer>
        <a href="/thalassa">Thalassa</a> · <a href="/">Millwater Games</a>
      </footer>
    </main>
  );
}
