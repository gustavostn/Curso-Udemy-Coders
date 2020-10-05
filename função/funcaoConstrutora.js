function Carro(velocidadeMax = 200, delta = 5) {
    //Atrinuto privado
    let velocidadeAtual = 0

    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMax) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMax
        }
    }


    //Atributo publico
    this.getVelocidadeAtual = function () { //O this irá deixar a funcao acessivel
        return velocidadeAtual
    }
}



const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 50)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())