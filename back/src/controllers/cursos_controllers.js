const con = require('../dao/escolaDAO.js');
const Cursos = require('../models/Cursos.js');

const listarGeral = (req, res) => {
    con.query(Cursos.toReadAll(), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end()
        }else {
            res.status(400).json(err).end();
        }
    })
}

const listarCursos = (req, res) => {
    con.query(Cursos.toRead(req.params), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

module.exports = {
    listarGeral,
    listarCursos
}