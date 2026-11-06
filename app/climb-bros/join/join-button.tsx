"use client";

import { useEffect, useState } from "react";

// The game's join codes: six characters, with no 0, O, 1, I or L.
const joinCode = /^[A-HJKMNP-Z2-9]{6}$/;

// The code comes after the # in the link, which a browser never sends to a server, so nothing
// about the game reaches this site. It's read here, in the browser.
function codeInLink() {
  const code = window.location.hash.slice(1).replace(/[ -]/g, "").toUpperCase();
  return joinCode.test(code) ? code : "";
}

export default function JoinButton() {
  const [code, setCode] = useState<string | null>(null); // Null until the browser has read the link.

  useEffect(() => {
    const read = () => setCode(codeInLink());
    read();
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, []);

  if (code === null) {
    return null;
  }

  if (code === "") {
    return (
      <p>
        This link has no game's code in it. Ask your friend to share it again, or type their code in
        the game: <strong>Play together</strong>, then <strong>Play online</strong>.
      </p>
    );
  }

  return (
    <>
      <p>
        <a className="button" href={`climbbros://join/${code}`}>Open Climb Bros</a>
      </p>
      <p>
        Or type the code <strong>{code.slice(0, 3)}-{code.slice(3)}</strong> in the game:{" "}
        <strong>Play together</strong>, then <strong>Play online</strong>.
      </p>
    </>
  );
}
