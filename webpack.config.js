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
    filename: 'app.min.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style!css?root=."
      },
      {
        test: /\.less$/,
        loader: "style!css!less?root=."
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: "file-loader?name=images/[name].[ext]?[hash]"
      },
      {
        test: /\.js$/,
        loader: 'ng-annotate!babel?presets[]=es2015!jshint',
        exclude: /node_modules|bower_components/
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)(\?]?.*)?$/,
        loader : 'file-loader?name=fonts/[name].[ext]?[hash]'
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
    }),
    function()
    {
      this.plugin("done", function(stats)
      {
        if (stats.compilation.errors && stats.compilation.errors.length)
        {
          console.log('webpack error count', stats.compilation.errors.length);
          console.log(stats.compilation.errors);
          process.exit(1);
        }
      });
    }
  ]
};
