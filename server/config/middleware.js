let morgan = require('morgan'),
    bodyParser = require('body-parser');

let userRoutes = require('../user/userRoutes.js');

module.exports = (app, express) => {

  // Logs server activity
  app.use(morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms'
    ].join(' ')
  }));

  app.use(bodyParser.urlencoded({extended: true}));
  // Parse JSON
  app.use(bodyParser.json());
  // Serves index
  app.use(express.static(__dirname + '/../../src'));

  // User Routes
  let userRouter = express.Router();
  userRoutes(userRouter);
  app.use('/api/user', userRouter);

  // Search Routes

}
