const fs = require('fs');
const path = require('path');

const pathName = process.argv[2];
const filter = '.' + process.argv[3];


fs.readdir(pathName, (err, list) => {
  if (err) throw err;
  // console.log(list);
  list.forEach(filename => {
    // console.log(filename)
    const ext = path.extname(filename)
    // console.log(ext)
    // console.log(filter)
    if (ext === filter){
      console.log(filename);
    }
  });
});

