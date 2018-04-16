var nodemailer = require('nodemailer')
const knex = require('./db')
var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
        user: 'heygoodnewsforyou@gmail.com',
        pass: 'heygoodnews'
    }
});

let joyousURL
let joyousArticle

knex('top_articles')
  .orderBy('id', 'desc')
  .limit(10)
  .then(articles => {
    joyousArticle = articles[0]
    joyousURL = articles[0].url
    articles.forEach(article => {
      if (article.joy > joyousArticle.joy) {
        joyousArticle = article
        joyousURL = article.url
      }
    })
    knex('users').returning('*')
      .then(users => {
        users.forEach(user => {
          var mailOptions = {
              from: 'heygoodnewsforyou@gmail.com',
              to: user.email,
              subject: `Hey ${user.username}, good news!`,
              html: `<h2>Hey ${user.username},</h2><h3>Ready for some good news? Here is the link to your daily joyous news article, "${joyousArticle.title}" from ${joyousArticle.source}! ${joyousURL}</h3><h3>Hope this brightens your day.</h3><h3>Cheers from Hey, Good News!</h3>`
          };

          transporter.sendMail(mailOptions, function (err, info) {
             if(err)
               console.log(err)
             else
               console.log(info);
          });

        })
      })
  })
  .then(insert => {
    knex.destroy()
  })
  .catch(err => {
    console.log(err)
  })
