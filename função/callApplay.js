function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Celular',
    preco: 5999,
    desc: 0.20,
    getPreco
}

global.preco = 20
global.desc = 0.2
console.log(getPreco());
console.log(produto.getPreco())


const carro = {
    preco: 55400000,
    desc: 0.3
}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.2, '$$'))
console.log(getPreco.apply(carro, [0.17, '$$']))