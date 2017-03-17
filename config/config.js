var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'farmacia-sql'
    },
    port: process.env.PORT || 8080,
    db: 'mysql://localhost/farmacia'
  },

  test: {
    root: rootPath,
    app: {
      name: 'farmacia-sql'
    },
    port: process.env.PORT || 8080,
    db: 'mysql://localhost/farmacia'
  },

  production: {
    root: rootPath,
    app: {
      name: 'farmacia-sql'
    },
    port: process.env.PORT || 8080,
    db: 'mysql://localhost/farmacia'
  }
};

module.exports = config[env];
