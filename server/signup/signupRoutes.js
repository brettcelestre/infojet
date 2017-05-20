
let signupController = require('./signupController.js');

module.exports = function(app) {

  app.route('/')
    .post(signupController.signup)

};
