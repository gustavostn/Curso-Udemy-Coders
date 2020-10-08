/*const produto = new Object
produto.nome = 'Lapis'
produto['marca do produto'] = 'bic'
produto.preco = 200

console.log(produto)

delete produto.preco
delete produto['marca do produto']

console.log(produto)
*/

const carro = {
    nome: 'X1',
    marca: 'BMW',
    ano: 2014,
    preco: 77000000,
    cor: 'branco',
    proprietario: {
        nome: 'felipe',
        idade: 25,
        endereco: {
            logradouto: 'Av. Rosas de joão',
            numero: 456,
            cidade: 'São-Paulo'
        }
    },
    codChassi: 759241,
    vendedor: [{
        nome: 'fernando',
        concessonaria: 'BMW Alto tiete',
        numeroRegistro: 124578
    }, {
        nome: 'Marcela',
        concessonaria: 'BMW Alto tiete',
        numeroRegistro: 10000
    }]

}

carro.proprietario.nome = 'Marcio'
carro['proprietaro']['endereco']['logradouro'] = 'Rua Rosas de João'
console.log(carro.proprietario)
