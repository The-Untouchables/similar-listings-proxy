var path = require('path');
var SRC_DIR = path.join(__dirname, '/client');

module.exports = {
  entry: `${SRC_DIR}/app.jsx`,
  output: {
    filename: 'app.js',
    path: __dirname + '/public'
  },
  module : {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env']
        }
      }
    ]
  }
};
