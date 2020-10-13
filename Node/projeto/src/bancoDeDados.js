const sequencia = {
    _id: 1,
    get() { return this._id++ }
}

const produtos = {}

function salvarProduto(produto) {
    if (!produto.id) produto.id = sequencia.id
    protudos[produto.id = produto]
}