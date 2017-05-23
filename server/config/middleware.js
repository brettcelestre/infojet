let morgan = require('morgan'),
    path = require('path'),
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
  app.use(express.static(__dirname + '/../../public'));

  app.all('*', function (req, res, next) {
    console.log('* APP hit');
    if (!req.url.match(/\/api\/*/g)) {
      res.sendFile(path.resolve(__dirname + '/../../public/index.html'));
    } else {
      next();
    }
  });

  // create-react-app setup
  // package.json npm start - "start": "concurrently \"react-scripts start\" \"nodemon server/server.js\"",

  // custom webpack
  // "start": "concurrently \"nodemon server/server.js\" \"webpack-dev-server --content-base "http://localhost:9000/" --colors\"",

  // User Routes
  let userRouter = express.Router();
  userRoutes(userRouter);
  app.use('/api/user', userRouter);

  // Search Routes

}
