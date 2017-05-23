
// Imports user model
let User = require('./userModel.js');

module.exports = {

    signup: (req, res) => {
      console.log('/signup POST req.body:', req.body);
      req.session.currentUser = req.body
      // Sign Up Logic
      res.send(req.body)
    },

    login: (req, res) => {
      // Login Logic
      res.send('api/user/login - POST')
    },

    profile: (req, res) => {
      // Profile Logic
      res.send('api/user/profile - GET')
    },

    feed: (req, res) => {
      // Feed Logic
      res.send('api/user/feed - GET')
    },

    follow: (req, res) => {
      // Follow Logic
      res.send('api/user/follow - POST')
    },

}
