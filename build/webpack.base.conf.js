const path = require('path');
const utils = require('./utils');
const config = require('../config');

var marked = require('marked');
var hljs = require('highlight.js');
var renderer = new marked.Renderer();
renderer.code = function (code, language) {
  return `<pre><code class="hljs ${language}>${hljs.highlight(language, code).value}</code></pre>`;
};

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    main: resolve('./src/main.tsx'),
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath,
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', 'scss'],
    alias: {
      '@': resolve('./src/'),
      'components': resolve('./src/components'),
      'assets': resolve('./src/assets'),
      'scss': resolve('./src/assets/scss'),
      'images': resolve('./src/assets/images'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')],
      }, {
        test: /\.(tsx|ts)?$/,
        loader: 'awesome-typescript-loader',
        include: [resolve('src'), resolve('test')],
        exclude: /node_modules/,
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }, {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
          options: {
            sourceMap: true,
          },
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
          },
        }],
      }, {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        },
      }, {
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: 'markdown-loader',
            options: {
              pedantic: true,
              gfm: true,
              tables: true,
              breaks: false,
              pedantic: false,
              sanitize: false,
              smartLists: true,
              smartypants: false,
              xhtml: false,
              renderer,
            },
          },
        ],
      }],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css',
    }),
  ],
};
