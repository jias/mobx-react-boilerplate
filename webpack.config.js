var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
        // 'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) },
        __CLIENT__: JSON.stringify(true),
        __SERVER__: JSON.stringify(false),
    }),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }]
  }
};
