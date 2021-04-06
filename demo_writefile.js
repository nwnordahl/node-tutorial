const http = require("http");
const fs = require("fs");

const filename = "demofile2.html";

fs.writeFile(
  filename,
  `<html>
    <body>
      <h1>My Header</h1>
      <p>My Paragraph.</p>
    </body>
  </html>`,
  (err) => {
    if (err) throw err;
    console.log("Saved!");
  }
);

http
  .createServer((req, res) => {
    fs.readFile(filename, (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  })
  .listen(8080);
