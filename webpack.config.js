'use strict';

const webpack = require('webpack');
const APP = __dirname + '/app';

module.exports = {
  context: APP,
  entry: {
    app: [
      `${__dirname}/app.js`
    ]
  },
  output: {
    path: APP,
    filename: 'bundled.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style!css?root=."
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass?root=.'
      },
      {
        test: /\.less$/,
        loader: "style!css!less?root=."
      },
      {
        test: /\.jpg$|\.png$/,
        loader: "file-loader"
      },
      {
        test: /\.jpg$|\.png$/,
        loader: "url-loader?limit=100000"
      },
      {
        test: /\.js$/,
        loader: 'ng-annotate!babel?presets[]=es2015!jshint',
        exclude: /node_modules|bower_components/
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)(\?]?.*)?$/,
        loader : 'file-loader?name=res/[name].[ext]?[hash]'
      },
      {
        test: /\.html/,
        loader: 'raw'
      },
      {
        test: /\.json/,
        loader: 'json'
      }
    ]
  },
  resolve: {
    root: APP
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        except: ['$super', '$', 'exports', 'require']
      }
    }),
    new webpack.DefinePlugin({
      MODE: {
        production: process.env.NODE_ENV === 'production'
      }
    })
  ]
};
