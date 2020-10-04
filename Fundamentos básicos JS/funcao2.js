// Armazenando variavel em uma função. 

const imprimirSoma = function(a,b){
    console.log(a+b)
}

imprimirSoma(2,3)

//Armazenando uma função Arrow em uma variavel.

const soma = (a,b) => {
    return(a + b)
}
console.log(soma(2,3))

//Retorno implícito
const subtração = (a,b) => a - b
console.log(subtração(2,3))