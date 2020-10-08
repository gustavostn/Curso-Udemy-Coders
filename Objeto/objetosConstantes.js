// A const pessoa -> Aponta para um endereço de memoria -> este endereço de memoria está o obj criado 
const pessoa = {nome: 'João'}
pessoa.nome = 'Flavio'

Object.freeze(pessoa)
pessoa.nome = 'Gustavo'