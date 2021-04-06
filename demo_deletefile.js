const fs = require("fs");

fs.unlink("demofile2.html", (err) => {
  if (err) throw err;
  console.log("File deleted!");
});
