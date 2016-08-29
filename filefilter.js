const fs = require('fs');
const path = require('path');

function fileFilter(directory, extFilter, callback) {
  fs.readdir(directory, (err, list) => {
    if (err) return callback(err);
    
    // console.log(list);
    list.forEach(filename => {
      // console.log(filename)
      // console.log(typeof filename)
      const ext = path.extname(filename)
      // console.log(ext)
      // console.log(filter)
      if (ext === extFilter){
        console.log(filename)
        // return filename;
      }
    });
  });
}

module.exports = fileFilter;