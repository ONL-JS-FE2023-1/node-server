const http = require('http');
const fs = require('fs/promises');

const PORT = 5000;

const requestListener = (req, res) => {
    const {url} = req;

    if(url === '/index.html') {
        fs.readFile('./views/index.html', 'utf-8')
        .then((data) => {
            res.statusCode = 200;
            res.end(data);
        })
    } else {
        res.statusCode = 404;
        res.end();
    }
}

const server = http.createServer(requestListener);

server.listen(PORT);

// localhost:5000