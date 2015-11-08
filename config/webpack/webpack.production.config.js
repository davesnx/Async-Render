import path from'path';
import webpack from'webpack';
import HtmlWebpackPlugin from'html-webpack-plugin';
import ExtractTextPlugin from'extract-text-webpack-plugin';
import StatsPlugin from'stats-webpack-plugin';

export default {
  cache: false,
  debug: false,
  devtool: false,
  hot: false,
  build: true,
  entry: [
    path.join(__dirname, '..', '..', 'app/js/Index.js')
  ],
  output: {
    path: path.join(__dirname, '..', '..', '/dist/'),
    filename: '[name]-[hash].min.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '..', '..', 'app/index.html'),
      inject: 'body',
      filename: 'index.html'
    }),
    new ExtractTextPlugin('[name]-[hash].min.css'),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new StatsPlugin('webpack.stats.json', {
      source: false,
      modules: false
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.json?$/,
      loader: 'json'
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[name]---[local]---[hash:base64:5]!postcss')
    }]
  },
  postcss: [
    require('autoprefixer')
  ]
};
