const fs = require('fs')

const produto = {
    nome: 'Monitor',
    preco: 1200,
    desc: 0.10
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo');
})


const html = {
    nome: "HTML",
    nivel: "Avançado",
    horasEstudadas: 17
}


fs.writeFile(__dirname + '/arquivoGerado2.json',JSON.stringify(html), err => {
    console.log(err || "Arquivos salvos!");
})