const toCreate = (model) => {
    return `INSERT INTO alunos VALUE (default,'${model.nome}','${model.nascimento}')`;
}

const toRead = () => {
    return 'SELECT * FROM alunos';
}

const toUpdate = (model) => {
    return `UPDATE alunos SET 
    nome = '${model.nome}', 
    nascimento = ${model.nascimento} 
    WHERE id_aluno = '${model.id_aluno}'`;
}

const toDelete = (model) => {
    return `DELETE FROM alunos WHERE id_aluno = '${model.id_aluno}'`;
}

module.exports = {
    toCreate,
    toRead,
    toUpdate,
    toDelete
}