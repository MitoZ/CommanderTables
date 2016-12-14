'use strict';
const webpack = require('webpack');
module.exports = {
  context: __dirname + '/app',
  entry: './index.js',
  output: {
    path: __dirname + '/app',
    filename: 'bundle.js'
  },
  // watch: true,
  watchOptions: {
    aggregateTimeOut: 100
  },
  devtool: 'cheap-module-inline-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['latest'],
          plugins: ['transform-runtime']
        },
        exclude: /(node_modules|bower_components)/
      },
      {test: /\.html$/, loader: 'raw'}
    ],
    noParse: /angular.js/
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin()
  ],
  
  devServer: {
    host: 'localhost',
    port: '8080',
    contentBase: __dirname + '/app'
  }
};