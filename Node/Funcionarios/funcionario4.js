const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

//O maior Id de um argentino que recebe mais que 7000

const nacionaliade = d => d.pais == "Argentina"
const maiorID = (funcAtual, comparadorFunc) => {
    return funcAtual.id > comparadorFunc.id ? funcAtual : comparadorFunc
} 
const Menorsalario = (funcAtual, comparadorFunc) => {
    return funcAtual.salario < comparadorFunc.salario ? funcAtual : comparadorFunc
}


axios.get(url).then(response => {
    const dadosEmpresa = response.data
    const funcionarioSelecionado = dadosEmpresa.filter(nacionaliade).filter(maiorID).filter(Menorsalario)
    console.log(funcionarioSelecionado);
})