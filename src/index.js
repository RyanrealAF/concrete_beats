// ENTRY POINT: Proxies buildwhilebleeding.com/app* → Pages app
const PAGES_ORIGIN = "https://concrete-beats.pages.dev";

export default {
  async fetch(request) {
    const url = new URL(request.url);

    // Strip /app prefix before forwarding
    const strippedPath = url.pathname.replace(/^\/app/, "") || "/";
    const targetURL = new URL(strippedPath + url.search, PAGES_ORIGIN);

    const proxied = new Request(targetURL, {
      method: request.method,
      headers: request.headers,
      body: ["GET", "HEAD"].includes(request.method) ? undefined : request.body,
      redirect: "follow",
    });

    const response = await fetch(proxied);

    // Strip headers that block iframe or cause origin conflicts
    const newHeaders = new Headers(response.headers);
    newHeaders.delete("X-Frame-Options");

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders,
    });
  },
};
