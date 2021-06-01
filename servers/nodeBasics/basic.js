var http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // http://localhost:8080/request
    console.log(req.url)

    res.write(req.url);

    res.end();
}).listen(8080);

console.log("Server listening on port: 8080")