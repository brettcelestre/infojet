
let userController = require('./userController.js');

module.exports = function(app) {

  app.route('/signup')
    .post(userController.signup)

    .get((req, res) => {
      console.log('/signup GET - req.session.currentUser', req.session.currentUser);
      res.status(200).send(req.session.currentUser);
    })

  app.route('/login')
    .post(userController.login);

  app.route('/profile')
    .get(userController.profile);

  app.route('/feed')
    .get(userController.feed);

  app.route('/follow')
    .post(userController.follow);

};
