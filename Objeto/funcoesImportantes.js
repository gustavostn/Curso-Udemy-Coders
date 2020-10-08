const pessoa = {
    nome: 'Felipe',
    idade: 25,
    peso: 95
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))


Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '10/12/2020'
})

pessoa.dataNascimento = '50/25/2020'
console.log(pessoa.dataNascimento)


//Obj.assign ES2015
const raiz = { nome: 'Gustavo' }
const adicional1 = { sobrenome: 'Borges' }
const adicional2 = { idade: 25 }
const adicional3 = { profissao: 'Desenvolvedor' }
const cadastroCliente = Object.assign(raiz, adicional1, adicional2, adicional3)
console.log(cadastroCliente)
