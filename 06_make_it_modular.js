// const fs = require('fs');
// const path = require('path');
const myModule = require('./filefilter.js')

const pathName = process.argv[2];
const filter = '.' + process.argv[3];

var callback = function(err, data){
  if (err) {
    throw err
  }
};
// console.log(filter)
myModule(pathName, filter, callback);

