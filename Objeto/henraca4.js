function meuObjeto() { }
console.log(meuObjeto.prototype) // = objeto

const obj1 = new meuObjeto
const obj2 = new meuObjeto

console.log(obj1.__proto__ === obj2.__proto__)

meuObjeto.prototype.nome = 'Raul'
meuObjeto.prototype.falar = function () {console.log(`Me chamo ${this.nome}`)} 

obj1.falar()
obj2.nome = 'Pedro'
obj2.falar()

const obj3 = {}
obj3.__proto__ = meuObjeto.prototype
obj3.nome = 'Silvia'
obj3.falar()   