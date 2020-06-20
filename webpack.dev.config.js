const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
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
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        use: ['file-loader?name=[hash].[ext]&outputPath=img/&publicPath=img/'],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
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
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Hello World',
      template: 'src/index.html',
      favicon: './src/img/favicon.ico',
    }),
  ],
};
