
const map = require('through2-map');
const port = process.argv[2];
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method != 'POST'){
    return res.end('send a POST instead\n');
  }
  //takes request stream and pipes it to 'map' function which uses through2-map npm to map stream similar to Array#map function 
  req.pipe(map(chunk => {
    return chunk.toString().toUpperCase();
    //pipes stream result (capitalization) to response stream 
  })).pipe(res);
});

server.listen(port);
