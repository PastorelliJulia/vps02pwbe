DROP DATABASE IF EXISTS Escola;
CREATE DATABASE Escola charset = UTF8 collate = utf8_general_ci;
USE Escola;

CREATE TABLE alunos (
    id_aluno INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    nascimento DATE NOT NULL
);

CREATE TABLE cursos (
    id_curso INT PRIMARY KEY AUTO_INCREMENT,
    cursos VARCHAR(100) NOT NULL,
    duracao NUMERIC NOT NULL
);

CREATE TABLE cursados (
    data_cursos Date NOT NULL
);

SHOW TABLES;

DERCRIBE alunos;
DERCRIBE cursos;
DERCRIBE cursados;

LOAD DATA INFILE 'C:/Users/adenildo/Desktop/30-11/docs/alunos.csv'
INTO TABLE alunos
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

SELECT * FROM alunos;

LOAD DATA INFILE 'C:/Users/adenildo/Desktop/30-11/docs/cursos.csv'
INTO TABLE cursos
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

SELECT * FROM cursos;

LOAD DATA INFILE 'C:/Users/adenildo/Desktop/30-11/docs/cursados.csv'
INTO TABLE cursados
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

SELECT * FROM cursados;

CREATE VIEW vw_geral AS
SELECT p.id AS id_aluno, p.nome AS id_curso, c.curso
FROM cursos p INNER JOIN geral t ON c.id = t.cursandos
INNER JOIN alunos p ON p.id = c.alunos;