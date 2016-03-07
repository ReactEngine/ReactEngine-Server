module.exports = {
  "TestDSMongo": {
    "name": "TestDSMongo",
    "url": "mongodb://10.10.10.154:27017,10.10.0.4:27017,10.10.10.172:27017/?readPreference=primary",
    // "host":"10.10.10.172",
    // "port": 27017,
    "database": "test",
    "connector": "mongodb",
    "debug": "true",
    "server": {
      "auto_reconnect": true,
      "reconnectTries": 100,
      "reconnectInterval": 1000
    }
  },
  "TestDSMysql": {
    "name": "TestDSMysql",
    "host": "10.10.0.6",
    "port": 3306,
    "database": "568c84b9e9db730001bb1454",
    "connector": "mysql",
    "debug": "true",
    "username":"test",
    "password":"test"
  },
}
