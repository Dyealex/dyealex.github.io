const http = require('http')
const server = http.createServer ((req, res));
// server.on('connection', socket => {
//     console.log ("connector");


});

server.listen(8080);
console.log("server is on")