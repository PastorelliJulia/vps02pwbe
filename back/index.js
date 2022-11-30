const PORT = process.env.PORT || 5000
const express = require('express');
const cors = require('cors');

const alunosR = require('./src/routes/alunos_routes.js');
const cursosR = require('./src/routes/cursos_routes.js');
const cursadosR = require('./src/routes/cursados_routes.js');

const app = express();
app.use(express.json());
app.use(cors());
app.use(alunosR);
app.use(cursosR);
app.use(cursadosR);

app.listen(5000, () => {
    console.log("Respondendo na porta 5000");
});