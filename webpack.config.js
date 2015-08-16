var path = require('path');
var webpack = require('webpack');

var currentEnv = process.env.NODE_ENV
var env = {
  test: currentEnv === 'test',
  development: currentEnv === 'development',
  production: currentEnv === 'production'
}

var index = './src/index'

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: env.production ? index : [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    index
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/pub/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules/,
      include: __dirname
    }, {
      test: /\.s?css$/,
      loaders: ['style', 'css?sourceMap!', 'sass?sourceMap']
    }]
  }
};
