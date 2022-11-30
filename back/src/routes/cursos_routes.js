const express = require('express');
const router = express.Router();

const Cursos = require("./../controllers/cursos_controllers");

router.get("/cursos/read", Cursos.listarGeral);
router.get("/cursos/read/:id_prof", Cursos.listarCursos);

module.exports = router;