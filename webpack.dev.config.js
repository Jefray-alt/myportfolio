const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  // optimazation: {
  //   splitChunks: {
  //     chunks: 'all',
  //     minSize: 10000,
  //     automaticNameDelimiter: '_',
  //   },
  // },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    index: 'index.html',
    port: 9000,
  },
  module: {
    rules: [
      //   { test: /\(.png|jpg)$/, use: ['file-loader'] },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.js$/,
        exclude: '/node/modules/',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            //   plugins: ['transform-class-properties']
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Hello World',
      template: 'src/index.html',
    }),
  ],
};
