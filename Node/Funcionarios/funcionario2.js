const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const sexo = d => d.genero === 'M' //Escolhendo apenas o sexo masculino
const nome = d => d.nome[0] === 'G'
const salario = d => d.salario < 5000 


axios.get(url).then(response => {
    const dadosEmpresa = response.data

    const funcionario = dadosEmpresa.filter(sexo).filter(nome).filter(salario)
    console.log(funcionario);


})