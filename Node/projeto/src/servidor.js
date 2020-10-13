const porta = 3003
const express = require('express')
const app = express()

app.get('/produtos', (req, res) => {
    console.log('middleware 1...')
    next()
})

app.get('/produtos', (req, res) => {
    res.send({ nome: 'Celular', preco: 1.500}) //Converter para JSON
})

app.listen(porta, () => {
    console.log(`Servidor executado com sucesso na porta: ${porta}.`);
})

