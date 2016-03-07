module.exports = {
  "initial": {
    "express-bunyan-logger":{
      "params":{
        "name": "request",
        "streams": [
          {
            //level: 'info',
            levelFn:function(status, err /* only will work in error logger */, meta) {
              // return string of level
              if (meta["response-time"] > 30000) {
                return "fatal";
              } else {
                return "info";
              }
            },
            includesFn:function(req, res) {
              if (req.user) {
                return {
                  _id: req.user._id,
                  name: req.user.name
                }
              }
            },
            genReqId: function(req) {
              return req.id;
            },
            path: 'server/logs/request-info.log',
            type: 'rotating-file',
            period: '30d',
            count: 6
          },
          {
            level: 'error',
            path: 'server/logs/request-error.log',
            type: 'rotating-file',
            period: '30d',
            count: 6
          }
        ]
      }
    }
  }
}
