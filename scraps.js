


  read('https://www.wsj.com/articles/trump-administration-plans-to-check-your-answer-on-new-census-citizenship-question-1522781033', function(err, article, meta) {
    // console.log(article.content);
    console.log('textBody!!!!!!!!--------------', article.textBody);
    article.close();
  });





  // Practice
  axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=a4d490bdd93d405d8bc422ace61c795f`)
    .then(res => {
      let results = []
      res.data.articles.forEach(article => {
        let url = article.url
        // // console.log('URL!!!!');
        // let title = article.title
        // // console.log('TITLE!!!!', title);
        // let description = article.description
        // // console.log("DESCRIPION!!!", description);
        // let source = article.source.name
        // // console.log("SOURCE!!!!", source)
        // let author = article.author
        // // console.log("AUTHOR!!!!", author)
        // let image = article.urlToImage
        // // console.log("IMAGE!!!!", image)
        read(url, function(err, article, meta) {
          // console.log(article.content);
          // console.log('textBody!!!!!!!!--------------', article.textBody);
          article.close();
        });
        let obj = {
          url: article.url,
          title: article.title,
          description: article.description,
          source: article.source.name,
          author: article.author,
          image: article.urlToImage
        }
        // console.log(obj)
        results.push(obj)
      })
      // console.log(results)
    })
    .catch(err => {
      console.log(err);
    })



    axios({
      method: 'post',
      url: 'https://gateway.watsonplatform.net/tone-analyzer/api/v3/tone?version=2016-05-19',
      data: data,
      auth: {
        username: '8efacbc7-5172-4acb-960c-9c5ed3ff10e4',
        password: 'ODefuwdWJxeJ'
      }
    })
    .then(res => {
      let emotionTone = res.data.document_tone.tone_categories[0].tones;
      console.log(emotionTone)
      let languageTone = res.data.document_tone.tone_categories[1].tones
      console.log(languageTone);
      let socialTone = res.data.document_tone.tone_categories[2].tones
      console.log(socialTone)
      let anger = emotionTone[0].score
      console.log('ANGER!!!', anger)
      let disgust = emotionTone[1].score
      console.log('DISGUST!!', disgust)
      let fear = emotionTone[2].score
      console.log('FEAR!!!', fear)
      let joy = emotionTone[3].score
      console.log('JOY!!!', joy)
      let analytical = languageTone[0].score
      console.log('ANALYTICAL!!', analytical);
      let confident = languageTone[1].score
      console.log('CONFIDENT!', confident);
      let tentative = languageTone[2].score
      console.log('TENTATIVE', tentative);
      let openness = socialTone[0].score
      console.log('OPEN', openness);
      let conscientiousness = socialTone[1].score
      console.log('SOCIAL TONE', socialTone);
      let extraversion = socialTone[2].score
      console.log('EXTRAVERSION', extraversion);
      let agreeableness = socialTone[3].score
      console.log('AGREEABLENESS', agreeableness)
      let emotionalRange = socialTone[4].score
      console.log('EMOTIONAL RANGE', emotionalRange)
    })
    .catch(err => {
      console.log(err);
    })





    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=a4d490bdd93d405d8bc422ace61c795f`)
      .then(res => {
        let results = []
        let anger
        let disgust
        let fear
        let joy
        let sadness
        let analytical
        let confident
        let tentative
        let openness
        let conscientiousness
        let extraversion
        let agreeableness
        let emotionalRange
        let article =res.data.articles[0]
          let url = article.url
          read(url, function(err, article, meta) {
            // console.log(article.content);
            // console.log('textBody!!!!!!!!--------------', article.textBody);
            axios({
              method: 'post',
              url: 'https://gateway.watsonplatform.net/tone-analyzer/api/v3/tone?version=2016-05-19',
              data: { "text": article.textBody},
              auth: {
                username: '8efacbc7-5172-4acb-960c-9c5ed3ff10e4',
                password: 'ODefuwdWJxeJ'
              }
            })
            .then(res => {
              let emotionTone = res.data.document_tone.tone_categories[0].tones;
              console.log(emotionTone)
              let languageTone = res.data.document_tone.tone_categories[1].tones
              console.log(languageTone);
              let socialTone = res.data.document_tone.tone_categories[2].tones
              console.log(socialTone)
              anger = emotionTone[0].score
              console.log('ANGER!!!', anger)
              disgust = emotionTone[1].score
              console.log('DISGUST!!', disgust)
              fear = emotionTone[2].score
              console.log('FEAR!!!', fear)
              joy = emotionTone[3].score
              console.log('JOY!!!', joy)
              analytical = languageTone[0].score
              console.log('ANALYTICAL!!', analytical);
              confident = languageTone[1].score
              console.log('CONFIDENT!', confident);
              tentative = languageTone[2].score
              console.log('TENTATIVE', tentative);
              openness = socialTone[0].score
              console.log('OPEN', openness);
              conscientiousness = socialTone[1].score
              console.log('SOCIAL TONE', socialTone);
              extraversion = socialTone[2].score
              console.log('EXTRAVERSION', extraversion);
              agreeableness = socialTone[3].score
              console.log('AGREEABLENESS', agreeableness)
              emotionalRange = socialTone[4].score
              console.log('EMOTIONAL RANGE', emotionalRange)
            })
            .catch(err => {
              console.log(err);
            })
            article.close();
          });
          let obj = {
            url: article.url,
            title: article.title,
            description: article.description,
            source: article.source.name,
            author: article.author,
            image: article.urlToImage,
            tones: {
              emotion: {
                anger,
                disgust,
                fear,
                joy
              },
              language: {
                analytical,
                confident,
                tentative
              },
              social: {
                openness,
                conscientiousness,
                extraversion,
                agreeableness,
                emotionalRange
              }
            }
          }
          console.log(obj)
          results.push(obj)

        console.log(results)
      })
      .catch(err => {
        console.log(err);
      })





      let obj = {
        url: article.url,
        title: article.title,
        description: article.description,
        source: article.source.name,
        author: article.author,
        image: article.urlToImage,
        tones: {
          emotion: {
            anger: anger || '0.0',
            disgust: disgust || '0.0',
            fear: fear || '0.0',
            joy: joy || '0.0'
          },
          language: {
            analytical: analytical || '0.0',
            confident: confident || '0.0',
            tentative: tentative || '0.0'
          },
          social: {
            openness: openness || '0.0',
            conscientiousness: conscientiousness || '0.0',
            extraversion: extraversion || '0.0',
            agreeableness: agreeableness || '0.0',
            emotionalRange: emotionalRange || '0.0'
          }
        }
      }
      console.log('anger', anger)
      console.log('fear', fear)
      console.log('joy', joy)
      console.log(obj)
      results.push(obj)

    console.log(results)



    // axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=a4d490bdd93d405d8bc422ace61c795f`)
    //   .then(res => {
    //     let results = []
    //     let article =res.data.articles[0]
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
    //
    //           arr.push(objTone)
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
