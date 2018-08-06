var path = require('path');

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: '',
    assetsPublicPath: '/',
    productionSourceMap: true,
    productionGzip: true,
    productionGzipExtensions: ['js', 'ts', 'jsx', 'tsx', 'css', 'scss'],
    bundleAnalyzerReport: process.env.npm_config_report,
  },
  dev: {
    env: require('./dev.env'),
    port: 3000,
    autoOpenBrowser: true,
    assetsSubDirectory: '',
    assetsPublicPath: '/',
    proxyTable: {},
    cssSourceMap: false,
  },
};
