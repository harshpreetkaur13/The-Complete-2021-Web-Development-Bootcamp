//print hello on console
console.log("Hello");


//copy contents of one file to other
const fs = require("fs");
fs.copyFileSync("file1.txt", "file2.txt");