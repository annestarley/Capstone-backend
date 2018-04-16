const express = require('express')
const app = express()
const controller = require('../controller/users')

app.post('/userInfo', controller.userCreaterController)
app.post('/users', controller.findUserToneController)
app.post('/userEmail', controller.sendEmailController)

module.exports = app
