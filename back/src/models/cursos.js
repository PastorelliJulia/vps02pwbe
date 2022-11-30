const toReadAll = () => {
    return "SELECT * FROM vw_geral";
}

const toRead = (model) => {
    return `SELECT * FROM cursos WHERE id_curso = '${model.id_curso}'`;
}

module.exports = {
    toReadAll,
    toRead
}