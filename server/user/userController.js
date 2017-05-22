
// Imports user model
let User = require('./userModel.js');

module.exports = {

    signup: (req, res) => {
      // Sign Up Logic
      res.send('api/user/signup - POST')
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
