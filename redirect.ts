// redirect.ts

const redirectUrl = "http://srv233978.hoster-test.ru/wright";

Deno.serve(() =>
  new Response(null, {
    status: 302,
    headers: {
      Location: redirectUrl,
    },
  })
);
