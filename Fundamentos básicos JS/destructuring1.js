// Novo recurso do ES2015

const pessoa  = {
nome: 'Fernanda',
idade: 25,
peso: 65,
sexo: 'Feminino',
endereco: {
    logradouro: 'Rua marisol',
    numero: 1000
    }
}

const {nome,idade,sexo} = pessoa
console.log(nome, idade, sexo)

const { nome: n, idade: i, sexo: s} = pessoa
console.log(`O nome da pessoa é: ${n}, ela tem ${i} anos e é do sexo ${s}`)

const {sobrenome, rendaMensal = 'R$25.000,00'} = pessoa
console.log(sobrenome, rendaMensal)

const { endereco: { numero, pontoDeReferencia}} = pessoa
console.log(numero, pontoDeReferencia)