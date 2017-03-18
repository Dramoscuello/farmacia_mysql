var express = require('express'),
  mysql = require('mysql'),
  config = require('../.././database/config'),
  router = express.Router();

module.exports = function (app) {
  app.use('/', router);
};

router.get('/signin', function (req, res, next) {
    res.render('signin', {
      title: '¡Inicia sesión!'
    });
});

router.get('/signup', function (req, res, next) {
    res.render('signup', {
      title: '¡Registrate!'
    });
});

router.post('/signup', function (req, res, next) {
    console.log(req.body);
    return;
});
