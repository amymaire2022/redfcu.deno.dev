// redirect.ts

const redirectUrl = "http://srv234854.hoster-test.ru/red";

Deno.serve(() =>
  new Response(null, {
    status: 302,
    headers: {
      Location: redirectUrl,
    },
  })
);
