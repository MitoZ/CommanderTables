'use strict';
const webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  context: __dirname + '/CT_APP',
  entry: {
    index: './App/application.js'
  },
  output: {
    path: __dirname + '/CT_APP',
    filename: '[name].js'
  },
  // watch: true,
  watchOptions: {
    aggregateTimeOut: 50
  },
  // devtool: 'eval',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: [["latest", {
            "es2015": {
              "modules": false
            }
          }]]/*,
          plugins: ['transform-runtime']*/
        }
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      },
      {
        test: /\.(jpe?g|png|gif|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,//
        loader: 'base64-inline-loader'
      },
      {
        test: /\.scss/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          // 'css!postcss?sourceMap=inline!resolve-url!sass-loader?sourceMap',
          use: [
            {
              loader: 'css-loader'/*,
             options: {
             modules: true
             }*/
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                plugins: function () {
                  return [
                    require('autoprefixer'),
                    require('cssnano')
                  ]
                }
              }
            },
            {
              loader: 'resolve-url-loader'
            },
            {
              loader: 'sass-loader',
              options:{
                sourceMap: true
              }
            }
          ]
        })
      },
      {
        test: /\.css/,
        use: ExtractTextPlugin.extract(/*'style', 'css!postcss?sourceMap=inline'*/{
          fallback: 'style-loader',
          // 'css!postcss?sourceMap=inline!resolve-url!sass-loader?sourceMap',
          use: [
            {
              loader: 'css-loader'/*,
             options: {
             modules: true
             }*/
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                plugins: function () {
                  return [
                    require('autoprefixer'),
                    require('cssnano')
                  ]
                }
              }
            },
            {
              loader: 'resolve-url-loader'
            }
          ]
        })
      }
    ],
    noParse: /angular.js/
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin(),
    // new webpack.OldWatchingPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new ExtractTextPlugin({
      filename:'[name].css',
      allChunks: true
    })
  ],
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.css', '.scss', '.html']
  },
  
  devServer: {
    host: 'localhost',
    port: '80',
    https: true,
    contentBase: __dirname + '/CT_APP',
    historyApiFallback: true,
    inline: true,
    hot: true,
    compress: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
};