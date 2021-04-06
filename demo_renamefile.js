const fs = require("fs");

fs.rename("demofile1.html", "file1.html", (err) => {
  if (err) throw err;
  console.log("File renamed!");
});

fs.rename("file1.html", "demofile1.html", (err) => {
  if (err) throw err;
  console.log("File renamed!");
});
