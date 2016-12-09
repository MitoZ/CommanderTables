'use strict';

module.exports = {
  context: __dirname + '/app',
  entry: './index.js',
  output: {
    path: __dirname + '/app',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel'},
      {test: /\.html$/, loader: 'raw'}
    ]
  },
  devServer: {
    host: 'localhost',
    port: '8080',
    contentBase: __dirname + '/app'
  }
};