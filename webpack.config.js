const path = require('path');
const webpack = require('webpack');

const nodeEnv = process.env.NODE_ENV || 'production';
const PATHS = {
  app: path.join(__dirname, 'app'),
  dist: path.join(__dirname, 'dist'),
};

module.exports = {
  devtool: 'source-map',
  entry: {
    // app: PATHS.app,
    filename: './app/app.js',
  },
  output: {
    filename: 'bundle.js',
    path: PATHS.dist,
  },
  devServer: {
    contentBase: PATHS.dist,
    port: 8080,
    historyApiFallback: true,
    // hot: true,
    inline: true,
    progress: true,
    stats: 'errors-only',
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
      sourceMap: true,
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv) },
    }),
  ],
};
