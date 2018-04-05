const model = require('../models/additionalarticles')

const sciencearticlesController = (req, response, next) => {
  model.getScienceArticles()
    .then(results => {
      console.log(results)
      response.json(results)
    })
    .catch(err => {
      console.log(err)
    })
}

const sportsarticlesController = (req, response, next) => {
  model.getSportsArticles()
    .then(results => {
      console.log(results)
      response.json(results)
    })
    .catch(err => {
      console.log(err)
    })
}

const businessarticlesController = (req, response, next) => {
  model.getBusinessArticles()
    .then(results => {
      console.log(results)
      response.json(results)
    })
    .catch(err => {
      console.log(err)
    })
}

const entertainmentarticlesController = (req, response, next) => {
  model.getEntertainmentArticles()
    .then(results => {
      console.log(results)
      response.json(results)
    })
    .catch(err => {
      console.log(err)
    })
}

const healtharticlesController = (req, response, next) => {
  model.getHealthArticles()
    .then(results => {
      console.log(results)
      response.json(results)
    })
    .catch(err => {
      console.log(err)
    })
}

const technologyarticlesController = (req, response, next) => {
  model.getTechnologyArticles()
    .then(results => {
      console.log(results)
      response.json(results)
    })
    .catch(err => {
      console.log(err)
    })
}

module.exports = {
  sciencearticlesController,
  sportsarticlesController,
  businessarticlesController,
  entertainmentarticlesController,
  healtharticlesController,
  technologyarticlesController
}
