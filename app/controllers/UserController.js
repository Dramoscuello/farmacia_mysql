var express = require('express'),
  mysql = require('mysql'),
  bcrypt = require('bcryptjs'),
  //config = require('../.././database/config'),
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
  var salt = bcrypt.genSaltSync(10);
  var password = bcrypt.hashSync(req.body.password, salt);
  var user = {
    email : req.body.email,
    nombre : req.body.nombre,
    password : password
  };
  var config = require('../.././database/config');
  var db = mysql.createConnection(config);

  db.connect();
  db.query('INSERT INTO users SET ?', user, function(err, rows, fields){
    if(err) throw err;
    db.end();
  });

  //req.flash('info', 'Se ha registrado correctamente, ya puede iniciar sesion');
  return res.redirect('/signin');
});
