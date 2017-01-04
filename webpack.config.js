'use strict';
const webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let SvgStore = require('webpack-svgstore-plugin');
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
  devtool: 'eval'/*'module-inline-source-map'*/,
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
      {
        test: /\.html$/,
        loader: 'raw'
      },
      {
        test: /\.(jpe?g|png|gif|ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,//|svg
        loader: 'base64-inline-loader'
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss?sourceMap=inline!less')//,//?sourceMapLessInline=true
        // exclude: /^_[\w\d]*.less$/
      },
      {
        test: /\.css/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss?sourceMap=inline')
      }
    ],
    noParse: /angular.js/
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin()
    new webpack.OldWatchingPlugin(),
    new ExtractTextPlugin('[name].css', {allChunks: true}),
    new SvgStore.Options({
      // svgo options
      /*svgoOptions: {
        plugins: [
          { removeTitle: true }
        ]
      }*/
    })
  ],
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.css']
  },
  postcss: function () {
    return [
      require('autoprefixer'),
      require('cssnano')
    ];
  },
  
  devServer: {
    host: 'localhost',
    port: '8080',
    contentBase: __dirname + '/app',
    historyApiFallback: true/*{
      index: __dirname + '/app/index.html'
    }*/,
    inline: true,
    compress: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
};