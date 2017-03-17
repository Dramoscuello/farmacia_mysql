

var express = require('express'),
  config = require('./config/config'),
  db = require('./app/models');

var app = express();

module.exports = require('./config/express')(app, config);

db.sequelize
  .sync()
  .then(function () {
    if (!module.parent) {
      app.listen(config.port, function () {
        console.log('Express server listening on port ' + config.port);
      });
    }
  }).catch(function (e) {
    throw new Error(e);
  });

var http = require("http").createServer(app);
var io = require("socket.io")(http);
http.listen(3000, "127.0.0.1");
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});
