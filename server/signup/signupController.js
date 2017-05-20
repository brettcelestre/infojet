
// Imports user model
let User = require('./signupModel.js');

module.exports = {

    signup: (req, res) => {
      console.log('/signup');
      res.send('/signup - POST')
    }

}
