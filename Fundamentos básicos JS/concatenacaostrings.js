const nome = 'Marcio'
const concatenaçao = 'Olá ' + nome + ' !'
console.log(concatenaçao)

const template = `Olá ${nome}!`
console.log(template)

// Expressões 
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Olá...${up('bem-vindo')}`)