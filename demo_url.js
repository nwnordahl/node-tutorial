const fs = require("fs");
const http = require("http");

http
  .createServer((req, res) => {
    const filename = "." + req.url;

    fs.readFile(filename, (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("404 Not Found");
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      return res.end(data);
    });
  })
  .listen(8080);
