const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero ==='F'
const Menorsalario = (func, funcAtual) => {
    return func.salario <  funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    
    const menorSalarioF = funcionarios.filter(chineses).filter(mulheres).filter(Menorsalario)
    console.log(menorSalarioF)

})

