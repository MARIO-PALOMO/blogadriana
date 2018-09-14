var mysql = require('mysql');
var config = require('.././database/database.js');

module.exports = {

    guardarComentario: function (req, res, next) {

        var db = mysql.createConnection(config);
        db.connect();

        db.query("INSERT INTO `comentario` (`nombre`, `comentario`) VALUES (?,?)", [req.query.nombre, req.query.comentario], function (err, rows, fields) {
            if (err) {
                console.log(err);
                db.end();
            } else {
                db.end();
                res.send(true);
            }
        });
    },

    eliminarComentario: function (req, res, next) {

        var db = mysql.createConnection(config);
        db.connect();

        db.query("DELETE FROM `comentario` WHERE (`id`= ?)", [req.query.id], function (err, rows, fields) {
            if (err) {
                console.log(err);
                db.end();
            } else {
                db.end();
                res.send(true);
            }
        });
    },

    buscarComentarios: function (req, res, next) {

        var db = mysql.createConnection(config);
        db.connect();

        db.query("SELECT * FROM comentario", function (err, rows, fields) {
            if (err) {
                console.log(err);
                db.end();
            } else {
                db.end();
                res.send(rows);
            }
        });
    },

}