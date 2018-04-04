const model = require('../models/toparticles')

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
