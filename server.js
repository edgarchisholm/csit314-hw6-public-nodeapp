const http = require('node:http');

function app(request, response) {
  response.writeHead(200, { 'content-type': 'text/plain; charset=utf-8' });
  response.end('Hello from Edgar\'s Jenkins homework');
}

if (require.main === module) {
  http.createServer(app).listen(process.env.PORT || 3000);
}

module.exports = { app };
