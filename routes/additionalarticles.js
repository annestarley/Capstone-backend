const express = require('express')
const app = express()
const controller = require('../controller/additionalarticles')

app.get('/science-articles', controller.sciencearticlesController)
app.get('/sports-articles', controller.sportsarticlesController)
app.get('/business-articles', controller.businessarticlesController)
app.get('/entertainment-articles', controller.entertainmentarticlesController)
app.get('/health-articles', controller.healtharticlesController)
app.get('/technology-articles', controller.technologyarticlesController)

module.exports = app
