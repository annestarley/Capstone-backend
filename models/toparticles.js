const axios = require('axios')
const read = require('node-readability')
const pify = require('pify')
const knex = require('../db')

const readPromise = pify(read)

const addArticle = (article) => {
  return knex('top_articles').insert(article).returning('*')
}

const getArticleTones = (article) => {
  return readPromise(article.url)
  .then((article, meta) => {
    return axios({
      method: 'post',
      url: 'https://gateway.watsonplatform.net/tone-analyzer/api/v3/tone?version=2016-05-19',
      data: { "text": article.textBody},
      auth: {
        username: '8efacbc7-5172-4acb-960c-9c5ed3ff10e4',
        password: 'ODefuwdWJxeJ'
      }
    })
  })
  .then(res => {
    let emotionTone = res.data.document_tone.tone_categories[0].tones;
    let languageTone = res.data.document_tone.tone_categories[1].tones
    let socialTone = res.data.document_tone.tone_categories[2].tones

    article.anger = emotionTone[0].score,
    article.disgust = emotionTone[1].score,
    article.fear = emotionTone[2].score,
    article.joy = emotionTone[3].score,
    article.analytical = languageTone[0].score,
    article.confident = languageTone[1].score,
    article.tentative = languageTone[2].score,
    article.openness = socialTone[0].score,
    article.conscientiousness = socialTone[1].score,
    article.extraversion = socialTone[2].score,
    article.agreeableness = socialTone[3].score

    return article
  })
}

const getTopArticles = () => {
  return axios.get(`https://newsapi.org/v2/top-headlines?country=us&pageSize=4&apiKey=a4d490bdd93d405d8bc422ace61c795f`)
    .then(res => {

      let promises = res.data.articles.map(article => {
        article.source = article.source.name
        return getArticleTones(article)
      })

      return Promise.all(promises)
    })
}

const getAdditionalArticles = (category) => {
  return axios.get(`https://newsapi.org/v2/top-headlines?country=us&pageSize=2&category=${category}&apiKey=a4d490bdd93d405d8bc422ace61c795f`)
    .then(res => {

      let promises = res.data.articles.map(article => {
        return getArticleTones(article)
      })

      return Promise.all(promises)
    })
}

const getTopArticlesForFrontend =() => {
  return knex('topArticles')
}

getUserArticle = (userURL) => {
  let result = {}

  return readPromise(userURL)
  .then((article, meta) => {
    result.title = article.title
    return axios({
      method: 'post',
      url: 'https://gateway.watsonplatform.net/tone-analyzer/api/v3/tone?version=2016-05-19',
      data: { "text": article.textBody},
      auth: {
        username: '8efacbc7-5172-4acb-960c-9c5ed3ff10e4',
        password: 'ODefuwdWJxeJ'
      }
    })
  })
  .then(res => {
    let emotionTone = res.data.document_tone.tone_categories[0].tones;
    let languageTone = res.data.document_tone.tone_categories[1].tones
    let socialTone = res.data.document_tone.tone_categories[2].tones

    result.anger = emotionTone[0].score,
    result.disgust = emotionTone[1].score,
    result.fear = emotionTone[2].score,
    result.joy = emotionTone[3].score,
    result.analytical = languageTone[0].score,
    result.confident = languageTone[1].score,
    result.tentative = languageTone[2].score,
    result.openness = socialTone[0].score,
    result.conscientiousness = socialTone[1].score,
    result.extraversion = socialTone[2].score,
    result.agreeableness = socialTone[3].score

    return result
  })
}

module.exports = {
  addArticle,
  getTopArticles,
  getAdditionalArticles,
  getTopArticlesForFrontend,
  getUserArticle
}
