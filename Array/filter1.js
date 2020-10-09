const produtos = [
    { nome: 'Iphone', preco: 3500, fragil: true },
    { nome: 'Monitor', preco: 1350, fragil: true },
    { nome: 'Camiseta', preco: 60, fragil: false },
    { nome: 'Relogio', preco: 120, fragil: false }
]

console.log(produtos.filter(function (p) {
    return false
}))

const barato = produtos => produtos.preco <= 120
const produtoFragil = produtos => produtos.fragil != true

console.log(produtos.filter(barato).filter(produtoFragil))