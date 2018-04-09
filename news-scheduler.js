#!/usr/bin/env node


let model = require('./models/toparticles')
let db = require('./db')

model.getTopArticles()
  .then(result => {
    result.forEach(article => {
      model.addArticle(article)
        .then(done => console.log('article done', done.id))
        .catch(console.error)
    })
    // return model.addArticle(result)
  })
  .then(insert => {
    console.log(insert);
    // process.exit(0)
    // db.destroy()
  })
  .catch(err => {
    console.log(err)
  })
