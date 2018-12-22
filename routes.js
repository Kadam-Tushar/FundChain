const routes = require('next-routes')();

routes
  .add('/ads/new', '/ads/new')
  .add('/ads/:address', '/ads/show')
  .add('/ads/:address/requests', '/ads/requests/index')
  .add('/ads/:address/requests/new', '/ads/requests/new');

module.exports = routes;
