'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  debug: true,
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, 'app/js/Index.js')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('app.css'),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 1337,
      server: {baseDir: [path.join(__dirname, '/dist/')]}
    }, {
      reload: true
    })
  ],
  resolve: {
    root: path.resolve('./'),
    modulesDirectories: ['node_modules']
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.json?$/,
      loader: 'json'
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(
          'style', // backup loader when not building .css file
          'css!sass' // loaders to preprocess CSS
      )
    }]
  }
};
