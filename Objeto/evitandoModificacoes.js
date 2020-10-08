//Object.precentExtensions -> Não permite criar novos atributos

const pessoa = Object.preventExtensions({
    nome: 'Gustavo', sobrenome: 'Alves', idade: '18'
})
console.log('Extensivel: ', Object.isExtensible(pessoa));


pessoa.nome = 'Marcos'
pessoa.altura = 1.99

console.log(pessoa)

//Object.seal -> não consegue adicionar e excluir novos atrubutos, mas consegue modificar

const animal = {tipo: 'cachorro', raça: 'vira-LAta', sexo: 'Macho'}
Object.seal(animal)
animal.tipo = 'gato'
animal.sexo = 'femea'
console.log(animal)

delete animal.tipo
animal.idade = '3 meses'
console.log(animal)

//Object.freeze = selado + valores constantes 
const funcionario = {nome: 'Pedro', cargo: 'Analista', salarioLiquido: 1500}
Object.freeze(funcionario)

delete funcionario.cargo
funcionario.nome = 'gustavo'
funcionario.dataNasc = '18/12/2005'
console.log(funcionario)