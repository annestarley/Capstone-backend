const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')
require('dotenv').config()

const axios = require('axios')
const read = require('node-readability')

app.use(bodyParser.json())
app.use(morgan('dev'))
app.disable('x-powered-by')
app.use(cors())

let users = require('./routes/users')
let toparticles = require('./routes/toparticles');
let additionalarticles = require('./routes/additionalarticles')
app.use('', users)
app.use('', toparticles)
app.use('', additionalarticles)

app.listen(port, () => console.log(`Listening on port: ${port}`))

module.exports = app
