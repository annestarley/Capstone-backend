const axios = require('axios')
const read = require('node-readability')
const pify = require('pify')

const readPromise = pify(read)

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

    let objTone = {
      emotion: {
        anger: emotionTone[0].score,
        disgust: emotionTone[1].score,
        fear: emotionTone[2].score,
        joy: emotionTone[3].score
      },
      language: {
        analytical: languageTone[0].score,
        confident: languageTone[1].score,
        tentative: languageTone[2].score
      },
      social: {
        openness: socialTone[0].score,
        conscientiousness: socialTone[1].score,
        extraversion: socialTone[2].score,
        agreeableness: socialTone[3].score,
        emotionalRange: socialTone[4].score
      }
    }

    article.tone = objTone
    // console.log('RESULTS!!!', article)
    return article
  })
}

const getTopArticles = () => {
  return axios.get(`https://newsapi.org/v2/top-headlines?country=us&pageSize=2&apiKey=a4d490bdd93d405d8bc422ace61c795f`)
    .then(res => {

      let promises = res.data.articles.map(article => {
        return getArticleTones(article)
      })

      return Promise.all(promises)
    })
    // .then(results => {
    //   console.log(results)
    // })
    // .catch(err => {
    //   console.log(err);
    // })
}

module.exports = {
  getTopArticles
}
