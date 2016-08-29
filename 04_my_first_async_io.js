const file = process.argv[2];

const fs = require('fs');

fs.readFile(file,'utf8', (err, data) => {
  if (err) throw err;
  var splitData = data.split("\n")
  console.log(splitData.length - 1);
});
