const http = require('http');

const PORT = 5000;

const requestListener = (req, res) => {
    const {url, method} = req;
    console.log(url, method);
}

const server = http.createServer(requestListener);

server.listen(PORT);

// localhost:5000