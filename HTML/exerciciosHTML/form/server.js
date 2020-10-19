const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { response } = require('express')

app.use(bodyParser.urlencoded({ extended: true }))
app.post('/orcamento', (req, resp) => {
    console.log(req.body);
    resp.send('Orçamento realizado com sucesso!')
})

app.post('/orcamento/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body);
    resp.send('Usuario alterado!')
})

app.listen(8080)