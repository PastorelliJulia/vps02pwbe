const con = require('../dao/escolaDAO.js');
const Consulta = require('../models/Cursados.js');

//Listagem de alunos que concluiram o curso
const listarCursados = (req, res) => {
    con.query(Cursados.toRead(req.params), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

module.exports = {
    listarCursados
}