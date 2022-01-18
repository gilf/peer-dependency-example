const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    dev: path.resolve(__dirname, 'src/dev.js'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'sourcemap',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          publicPath: 'assets',
        },
      },
      {
        test: /svg$/i,
        loader: 'svg-url-loader',
        options: {
          publicPath: 'assets',
          limit: 10000,
        },
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    open: true,
    watchContentBase: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      chunks: ['dev'],
    }),
  ],
};
