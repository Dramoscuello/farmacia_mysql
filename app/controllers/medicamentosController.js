var express = require('express'),
  router = express.Router();
  //db = require('../models');
  //Medicamentos = mongoose.model("medicamentos");


module.exports = function (app) {
  app.use('/', router);
};

router.get('/medicamentos', function (req, res, next) {
    res.render('medicamentos',{
      titulo: 'Comprar medicamentos'
    });
});
