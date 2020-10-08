class pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`);
    }
}

const p1 = new pessoa('Gustavo')
p1.falar()


//Factory -> A variavel fica acessivel
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Pedro')
p2.falar()