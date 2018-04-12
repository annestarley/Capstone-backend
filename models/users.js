const axios = require('axios')
const knex = require('../db')

const findUserToneModel = (userInput) => {
  return axios({
    method: 'post',
    url: 'https://gateway.watsonplatform.net/tone-analyzer/api/v3/tone?version=2016-05-19',
    data: { "text": userInput},
    auth: {
      username: '8efacbc7-5172-4acb-960c-9c5ed3ff10e4',
      password: 'ODefuwdWJxeJ'
    }
  })
  .then(res => {
    let article = {}
    
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

module.exports = {
  findUserToneModel
}
