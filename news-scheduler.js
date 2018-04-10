#!/usr/bin/env node

let model = require('./models/toparticles')
let knex = require('./db')

model.fetchTopArticles()
  .then(result => {
    let promises = result.map(article => {
      return knex('top_articles').where('title', article.title).first()
        .then(res => {
          if (!res) {
            return knex('top_articles').insert(article).returning('*')
          }
        })
    })
    return Promise.all(promises)
  })
  .then(insert => {
    knex.destroy()
  })
  .catch(err => {
    console.log(err)
  })

// model.fetchScienceArticles()
//   .then(result => {
//     let promises = result.map(article => {
//       return knex('top_articles').where('title', article.title).first()
//         .then(res => {
//           if (!res) {
//             return knex('top_articles').insert(article).returning('*')
//           }
//         })
//     })
//     return Promise.all(promises)
//   })
//   .then(insert => {
//     knex.destroy()
//   })
//   .catch(err => {
//     console.log(err)
//   })
//
// model.fetchSportsArticles()
//   .then(result => {
//     let promises = result.map(article => {
//       return knex('top_articles').where('title', article.title).first()
//         .then(res => {
//           if (!res) {
//             return knex('top_articles').insert(article).returning('*')
//           }
//         })
//     })
//     return Promise.all(promises)
//   })
//   .then(insert => {
//     knex.destroy()
//   })
//   .catch(err => {
//     console.log(err)
//   })
//
// model.fetchBusinessArticles()
//   .then(result => {
//     let promises = result.map(article => {
//       return knex('top_articles').where('title', article.title).first()
//         .then(res => {
//           if (!res) {
//             return knex('top_articles').insert(article).returning('*')
//           }
//         })
//     })
//     return Promise.all(promises)
//   })
//   .then(insert => {
//     knex.destroy()
//   })
//   .catch(err => {
//     console.log(err)
//   })
//
// model.fetchEntertainmentArticles()
//   .then(result => {
//     let promises = result.map(article => {
//       return knex('top_articles').where('title', article.title).first()
//         .then(res => {
//           if (!res) {
//             return knex('top_articles').insert(article).returning('*')
//           }
//         })
//     })
//     return Promise.all(promises)
//   })
//   .then(insert => {
//     knex.destroy()
//   })
//   .catch(err => {
//     console.log(err)
//   })
//
// model.fetchHealthArticles()
//   .then(result => {
//     let promises = result.map(article => {
//       return knex('top_articles').where('title', article.title).first()
//         .then(res => {
//           if (!res) {
//             return knex('top_articles').insert(article).returning('*')
//           }
//         })
//     })
//     return Promise.all(promises)
//   })
//   .then(insert => {
//     knex.destroy()
//   })
//   .catch(err => {
//     console.log(err)
//   })
//
// model.fetchTechnologyArticles()
//   .then(result => {
//     let promises = result.map(article => {
//       return knex('top_articles').where('title', article.title).first()
//         .then(res => {
//           if (!res) {
//             return knex('top_articles').insert(article).returning('*')
//           }
//         })
//     })
//     return Promise.all(promises)
//   })
//   .then(insert => {
//     knex.destroy()
//   })
//   .catch(err => {
//     console.log(err)
//   })
