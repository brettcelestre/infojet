let express = require('express'),
    // Imports middleware
    middleware = require('./config/middleware.js'),
    // Creates a session
    session = require('express-session'),
    // Creates express server instance
    app = express();

let PORT = process.env.PORT || 9000;

app.use(session({
  secret: "caravaggio",
  resave: true,
  saveUninitialized: true
}));

// Sets up middleware with routes
middleware(app, express);

app.listen(PORT);


console.log('Listening on port:', PORT);
console.log('Environment:', app.get('env'));

// export app
module.exports = app;
