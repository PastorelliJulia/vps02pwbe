const express = require('express');
const router = express.Router();

const Cursados = require("./../controllers/cursados_controllers.js");

router.get("/cursados/read", Cursados.listarCursados);

module.exports = router;