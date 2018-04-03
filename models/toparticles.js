const axios = require('axios')
const read = require('node-readability')

const getTopArticles = () => {
  return axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=a4d490bdd93d405d8bc422ace61c795f`)
    .then(res => {
      let results = []
      res.data.articles.forEach(article => {
        let url = article.url
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
        results.push(obj)
      })
      return results
    })
    .catch(err => {
      console.log(err);
    })
}

module.exports = {
  getTopArticles
}
