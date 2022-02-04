import React from "https://esm.sh/react";

export function App({ pathname }) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        body {
          font-family: system-ui;
          display: grid;
          place-content: center;
          height: 100vh;
          margin: 0;
        }
      `,
        }}
      >
      </style>
      {pathname === "/login" && (
        <form>
          <input placeholder="login" />
        </form>
      )}
      {pathname === "/" && (
        <>
          <h1>Hola mundo!</h1>
          <button>Hola!</button>
        </>
      )}
    </>
  );
}
