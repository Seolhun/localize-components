/* eslint-disable */
require('event-source-polyfill');
const hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true');

hotClient.subscribe(function(event) {
  if (event.action === 'reload') {
    window.location.reload();
  }
});
