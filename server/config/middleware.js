let morgan = require('morgan'),
    bodyParser = require('body-parser');

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

  // Sign Up Routes
  let signupRouter = express.Router();
  app.use('/signup', signupRouter);
  require('../signup/signupRoutes.js')(signupRouter);

  // Login Routes
  // app.use('/login', loginRouter);

  // Authentication Routes
  // app.use('/auth', authRouter);

  // User Routes

    // ~/profile
    // ~/feed
    // ~/follow

  // Search Routes

}
