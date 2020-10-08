const pai = { nome: 'Luiz', sobrenome: 'costa' }


const filha = Object.create(pai)
filha.nome = 'Marcia'


const filho = Object.create(pai, { nome: { value: 'Marcelo', writable: false, enumerable: true } })
console.log(filho)

filho.nome = 'Antonio'
console.log(filho.nome)

console.log(Object.keys(filha))
console.log(Object.keys(filho))

for (let key in filha) {
    console.log(key)
}

console.log(`Sra ${filha.nome} ${filha.sobrenome}`)