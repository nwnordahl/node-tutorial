const http = require("http");
const uc = require("upper-case");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(uc.upperCase("Hello World!"));
  })
  .listen(8080);
