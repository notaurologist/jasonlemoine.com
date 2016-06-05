/*
 * Webpack dev configuration
 */
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = require('./webpack.config.base')({
  devtool: 'cheap-module-eval-source-map',
  entry: [
    path.resolve('src/index.js'),
  ],
  output: {
    filename: 'app.js',
  },
  cssLoaders: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]!postcss'),
  plugins: [
    new ExtractTextPlugin('app.css', {
      allChunks: true,
    }),
  ],
  babelQuery: {
    cacheDirectory: true,
  },
});
