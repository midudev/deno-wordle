import React from "https://esm.sh/react";
import { renderToString } from "https://esm.sh/react-dom/server";
import { serve } from "https://deno.land/std@0.125.0/http/server.ts";
import { App } from "./src/index.jsx";

serve((req) => {
  const { url } = req;

  const { pathname } = new URL(url);

  const app = renderToString(<App pathname={pathname} />);

  return new Response(`<div id='root'>${app}</div>`, {
    headers: {
      "content-type": "text/html; charset=utf-8",
    },
  });
}, { port: 8000 });
