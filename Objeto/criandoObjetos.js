//Criando da forma literal 
const carro = {
    nome: 'X1'
}
console.log(carro);

//Criando a parir do obj 
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funcções construtoras
function calculoJuros(nome, preco, taxa = 0.2) {
    this.nome = nome
    this.getPrecoComTaxa = () => {
        return preco + (preco * taxa)
    }
}
const produto1 = new calculoJuros('celular', 700)

console.log(produto1.getPrecoComTaxa())

//Função com factory
function criaFuncionario(nome, salarioLiquido, faltas) {
    return {
        nome,
        salarioLiquido,
        faltas,
        getSalario() {
            return (salarioLiquido / 30) * (30 - faltas)
        }
    }
}


const funcionario1 = criaFuncionario('Gustavo', 1200, 3)
const funcionario2 = criaFuncionario('Aline', 2300, 7)
console.log(funcionario1.getSalario(), funcionario2.getSalario())

//Object.create

const filha = Object.create(null)
filha.name = 'Ana'
console.log(filha)