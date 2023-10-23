const express = require('express');


const server = express();

server.get('/', (req, res) => {
    res.send('<h1>Servidor rodando...</h1>');
})

module.exports = server