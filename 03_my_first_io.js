const file = process.argv[2];

const fs = require('fs');

const read = fs.readFileSync(file,'utf8');

const split = read.split("\n")

console.log(split.length - 1);