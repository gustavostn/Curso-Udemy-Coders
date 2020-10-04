console.log(Math.ceil(7.5))

const objeto = {}
objeto.nome = 'Quadrado'
console.log(objeto.nome)

function Obj(nome){
    this.nome = nome
}


const obj2 = new Obj('bola')
const obj3 = new Obj('Mesa')

console.log(obj2.nome)
console.log(obj3.nome)