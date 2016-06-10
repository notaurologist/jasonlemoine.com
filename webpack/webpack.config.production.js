/*
 * Webpack prod configuration
 */
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OfflinePlugin = require('offline-plugin');

module.exports = require('./webpack.config.base')({
  devtool: 'source-map',
  entry: [
    path.resolve('src/index.js'),
  ],
  output: {
    filename: 'app.[hash].js',
  },
  cssLoaders: ExtractTextPlugin.extract('style', 'css?minimize&modules&importLoaders=1&localIdentName=[name]__[local]!postcss'),
  plugins: [
		new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.AggressiveMergingPlugin(),
    new ExtractTextPlugin('app.[hash].css', {
      allChunks: true,
    }),
    new OfflinePlugin({
      cache: {
        main: ['index.html', '*.js', '*.css', '*.json'],
        additional: ['images/*'],
      },
      externals: ['*.json', 'images/*'],
      version: '[hash]',
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false,
      },
    }),
  ],
  babelQuery: {
    cacheDirectory: true,
  },
});
