//Closure é o escopo criado quando uma função é declarada
//Esse escopo permite acessar e manipular variáveis externas a função


//Contexto léxico 

const x = 'global'

function fora() {
    const x = 'local'
    function dentro() {
        return x
    }
    return dentro()
}


console.log(fora());