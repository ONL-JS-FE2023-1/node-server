const http = require("http");
const fs = require("fs/promises");

const PORT = 5000;

const requestListener = async (req, res) => {
  const { url } = req;

  if (url === "/index.html") {
    try {
      const data = await fs.readFile("./view/index.html", "utf-8");
      res.statusCode = 200;
      res.end(data);
    } catch (error) {
      res.statusCode = 404;
      res.end(error.message);
    }
  } else {
    res.statusCode = 404;
    // TODO: NotFound
    res.end();
  }
};

const server = http.createServer(requestListener);

server.listen(PORT);

// localhost:5000
