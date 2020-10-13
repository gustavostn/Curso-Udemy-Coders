const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

// funcionario que mora no brasil em uma cidade que comece com i recebendo mais que 20000

const nacionalidade = d => d.pais === "Brazil"
const cidade = d => d.cidade[0] == 'I'
const Maiorsalario = (atualFunc, comparadorFunc) => {
    return atualFunc.salario > comparadorFunc.salario ? atualFunc : comparadorFunc
}



axios.get(url).then(response => {
    const DadosEmpresa = response.data
    const funcionarioSelecionado = DadosEmpresa.filter(nacionalidade).filter(cidade).filter(Maiorsalario)

    console.log(funcionarioSelecionado);

})
