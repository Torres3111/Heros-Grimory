const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const port = 3000;

const pool = new Pool ({
    user: 'postgres',
    host: 'Projeto_Integrador',
    database:'Usuario_Teste',
    password: '31201013',
    port: 5432,
});

app.use(bodyParser.json());

app.post('/submit', async (req, res) => {
    const { nome, email, senha} = req.body;
    try{
        const result = await pool.query(
            'INSERT INTO Usuarios(Nome, Email, Senha) VALUES ($1, $2, $3)'
        )
    }
})