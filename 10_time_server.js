
const net = require('net')
const port = process.argv[2]
const strftime = require('strftime')

const server = net.createServer(socket => {
  var now = ((strftime('%F %H:%M')) + '\n');
  socket.end(now);
})

server.listen(port)




