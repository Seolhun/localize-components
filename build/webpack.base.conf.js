const path = require('path');
const utils = require('./utils');
const config = require('../config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  entry: {
    index: resolve('./docs/index.tsx'),
  },
  output: {
    path: config.build.assetsRoot,
    filename: 'bundle.js',
    publicPath:
      process.env.NODE_ENV === 'production'
        ? config.build.assetsPublicPath
        : config.dev.assetsPublicPath,
  },
  mode: process.env.NODE_ENV,
  resolve: {
    extensions: ['.js', 'jsx', '.ts', '.tsx', 'json', 'scss'],
    alias: {
      '@': resolve('src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('docs')],
      },
      {
        test: /\.(tsx|ts)?$/,
        loader: 'ts-loader',
        include: [resolve('src'), resolve('docs')],
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]'),
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]'),
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].scss',
      chunkFilename: '[id].scss',
    }),
  ],
};
