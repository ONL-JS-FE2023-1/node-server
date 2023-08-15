// url, method = route, endpoint

const express = require('express')

const app = express()

const PORT = 5000

const bodyParser = express.json()

const { validateUser } = require('./middlewares/index')

const UserController = require('./controllers/UserController');

// спочатку ви описуєте роути сервера
app.post('/user', bodyParser, validateUser, UserController.createUser);
app.get('/users', UserController.getAllUsers);
app.get('/user/:userId', UserController.getOneUser);
app.delete('/user/:userId', UserController.deleteOneUser);
app.put('/user/:userId', bodyParser, UserController.updateUser);

// кожен учасник естафети - middleware (мідлвейр, мідлвар)

// підіймаєте сервер з усіма роутами
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
