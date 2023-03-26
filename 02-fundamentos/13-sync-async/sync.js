const fs = require("fs");

console.log("Begin");

fs.writeFileSync("file-sync.txt", "wrote with sync");

console.log("End");
