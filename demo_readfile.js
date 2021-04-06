const fs = require("fs");
const http = require("http");

http
  .createServer((req, res) => {
    fs.readFile("demofile1.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      return res.end(data);
    });
  })
  .listen(8080);
