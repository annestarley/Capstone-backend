const model = require('../models/users')

const findUserToneController = (req, res, next) => {
  console.log(req.body.userInput);

  let userInput = req.body.userInput

  model.findUserToneModel(userInput)
  .then(results => {
    console.log(results)
    res.json(results)
  })
  .catch(err => {
    console.log(err);
  })
}

const userCreaterController = (req, res, next) => {
  console.log(req.body.userInput);

  let userInput = req.body.userInput

  model.postUserInfoModel(userInput)
  .then(results => {
    console.log(results)
    res.json(results)
  })
  .catch(err => {
    console.log(err);
  })
}

module.exports = {
  findUserToneController,
  userCreaterController
}
