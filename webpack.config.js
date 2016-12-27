'use strict';
const webpack = require('webpack');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  context: __dirname + '/app',
  entry: {
    index: './Modules/index.js'
  },
  output: {
    path: __dirname + '/app',
    filename: '[name].js'
  },
  watch: true,
  watchOptions: {
    aggregateTimeOut: 50
  },
  devtool: 'module-inline-source-map',
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
      {test: /\.html$/, loader: 'raw'},
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss?sourceMap=inline!less')//,//?sourceMapLessInline=true
        // exclude: /^_[\w\d]*.less$/
      },
      {test: /\.css/, loader: 'style!css!postcss?sourceMap=inline'}
    ],
    noParse: /angular.js/
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin()
    new webpack.OldWatchingPlugin(),
    new ExtractTextPlugin('[name].css', {allChunks: true})
  ],
  postcss: function () {
    return [require('autoprefixer'), require('cssnano')];
  },
  
  devServer: {
    host: 'localhost',
    port: '8080',
    contentBase: __dirname + '/app',
    inline: true,
    compress: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
};