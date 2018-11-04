module.exports = function (api) {
  console.error('@@@@', api);
  // api.cache.forever()
  // api.cache.never()
  // api.cache.env()
  // api.cache.async()
  // api.cache.caller()
  // api.cache.assertVersion()
  const isProduction = process.env.NODE_ENV === 'production';
  api.cache.using(() => isProduction);
  api.cache.invalidate(() => isProduction);
  const presets = [
    "@babel/preset-env",
    "@babel/preset-es2015",
    "@babel/preset-react",
    "@babel/preset-stage-2",
    "@babel/polyfill",
  ];
  const plugins = [
    "babel-plugin-styled-components",
  ];
  return {
    presets,
    plugins
  };
}
