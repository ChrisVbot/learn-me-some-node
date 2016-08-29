
const http = require('http')

// http://localhost:54554
const address = process.argv[2];

http.get(address, (res) => {
  res.setEncoding('utf8');
  res.on("data", console.log);
  res.on('error', console.error);
});

