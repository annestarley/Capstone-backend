const express = require('express')
const app = express()
const controller = require('../controller/toparticles')

app.get('/top-articles', controller.toparticlesController)
app.get('/:category', controller.additionalArticlesController)

module.exports = app
