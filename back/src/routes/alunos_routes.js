const express = require('express');
const router = express.Router();

const Alunos = require("../controllers/alunos_controllers.js");

router.get("/alunos/read", Alunos.listarAluno);
router.post("/alunos/create", Alunos.cadastrarAluno);
router.put("/alunos/update", Alunos.alterarAluno);
router.delete("/alunos/delete/:id_aluno", Alunos.excluirAluno);

module.exports = router;