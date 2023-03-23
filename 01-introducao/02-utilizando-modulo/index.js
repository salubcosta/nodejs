/**
 * O import é mais novo recurso do ES que require
 * import { readFile } from "fs"; // Seria a melhor forma de se trabalhar hoje
 * */

const fs = require("fs"); // File System

fs.readFile("arquivo.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});
