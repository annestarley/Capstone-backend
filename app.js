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

// let data = {"text": 'One Fox News insider said the comparison between the cable news network and Sinclair was ludicrous and the local TV anchors in a viral video “looked like hostage victims.”'}


// axios({
//   method: 'post',
//   url: 'https://gateway.watsonplatform.net/tone-analyzer/api/v3/tone?version=2016-05-19',
//   data: data,
//   auth: {
//     username: '8efacbc7-5172-4acb-960c-9c5ed3ff10e4',
//     password: 'ODefuwdWJxeJ'
//   }
// })
// .then(res => {
//   let emotionTone = res.data.document_tone.tone_categories[0].tones;
//   console.log(emotionTone)
//   let languageTone = res.data.document_tone.tone_categories[1].tones
//   console.log(languageTone);
//   let socialTone = res.data.document_tone.tone_categories[2].tones
//   console.log(socialTone)
//   let anger = emotionTone[0].score
//   console.log('ANGER!!!', anger)
//   let disgust = emotionTone[1].score
//   console.log('DISGUST!!', disgust)
//   let fear = emotionTone[2].score
//   console.log('FEAR!!!', fear)
//   let joy = emotionTone[3].score
//   console.log('JOY!!!', joy)
//   let analytical = languageTone[0].score
//   console.log('ANALYTICAL!!', analytical);
//   let confident = languageTone[1].score
//   console.log('CONFIDENT!', confident);
//   let tentative = languageTone[2].score
//   console.log('TENTATIVE', tentative);
//   let openness = socialTone[0].score
//   console.log('OPEN', openness);
//   let conscientiousness = socialTone[1].score
//   console.log('SOCIAL TONE', socialTone);
//   let extraversion = socialTone[2].score
//   console.log('EXTRAVERSION', extraversion);
//   let agreeableness = socialTone[3].score
//   console.log('AGREEABLENESS', agreeableness)
//   let emotionalRange = socialTone[4].score
//   console.log('EMOTIONAL RANGE', emotionalRange)
// })
// .catch(err => {
//   console.log(err);
// })


// MANY: Here it is not working

// axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=a4d490bdd93d405d8bc422ace61c795f`)
//   .then(res => {
//     let results = []
//       // let anger
//       // let disgust
//       // let fear
//       // let joy
//       // let sadness
//       // let analytical
//       // let confident
//       // let tentative
//       // let openness
//       // let conscientiousness
//       // let extraversion
//       // let agreeableness
//       // let emotionalRange
//     res.data.articles.forEach(article => {
//       let url = article.url
//
//       let obj = {
//         url: article.url,
//         title: article.title,
//         description: article.description,
//         source: article.source.name,
//         author: article.author,
//         image: article.urlToImage,
//       }
//
//       console.log(obj)
//       results.push(obj)
//
//       read(url, function(err, article, meta) {
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
//           // console.log(emotionTone)
//           let languageTone = res.data.document_tone.tone_categories[1].tones
//           // console.log(languageTone);
//           let socialTone = res.data.document_tone.tone_categories[2].tones
//           // console.log(socialTone)
//           // anger = emotionTone[0].score
//           // // console.log('ANGER!!!', anger)
//           // disgust = emotionTone[1].score
//           // // console.log('DISGUST!!', disgust)
//           // fear = emotionTone[2].score
//           // // console.log('FEAR!!!', fear)
//           // joy = emotionTone[3].score
//           // // console.log('JOY!!!', joy)
//           // analytical = languageTone[0].score
//           // // console.log('ANALYTICAL!!', analytical);
//           // confident = languageTone[1].score
//           // // console.log('CONFIDENT!', confident);
//           // tentative = languageTone[2].score
//           // // console.log('TENTATIVE', tentative);
//           // openness = socialTone[0].score
//           // // console.log('OPEN', openness);
//           // conscientiousness = socialTone[1].score
//           // // console.log('SOCIAL TONE', socialTone);
//           // extraversion = socialTone[2].score
//           // // console.log('EXTRAVERSION', extraversion);
//           // agreeableness = socialTone[3].score
//           // // console.log('AGREEABLENESS', agreeableness)
//           // emotionalRange = socialTone[4].score
//           // // console.log('EMOTIONAL RANGE', emotionalRange)
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
//
//           results.push(objTone)
//           console.log(objTone)
//           console.log('RESULTS!!!', results)
//         })
//         .catch(err => {
//           console.log(err);
//         })
//         article.close();
//       });
//     });
//     console.log('THE FINAL RESULTS!!!!!!!!!!!!!', results)
//   })
//   .catch(err => {
//     console.log(err);
//   })




// ONE: HERE IT IS WORKING !!!!!!!!!!!!!!!!!

// axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=a4d490bdd93d405d8bc422ace61c795f`)
//   .then(res => {
//     let results = []
//     let article =res.data.articles[0]
//       let url = article.url
//
//       let obj = {
//         url: article.url,
//         title: article.title,
//         description: article.description,
//         source: article.source.name,
//         author: article.author,
//         image: article.urlToImage,
//       }
//
//       results.push(obj)
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
//
//           results.push(objTone)
//           console.log('RESULTS!!!', results)
//
//
//         })
//         .catch(err => {
//           console.log(err);
//         })
//         article.close();
//       });
//
//   })
//   .catch(err => {
//     console.log(err);
//   })



app.listen(port, () => console.log(`Listening on port: ${port}`))

module.exports = app
