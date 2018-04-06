const model = require('../models/toparticles')

const toparticlesController = (req, response, next) => {
  model.getTopArticles()
    .then(results => {
      console.log(results)
      response.json(results)
    })
    .catch(err => {
      console.log(err)
    })
}

const additionalArticlesController = (req, response, next) => {
  let category = req.params.category
  console.log('category', category)
  model.getAdditionalArticles(category)
    .then(results => {
      console.log(results)
      response.json(results)
    })
    .catch(err => {
      console.log(err)
    })
}

module.exports = {
  toparticlesController,
  additionalArticlesController
}
