import type { Metadata } from "next";

// Climb Bros' privacy policy. Its URL is registered in Google Cloud (OAuth branding), and goes in
// Play Console too (privacy policy; Data safety's delete-account URL is #delete).
// Whenever what the game stores, sends or asks for changes, update this page and its date.
export const metadata: Metadata = {
  title: "Climb Bros — Privacy Policy",
  description: "How Climb Bros captures, uses, shares and keeps information, and what you can do about it.",
  alternates: { canonical: "/climb-bros/privacy" },
};

export default function ClimbBrosPrivacy() {
  return (
    <main>
      <h1>Privacy Policy — Climb Bros</h1>
      <p className="meta">Last updated: 31 October 2026</p>

      <p className="lead">
        Climb Bros is a climbing game for one to four players, published by Millwater Games. This
        policy explains what information the game captures, how it is used, who it is shared with,
        how long it is kept, and what you can do about it.
      </p>

      <h2>The short version</h2>
      <p>
        The game has no servers of its own, shows no ads, sells nothing inside the game and has no
        analytics. Played alone, it sends nothing anywhere. Played with friends on the same network,
        it sends what the game needs to their devices only.
      </p>
      <p>
        When you <strong>play online</strong>, the game uses Epic Online Services, run by Epic Games,
        to sign you in, to find the other players and to connect to them. It signs you in with an
        anonymous ID that Epic creates for your device, or, if you choose <em>Sign in with Google</em>,
        with your Google account, so that you are the same player on any device. Google, Epic and the
        players in your game then receive the information described below. We never sell it.
      </p>

      <h2>How information is captured</h2>
      <p>
        Millwater Games has no servers, and the game sends us nothing. Information is captured in these
        ways:
      </p>
      <ul>
        <li><strong>What you type or choose:</strong> your player name; the pings and quick-chat phrases
          you send; when you host, the tower you climb (today's tower or a new one, and its Ascension)
          and the code that lets friends join; and anything you write to us by email.</li>
        <li><strong>What the game records as you play:</strong> your saved run, your settings, the tips
          you have seen, your best climb of today's tower, the Ascensions you have unlocked, and a random
          number that this installation of the game keeps.</li>
        <li><strong>What Google gives the game when you sign in:</strong> with <em>Sign in with Google</em>,
          a sign-in token that identifies your Google account and includes your name, email address and a
          link to your profile picture.</li>
        <li><strong>What is gathered automatically from your device:</strong> by Epic Online Services,
          while you play online, your IP address, to connect you.</li>
      </ul>

      <h2>How information is used</h2>
      <ul>
        <li><strong>To play:</strong> your saved run and settings let you go on where you left off; your
          player name and everything you do in the game let you play with other people; the number this
          installation keeps (online, your Climb Bros account ID at Epic) lets the others' games
          recognise you, so that you get your place and your things back if your game closes during a
          run.</li>
        <li><strong>To sign you in:</strong> the Google sign-in token is passed to Epic Online Services,
          which checks it and signs you in to your Climb Bros account; your first name is suggested as
          your player name, which you can change at any time.</li>
        <li><strong>To answer you</strong> when you email us.</li>
      </ul>
      <p>
        We never sell information, and information from Google sign-in is never used for advertising.
      </p>

      <h2>How information is shared</h2>
      <table>
        <thead>
          <tr><th>Who receives it</th><th>What</th><th>Why</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Epic Games</strong> (Epic Online Services, working for the game)</td>
            <td>When you play online: the Google sign-in token if you sign in with Google, your Climb Bros
              account ID and player name, your game's details, the game sent between players, and your
              IP address.</td>
            <td>To sign you in, to gather the players of a game and to connect your devices, directly or
              through Epic's relay servers.</td>
          </tr>
          <tr>
            <td><strong>Google</strong></td>
            <td>Your sign-in, when you choose Sign in with Google.</td>
            <td>To sign you in.</td>
          </tr>
          <tr>
            <td><strong>The other players in your game</strong></td>
            <td>Your player name, the number that identifies you to their games, everything you do in the
              game, the run itself when you host it, and, when your devices connect directly, your IP
              address.</td>
            <td>To play together.</td>
          </tr>
        </tbody>
      </table>
      <p>
        No one else receives it. Epic's and Google's handling of it is governed by their own privacy
        policies, linked in the sections below.
      </p>

      <h2>How long information is kept</h2>
      <table>
        <thead>
          <tr><th>Information</th><th>Where</th><th>How long</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Your saved run, settings, player name, the tips you have seen, your best climb of
              today's tower, the Ascensions you have unlocked, and the number this installation keeps</td>
            <td>Your device</td>
            <td>Until you delete them, clear the game's storage or uninstall it. One run is saved at a
              time; it is forgotten when the run is won, lost or given up for a new one.</td>
          </tr>
          <tr>
            <td>The Google sign-in token</td>
            <td>Not kept</td>
            <td>The game holds it only while it signs you in, and never stores it.</td>
          </tr>
          <tr>
            <td>Your Climb Bros account at Epic: its account ID, its link to your Google account (or to
              your device's anonymous ID) and the name it was last signed in with</td>
            <td>Epic</td>
            <td>Until you use <em>Forget this account</em> or ask us to delete it.</td>
          </tr>
          <tr>
            <td>A game's details</td>
            <td>Epic</td>
            <td>While the game is open to join; Epic removes them when it closes.</td>
          </tr>
          <tr>
            <td>The game sent between players</td>
            <td>Passed on as you play</td>
            <td>Not kept by us; the run is kept only in each player's saved run.</td>
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
        Your saved run: the tower, how far the team got, your things and coins, the time on the clock,
        and the player name and number of each player in it, so that any of you can host it again.
        Your settings: graphics, controls and the layout of the buttons, look speed, aim help,
        haptics, less flicker, colour-blind-friendly colours and first-time tips. Also your player
        name, the tips you have seen, your best climb of today's tower, the Ascensions you have
        unlocked, and a random number that identifies this installation of the game to the others'
        games.
      </p>
      <p>
        None of this contains your email address, phone number, location, contacts or photos.
        Uninstalling the game deletes it.
      </p>

      <h2>Signing in with Google</h2>
      <p>
        Signing in with Google is your choice: online play works without it. When you sign in, Google
        gives the game a sign-in token. It identifies your Google account and includes your name, email
        address and a link to your profile picture. The game uses it for two things only:
      </p>
      <ul>
        <li>it passes the token to Epic Online Services, which checks it and signs you in to your Climb Bros account there, the same account on any device;</li>
        <li>it suggests your first name as your player name, which you can change at any time.</li>
      </ul>
      <p>
        The game does not store the token, your email address or your picture.
      </p>
      <p>
        Climb Bros' use and transfer of information received from Google APIs adheres to the{" "}
        <a href="https://developers.google.com/terms/api-services-user-data-policy">Google API Services User Data Policy</a>, including the Limited Use requirements. It is never used for advertising
        and never shared except with Epic, as described here, to sign you in.
      </p>
      <p>
        Without Google, the game signs in with an anonymous ID that Epic creates for your device.
      </p>

      <h2>Epic Online Services</h2>
      <table>
        <thead>
          <tr><th>Service</th><th>What it handles</th><th>Why</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Accounts</td>
            <td>A Climb Bros account ID at Epic, linked to your Google account (or to your device's anonymous ID), and the name it was last signed in with.</td>
            <td>To recognise you, so that you get your place back when you come back to a run.</td>
          </tr>
          <tr>
            <td>Lobbies</td>
            <td>The game's code, its players and their player names, who hosts, the game's version, and
              the tower being climbed (today's tower or a new one, and its Ascension). Epic keeps these
              while the game is open to join.</td>
            <td>To gather the players of a game, and to let friends join by its code.</td>
          </tr>
          <tr>
            <td>Connections</td>
            <td>Everything the game sends between players as you play, the run itself when you join or
              come back, timing messages, and your device's IP address.</td>
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
        The players in a game with you see your player name and everything that happens in the game:
        where you are and what you do, your things and coins, and the pings and chat phrases you send.
        Their games also receive the number that identifies you (online, your Climb Bros account ID at
        Epic), so that you get your place back if your game closes. When your devices connect directly,
        online or on the same network, theirs also receive your IP address, as in any game played peer
        to peer.
      </p>
      <p>
        An online game is found by its code alone.
      </p>

      <h2>Permissions</h2>
      <p>
        Climb Bros requests internet and network-state access (to play together) and vibration for
        haptic feedback (which you can turn off in the pause menu). The game does not request access to
        your location, camera, microphone, contacts, photos or files.
      </p>

      <h2>Children</h2>
      <p>
        Climb Bros is not directed at children. It is intended for players aged 13 and over, and we do
        not knowingly collect information from children under 13. If you believe a child has provided
        information through the game, please contact us and we will help you address it.
      </p>

      <h2 id="delete">Keeping and deleting your data</h2>
      <p>
        <strong>To delete your Climb Bros account</strong> and the data tied to it, use <em>Forget this
        account</em> in the game (below), or, without the game, email{" "}
        <a href="mailto:millwatergames@gmail.com?subject=Delete%20my%20Climb%20Bros%20account">millwatergames@gmail.com</a>{" "}
        with the subject “Delete my Climb Bros account”. We delete it within one month and tell you when
        it is done. What else you can delete, and what stays, is listed here:
      </p>
      <ul>
        <li><strong>On your device:</strong> uninstall the game, or clear its storage in your device's app settings.</li>
        <li><strong>Your Climb Bros account at Epic:</strong> use <em>Forget this account</em> in the game's online menu. It unlinks your Google account from your Climb Bros account ID and removes the device's anonymous ID. Or email us and we will have it deleted.</li>
        <li><strong>Online games:</strong> Epic removes a game's details when it closes.</li>
        <li><strong>Google:</strong> remove Climb Bros' access to your Google account at{" "}
          <a href="https://myaccount.google.com/connections">myaccount.google.com/connections</a>.</li>
        <li><strong>Other players' devices:</strong> a run you played together stays saved on the devices of the others who played it, with your player name and number in it, as part of their own game, until it ends.</li>
      </ul>

      <h2>Your rights</h2>
      <p>
        If you are in the European Economic Area or the United Kingdom, the GDPR gives you rights over
        your personal data, including access, correction, erasure, restriction, portability and
        objection. To use them, contact us. For what Google or Epic hold, you can also contact them
        directly. You have the right to complain to your national data protection authority.
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
        <a href="/climb-bros">Climb Bros</a> · <a href="/">Millwater Games</a>
      </footer>
    </main>
  );
}
