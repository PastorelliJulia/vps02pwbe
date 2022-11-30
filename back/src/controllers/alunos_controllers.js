const con = require('../dao/escolaDAO.js');
const Aluno = require('../models/alunos.js');


const listarAluno = (req, res) => {
    con.query(Aluno.toRead(), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const cadastrarAluno = (req, res) => {
    con.query(Aluno.toCreate(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const alterarAluno = (req, res) => {
    con.query(Aluno.toUpdate(req.body), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(200).end();
            else
                res.status(404).end();
        else
            res.status(500).json(err).end();
    });
}

const excluirAluno = (req, res) => {
    con.query(Aluno.toDelete(req.params), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(204).json(req.params).end();
            else
                res.status(404).end();
        else
            res.status(400).json(err).end();
    })
}

module.exports = {
    listarAluno,
    cadastrarAluno,
    alterarAluno,
    excluirAluno
}