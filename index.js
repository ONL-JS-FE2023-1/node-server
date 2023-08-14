const express = require('express');

const app = express();

const PORT = 5000;

// спочатку ви описуєте роути сервера
app.get('/', (req, res) => {
  res.send('Hello, world!')
})

// підіймаєте сервер з усіма роутами
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
})