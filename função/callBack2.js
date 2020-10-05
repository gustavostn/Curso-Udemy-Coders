const notas = [7.7, 5.2, 10, 9.8, 4.8, 2.3]

// Sem callback
const notasBaixas = []
const notasAltas = []

for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    } else {
        notasAltas.push(notas[i])
    }

}

console.log(`As notas inferiores a 7 foram: ${notasBaixas}`);
console.log(`As notas acima de 7 foram: ${notasAltas}`)


//Usando callback
//Funcao filter() -> Filtra os elementos de um array em cima de determinado criterio (Se retornar true: Adiciona o array | False: Não adiciona)

const notasBaixas2 = notas.filter(function (notas) {
    return notas < 7
})

console.log(`Notas baixas2 = ${notasBaixas2}`)

//Usando arrow function
const notasBaixas3 = notas.filter(notas => notas < 7)
console.log(`Notas baixas3 = ${notasBaixas3}`)

//Fazendo uma funcao que pode ser usada em outros lugares
const notasAbaixoDe7 = (notas) => notas < 7
const notasBaixas4 = notas.filter(notasAbaixoDe7)
console.log(`Teste funcao notasBaixas4: ${notasBaixas4}`)

const notasG = [9.9, 8.5, 4.2, 3.6, 4.5, 9.9]
const notasBaixas5 = notasG.filter(notasAbaixoDe7)
console.log(`Notas abaixo de 7: ${notasBaixas5}`)