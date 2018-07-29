require('babel-polyfill');
const path = require('path');
const ES3ifyPlugin = require('es3ify-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', './src/js/datePicker.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    library: 'DatePicker',
    libraryTarget: 'umd'
  },
  devServer: {
    historyApiFallback: false,
    progress: true,
    inline: true,
    host: '0.0.0.0',
    disableHostCheck: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(dist|node_modules)/,
        loader: 'babel-loader?cacheDirectory'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new ES3ifyPlugin(),
    new HtmlWebpackPlugin(),
    new CleanWebpackPlugin(['dist'])
  ]
};
