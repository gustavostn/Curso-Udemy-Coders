let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!isAtivo)

console.log('Os verdadeiros...')
console.log(!!1) //Numeros inteiros são verdadeiros
console.log(!!'texto') //Qualquer texto é verdadeiro
console.log(!!' ') //Espaço é verdadeiro
console.log(!![]) 
console.log(!!{})

console.log('Os falsos')
console.log(!!0) // Zero é false
console.log(!!'') // String vazia é false
console.log(!!null)
console.log(!!NaN)

