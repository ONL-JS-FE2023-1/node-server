// url, method = route, endpoint

const express = require('express')

const app = express()

const PORT = 5000

const bodyParser = express.json()

const { validateUser } = require('./middlewares/index')

const UserController = require('./controllers/UserController');

// спочатку ви описуєте роути сервера
app.post('/user', bodyParser, validateUser, UserController.createUser);

// кожен учасник естафети - middleware (мідлвейр, мідлвар)

// підіймаєте сервер з усіма роутами
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})

/*

Задача: реєстрацію юзера

1. Прийняти запит на певний route (endpoint, ручка, маршрут...)
2. JSON->JS
3. Перевірити (валідувати) дані
4. Зберегти ці дані (юзера)
5. Надіслати користувачу відповідь

*/
