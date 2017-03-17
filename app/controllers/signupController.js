var express = require('express'),
  router = express.Router();

module.exports = function (app) {
  app.use('/', router);
};

router.get('/signup', function (req, res, next) {
    res.render('signup', {
      title: '¡Registrate!'
    });
});
