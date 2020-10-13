const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorB.inc()
contadorB.inc()

console.log( contadorA.valor, contadorB.valor);

contadorC.inc()
contadorC.inc()
contadorC.inc()
contadorC.inc()
contadorD.inc()
console.log(contadorC.valor, contadorD.valor);