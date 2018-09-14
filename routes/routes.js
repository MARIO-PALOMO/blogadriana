var express = require('express');
var router = express.Router();
var controllers = require('.././controllers');


router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/BuscarComentarios', controllers.datos.buscarComentarios);
router.get('/EliminarComentarios', controllers.datos.eliminarComentario);
router.get('/GuardarComentarios', controllers.datos.guardarComentario);

module.exports = router;
