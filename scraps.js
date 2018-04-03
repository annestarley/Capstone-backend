


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
