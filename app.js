const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 6000
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')
require('dotenv').config()

const axios = require('axios')
const read = require('node-readability')

app.use(bodyParser.json())
app.use(morgan('dev'))
app.disable('x-powered-by')
app.use(cors())

let users = require('./routes/users')
let toparticles = require('./routes/toparticles');
app.use('', users)
app.use('', toparticles)



// MANY: Here it is not working

// axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=a4d490bdd93d405d8bc422ace61c795f`)
//   .then(res => {
//     let results = []
//
//     res.data.articles.forEach(article => {
//       let url = article.url
//
//       let arr = [{
//         url: article.url,
//         title: article.title,
//         description: article.description,
//         source: article.source.name,
//         author: article.author,
//         image: article.urlToImage,
//       }]
//
//       results.push(arr)
//
//       read(url, function(err, article, meta) {
//
//         axios({
//           method: 'post',
//           url: 'https://gateway.watsonplatform.net/tone-analyzer/api/v3/tone?version=2016-05-19',
//           data: { "text": article.textBody},
//           auth: {
//             username: '8efacbc7-5172-4acb-960c-9c5ed3ff10e4',
//             password: 'ODefuwdWJxeJ'
//           }
//         })
//         .then(res => {
//           let emotionTone = res.data.document_tone.tone_categories[0].tones;
//           let languageTone = res.data.document_tone.tone_categories[1].tones
//           let socialTone = res.data.document_tone.tone_categories[2].tones
//
//           let objTone = {
//                 emotion: {
//                   anger: emotionTone[0].score,
//                   disgust: emotionTone[1].score,
//                   fear: emotionTone[2].score,
//                   joy: emotionTone[3].score
//                 },
//                 language: {
//                   analytical: languageTone[0].score,
//                   confident: languageTone[1].score,
//                   tentative: languageTone[2].score
//                 },
//                 social: {
//                   openness: socialTone[0].score,
//                   conscientiousness: socialTone[1].score,
//                   extraversion: socialTone[2].score,
//                   agreeableness: socialTone[3].score,
//                   emotionalRange: socialTone[4].score
//                 }
//               }
//
//           arr.push(objTone)
//           console.log('RESULTS!!!', results)
//         })
//         .catch(err => {
//           console.log(err);
//         })
//         article.close();
//       });
//     });
//   })
//   .catch(err => {
//     console.log(err);
//   })
//



app.listen(port, () => console.log(`Listening on port: ${port}`))

module.exports = app
