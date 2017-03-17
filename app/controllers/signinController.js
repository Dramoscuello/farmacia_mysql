var express = require('express'),
  router = express.Router();

module.exports = function (app) {
  app.use('/', router);
};

router.get('/signin', function (req, res, next) {
    res.render('signin', {
      title: '¡Inicia sesión!'
    });
});
