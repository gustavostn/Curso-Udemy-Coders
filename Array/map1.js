// Serve para transformar os elementos de um array para outro

const numeros = [1, 2, 3, 4, 5]

// Map = for com propósito
let dobroNumeros = numeros.map(function(e){
    return e * 2

})
console.log(dobroNumeros);

const mult6 = e => e * 6
const div2 = e => e / 2 
const moedaBRL = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}` 

resultado = numeros.map(mult6).map(div2).map(moedaBRL)
console.log(resultado)

