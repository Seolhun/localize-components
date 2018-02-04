const path = require('path');

const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = function (env) {
  const is_production = env === 'production';
  const output_dir = 'dist';

  const plugins = [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest'],
      minChunks: Infinity
    }),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new ExtractTextPlugin({
      filename: env === 'production' ? '[name].[chunkhash].css' : '[name].css'
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.ProvidePlugin({
      $: 'jquery',
    }),
  ];

  if (is_production) {
    plugins.push(new CleanWebpackPlugin([output_dir], {
    }));
  }

  return {
    entry: {
      main: './src/main.tsx'
    },
    output: {
      path: path.resolve(__dirname, output_dir),
      filename: is_production ? '[name].[chunkhash].js' : '[name].js'
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'awesome-typescript-loader',
          exclude: /node_modules/
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            use: [{
              loader: 'css-loader'
            }, {
              loader: 'sass-loader'
            }]
          })
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            use: 'css-loader'
          })
        },
        {
          test: /\.(png|ttf|otf|eot|svg|woff|woff2)$/,
          use: 'file-loader'
        }
      ]
    },
    resolve: {
      alias: {
        app: path.resolve(__dirname, 'src/**')
      },
      extensions: ['.js', '.ts', '.tsx']
    },
    plugins: plugins
  };
};
