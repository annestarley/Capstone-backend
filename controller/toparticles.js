const model = require('../models/toparticles')
const axios = require('axios')
const read = require('node-readability')

const toparticlesController = (req, response, next) => {
  model.getTopArticles()
    .then(results => {
      response.json(results)
    })
    .catch(err => {
      console.log(err)
    })
}

module.exports = {
  toparticlesController
}
