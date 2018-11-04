module.exports = function (api) {
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
    "@babel/preset-react",
  ];
  const plugins = [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-transform-destructuring",
    "@babel/plugin-transform-runtime",
  ];
  return {
    presets,
    plugins
  };
}
