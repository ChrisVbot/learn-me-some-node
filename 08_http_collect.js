
const buffer = require('bl')
const http = require('http')
const address = process.argv[2];

http.get(address, (res) => {
  res.pipe(buffer((err, data) => {
    if (err)
      return console.error(err);
    console.log(data.length);
    console.log(data.toString());
  }));
});
