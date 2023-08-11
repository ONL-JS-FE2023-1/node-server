const http = require("http");
const fs = require("fs/promises");

const PORT = 5000;

const requestListener = async (req, res) => {
  const { url } = req;

  if (url === "/index.html") {
    try {
      const data = await fs.readFile("./views/MainPage/index.html", "utf-8");
      res.statusCode = 200;
      res.end(data);
    } catch (error) {
      res.statusCode = 404;
      res.end(error.message);
    }
  } else if (url === "/style.css") {
    try {
      const data = await fs.readFile("./views/style.css", "utf-8");
      res.statusCode = 200;
      res.end(data);
    } catch (error) {
      res.end(error.message);
    }
  } else {
    res.statusCode = 404;
    const data = await fs.readFile("./views/NotFoundPage/index.html", "utf-8");
    res.end(data);
  }
};

const server = http.createServer(requestListener);

server.listen(PORT);

// localhost:5000


/*

ДЗ.
Можете спробувати зробити так, щоб користувач робив запит на різні стильові файли
(в залежності, на якій він знаходить)

*/
