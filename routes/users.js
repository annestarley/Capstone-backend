const express = require('express')
const app = express()
const controller = require('../controller/users')

// app.post('/', controller.userCreaterController)
app.post('/users', controller.findUserToneController)

module.exports = app
