
let userController = require('./userController.js');

module.exports = function(app) {

  app.route('/signup')
    .post(userController.signup);

  app.route('/login')
    .post(userController.login);

  app.route('/profile')
    .get();

  app.route('/feed')
    .get();

  app.route('/follow')
    .post();

};
