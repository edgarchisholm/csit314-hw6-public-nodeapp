const test = require('node:test');
const assert = require('node:assert/strict');
const { app } = require('./server');

test('responds with the homework greeting', () => {
  let status;
  let body;
  app({}, {
    writeHead(code) { status = code; },
    end(text) { body = text; },
  });
  assert.equal(status, 200);
  assert.equal(body, "Hello from Edgar's Jenkins homework");
});
