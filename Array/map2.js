const carrinho = [
    '{ "nome": "Mochila", "preco": 199.90 }',
    '{ "nome": "Livro", "preco": 25.90 }',
    '{ "nome": "Calculadora", "preco": 149.90 }',
    '{ "nome": "Estojo", "preco": 5.50 }'
]

// Retornar um array apenas com os preços

const converterParaObj = json => JSON.parse(json)
const apenasPreco = produto => produto.preco 

const resultado = carrinho.map(converterParaObj).map(apenasPreco)
console.log(resultado);