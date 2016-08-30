//write an http server that serves the same text file for each request it receives
//server should listen on the port provided by the first argument to the program
//will be provided with the location of the file to serve as the second command-line argument. You must use the fs.createReadStream() method to stream the file contents to the response
//hints 
// because we need to create an HTTP server for this exercise rather than a generic TCP server, we should use the http module from the Node core. Like the net module, http also has a method named http.createServer() but this one creates a server that can talk HTTP
//http.createServer() takes a callback that is called once for each connection received by your server. The callback function has the signature:

// function callback(request, response){/*...*/}
//request is used to fetch properties, such as teh header and query-string from the request while response is for sending data to the client, both headers and body
//both request and response are also Node streams! Which means that you can use the streaming abstractions to send and receive data if they suit your use-case 

//http.createServer() also returns an instance of your server. You must call server.listen(portNumber) to start listening on a particular port. 

//typical Node HTTP server looks like:
// var http = require('http')
// var server = http.createServer(function(req, res){
  //request handling logic
//})
//server.listen(8000)

const fs = require('fs');
const http = require('http');
const port = process.argv[2]
const fileLocation = process.argv[3]

const server = http.createServer((req, res) =>{
  res.writeHead(200, {'content-type': 'text/plain'})
  var readStream = fs.createReadStream(fileLocation)
  readStream.on('open', function(){
    readStream.pipe(res);
  });
  readStream.on('error', function(err){
    res.end(err);
  });
});

server.listen(port);
