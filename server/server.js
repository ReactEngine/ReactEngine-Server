var loopback = require('loopback');
var boot = require('loopback-boot');
// var bunyan = require('bunyan');
// var loggerConfig = {
//   "name": "component",
//   "streams": [{
//     "level": "info",
//     "path": "server/logs/component-info.log"
//   }, {
//     "level": "error",
//     "path": "server/logs/component-error.log"
//   }]
// }
// var rootLogger = bunyan.createLogger(loggerConfig);
// var logger = require('loopback-component-logger')(rootLogger);
var app = module.exports = loopback();
require('loopback-ds-calculated-mixin')(app);

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  console.log("====== automigrate models for TodosDSMysql ====================");
  app.datasources['TodosDSMysql'].automigrate(['User', 'AccessToken', 'ACL','RoleMapping','Role','Todo'], function(err) {
      console.log(err);
    });
  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
