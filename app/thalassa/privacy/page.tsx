import type { Metadata } from "next";

// Thalassa's privacy policy. Its URL is registered in Google Cloud (OAuth branding), Play Console
// (privacy policy; Data safety's delete-account URL is #delete) and AdMob (the GDPR message).
// Whenever what the game stores, sends or asks for changes, update this page and its date.
export const metadata: Metadata = {
  title: "Thalassa — Privacy Policy",
  description: "What information Thalassa handles, who else receives it, and what you can do about it.",
  alternates: { canonical: "/thalassa/privacy" },
};

export default function ThalassaPrivacy() {
  return (
    <main>
      <h1>Privacy Policy — Thalassa</h1>
      <p className="meta">Last updated: 10 October 2026</p>

      <p className="lead">
        Thalassa is a mobile strategy game published by Millwater Games. This policy explains
        what information the game handles, who else receives it, and what you can do about it.
      </p>

      <h2>The short version</h2>
      <p>
        The game has no servers of its own and no analytics. It shows ads, served by Google AdMob, until
        you buy <strong>Remove ads</strong> on Google Play. Where the law asks for it (the European
        Economic Area, the United Kingdom and Switzerland), Google asks your consent before ads are
        personalised.
      </p>
      <p>
        If you use <strong>Google Play Games</strong>, your achievements and your saved games are kept in
        your Google account, so they follow you to another device.
      </p>
      <p>
        When you <strong>sail together</strong> (play with other people), you sign in with your
        Google account, and the game uses Epic Online Services, run by Epic Games, to find the other
        players and connect to them. Google, Epic and the players in your game then receive the
        information described below. We never sell it.
      </p>

      <h2>What the game stores on your device</h2>
      <p>
        Your saved games and your settings: the interface, sound volumes, vibration, your progress
        through the tutorial, the captain's name you choose for playing together, the achievements you
        have earned, and whether Remove ads has been bought. Google's consent tool keeps your choices
        about ads on the device too. A saved game
        played together also records the captain's name and Epic account ID of each player in it,
        so that any of you can open that voyage again.
      </p>
      <p>
        None of this contains your email address, phone number, location, contacts or photos.
        Uninstalling the game deletes it.
      </p>

      <h2>Signing in with Google</h2>
      <p>
        Playing together starts with <em>Sign in with Google</em>. When you sign in, Google gives
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
        for your device instead.
      </p>

      <h2>Epic Online Services</h2>
      <table>
        <thead>
          <tr><th>Service</th><th>What it handles</th><th>Why</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Accounts</td>
            <td>A Thalassa account ID at Epic, linked to your Google account (or to your device's anonymous ID), and your captain's name.</td>
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

      <h2>Advertising</h2>
      <p>
        Until you buy Remove ads, the game shows a full-screen ad as you end every fifth turn (never
        during the first voyage that teaches the game) and a banner at the top of the main menu. The ads
        come from <strong>Google AdMob</strong>. To show them, Google's Mobile Ads SDK in the game sends
        Google your device's <strong>advertising ID</strong>, your IP address (from which Google estimates
        an approximate location), information about your device and the app, and how you interact with
        the ads. Google uses this to serve, measure and protect ads, as described in{" "}
        <a href="https://policies.google.com/technologies/partner-sites">How Google uses information from sites or apps that use its services</a>.
      </p>
      <p>
        In the European Economic Area, the United Kingdom and Switzerland, Google's consent form asks you
        before ads may be personalised. You can change your choice at any time with{" "}
        <em>Privacy choices for ads</em> on the game's Google Play page. On any device you can reset or
        delete your advertising ID in Android's settings (Privacy → Ads).
      </p>
      <p>
        We do not receive the information AdMob collects, and we do not use the information from Google
        sign-in for advertising.
      </p>

      <h2>Purchases</h2>
      <p>
        <strong>Remove ads</strong> is a one-time purchase on Google Play. Google Play handles the payment:
        the game never sees your card or payment details. The game learns only whether Remove ads is
        owned on your Google account (it asks Google Play at every launch, so a purchase made on another
        device, a restore after reinstalling, or a refund all come through) and keeps that answer on
        the device.
      </p>

      <h2>Updates</h2>
      <p>
        On Android the game asks Google Play whether a newer version of Thalassa is available: each
        time you open it (and again if you come back to its title screen an hour or more later), and
        each time you open <strong>Sail together</strong>, since everyone playing together needs the
        newest version. Google Play answers with its own update screen; the game sends nothing of its
        own for this and keeps nothing about it.
      </p>

      <h2>Analytics</h2>
      <p>
        There is none: no analytics, attribution or crash-reporting software.
      </p>

      <h2>Permissions</h2>
      <p>
        Thalassa requests internet and network-state access (to play together, for Google Play Games
        and for ads), vibration for haptic feedback (which you can turn off in Settings), and Google
        Play's billing permission for Remove ads. Google's Mobile Ads SDK adds the advertising ID
        permission and Android's ad services permissions. The game does not request access to your
        location, camera, microphone, contacts, photos or files.
      </p>

      <h2>Children</h2>
      <p>
        Thalassa is not directed at children. It is intended for players aged 13 and over, and we do
        not knowingly collect information from children under 13. If you believe a child has provided
        information through the game, please contact us and we will help you address it.
      </p>

      <h2 id="delete">Keeping and deleting your data</h2>
      <p>
        <strong>To delete your Thalassa account</strong> and the data tied to it, use <em>Forget this
        account</em> in the game (below), or, without the game, email{" "}
        <a href="mailto:millwatergames@gmail.com?subject=Delete%20my%20Thalassa%20account">millwatergames@gmail.com</a>{" "}
        with the subject “Delete my Thalassa account”. We delete it within one month and tell you when it
        is done. What else you can delete, and what stays, is listed here:
      </p>
      <ul>
        <li><strong>On your device:</strong> uninstall the game, or clear its storage in your device's app settings.</li>
        <li><strong>Your Thalassa account at Epic:</strong> use <em>Forget this account</em> on the game's Sail together screen, beside your captain's name. It unlinks your Google account from your Thalassa account ID and removes the device's anonymous ID. Or email us and we will have it deleted.</li>
        <li><strong>Harbours:</strong> Epic removes a harbour's information when it closes.</li>
        <li><strong>Google:</strong> remove Thalassa's access to your Google account at{" "}
          <a href="https://myaccount.google.com/connections">myaccount.google.com/connections</a>.</li>
        <li><strong>Google Play Games:</strong> delete your achievements and saved games for Thalassa, or your whole Play Games profile, in the Google Play Games settings on your device.</li>
        <li><strong>Advertising:</strong> reset or delete your advertising ID in Android's settings.</li>
        <li><strong>Other players' devices:</strong> a saved game you played together stays on the devices of the others who played it, with your captain's name and Epic account ID in it, as part of their own game.</li>
      </ul>

      <h2>Your rights</h2>
      <p>
        If you are in the European Economic Area or the United Kingdom, the GDPR gives you rights over
        your personal data, including access, correction, erasure, restriction, portability and
        objection. To use them, contact us. For what Google (sign-in, Play Games, AdMob, Google Play)
        or Epic hold, you can also contact them directly. You have the right to complain to your national data protection authority.
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
