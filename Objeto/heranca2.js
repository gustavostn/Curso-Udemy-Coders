// Cadeia de protótipos (prototype chain)

const avo = {nome: 'Antonio', sobrenome: 'Silva'}
const pai = {__proto__: avo, nome: 'Luiz'}
const filho = {__proto__: pai, nome: 'Pedro'}


console.log(filho.nome, filho.sobrenome);

const Carro = {
    velAtual: 0,
    velMax: 200,
    acelerar(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
            
        }else{
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual} Km/h de ${this.velMax}`
    }

}

const bmw = {
    modelo: 'X1',
    velMax: 230
}

const jaguar = {
    modelo: 'f-type',
    velMax: 330,
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}
Object.setPrototypeOf(bmw, Carro)
Object.setPrototypeOf(jaguar, Carro)

console.log(bmw)
bmw.acelerar(100)
console.log(bmw.status())

console.log('------------------')

console.log(jaguar)
jaguar.acelerar(90)
console.log(jaguar.status())