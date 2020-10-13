//Classe que irá importar outros módulos

const moduloA = require('./moduloA')
const moduloB = require('./moduloB')

console.log(moduloA.ola, moduloA.bomDia, moduloA.Variavel);
console.log(moduloA)

console.log(moduloB.boaNoite, moduloB.bomDia())
console.log(moduloB)
