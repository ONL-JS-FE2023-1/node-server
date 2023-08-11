const http = require('http');

const PORT = 5000;

const requestListener = (req, res) => {
    // const {url, method} = req;
    // console.log(url, method);
    res.statusCode = 404;
    res.end('Hello from server');
}

const server = http.createServer(requestListener);

server.listen(PORT);

// localhost:5000