const express = require('express')
const cocrs = require('cors')
const app = express()
const port = process.env.PORT || 6000
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require(path)
require('dotenv').config()

app.use(bodyParser.json())
app.use(morgan('dev'))
app.disable(x-powered-by)
app.use(cors())

app.listen(port, () => console.log(`Listening on port: ${port}`))

module.exporst = app
