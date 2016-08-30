
const fs = require('fs');
const http = require('http');
const port = process.argv[2]
const fileLocation = process.argv[3]

const server = http.createServer((req, res) =>{
  //writes header content
  res.writeHead(200, {'content-type': 'text/plain'})
  //creates readstream to file location provided in command-line argument
  var readStream = fs.createReadStream(fileLocation)
  //runs a function when opens successfully
  readStream.on('open', () => {
    //stream('pipe') result back to http response
    readStream.pipe(res);
  });
  readStream.on('error', (err) => {
    res.end(err);
  });
});

server.listen(port);



