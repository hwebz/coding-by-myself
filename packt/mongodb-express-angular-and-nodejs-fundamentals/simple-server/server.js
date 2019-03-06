const http = require('http');

const hostname = 'hwebz';
const port = 3000;

const server = http.createServer(function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello world');
})

server.listen(port, hostname, function() {
    console.log(`Server running at http://${hostname}:${port}`);
})