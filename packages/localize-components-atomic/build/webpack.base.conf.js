const config = require('../config');
const path = require('path');
const utils = require('./utils');
const webpack = require('webpack');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

console.error('@@@@ path', path.resolve(__dirname, '../../node_modules'))
console.error('@@@@ resolve', resolve('../node_modules'),)

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    index: resolve('src/index.ts'),
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].bundle.js',
    path: config.build.assetsRoot,
    publicPath: IS_PRODUCTION
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    modules: [
      resolve('src'),
      // resolve('node_modules'),
      resolve('../node_modules'),
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
  ],
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
      }, {
        test: /\.(ts|tsx)$/,
        loader: 'awesome-typescript-loader',
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }, {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              minimize: true,
              sourceMap: IS_PRODUCTION,
            },
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          }
        ],
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
      }
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  performance: {
    hints: 'warning',
    maxAssetSize: 300000,
    maxEntrypointSize: 400000,
    assetFilter: function(assetFilename) {
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  },
};