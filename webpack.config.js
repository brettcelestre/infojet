
var path = require('path');
var buildPath = path.resolve(__dirname, 'public');

module.exports = {
  entry: './src/index.js',
  output: {
    path: buildPath,
    publicPath: 'http://localhost:8080/public/',
    filename: 'bundle.js',
  },
  devServer: { inline: true },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: 'babel-loader',
        query: { presets: [ 'es2015', 'react' ] },
      },
    ],
  },
};
