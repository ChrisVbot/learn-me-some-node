
const port = process.argv[2];
const http = require('http');
const url = require('url');


const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'})
  var getUrl = url.parse(req.url);
  //search is a key in the getUrl object. Will return value of search.
  var getTime = getUrl.search
  //splits string at the '=' to get date/time
  var timeSplit = getTime.split('=')[1];
  var queryDate = new Date(timeSplit);
  var hours = queryDate.getHours();
  var minutes = queryDate.getMinutes();
  var seconds = queryDate.getSeconds();
  if (getUrl.pathname === '/api/parsetime'){
    result = JSON.stringify({hour: hours, minute: minutes, second: seconds})
    res.end(result);
  } 
  if (getUrl.pathname === '/api/unixtime'){
    result = JSON.stringify({unixtime: queryDate.getTime()})
    res.end(result);
  }
});

server.listen(port);
