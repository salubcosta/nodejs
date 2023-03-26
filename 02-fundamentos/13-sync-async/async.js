const fs = require("fs");

console.log("Begin");

fs.writeFile("file-async", "wrote with async", () => {
  setTimeout(() => {
    console.log("Writing the file");
  }, 2000);
});

console.log("End");
