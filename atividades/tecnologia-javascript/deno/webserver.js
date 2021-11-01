// https://deno.land/manual@v1.14.1/examples/http_server

import { listenAndServe } from 'https://deno.land/std@0.108.0/http/server.ts';

const addr = ':8080';

const handler = (request) => {
  let body = "Hello World em Deno";
  return new Response(body, {status: 200});
}

console.log('Servidor rodando. Acesse-o em http://localhost:8080');
await listenAndServe(addr, handler);

