const nota = [5.5, 9.8, 5.6, 3.1, 2, 1, 10]

for (let i in nota) { //Usando o let o valor fica acessivel somente no escopo for
    console.log(`O indidice ${i} recebe a nota: ${nota[i]}`)
}

const gustavo = {
    nome: 'Gustavo',
    sobrenome: 'Alves',
    idade: 55,
    peso: 50
}
for (let atribute in gustavo) {
    console.log(`${atribute} = ${gustavo[atribute]}`)
}