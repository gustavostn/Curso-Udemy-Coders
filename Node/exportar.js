console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1 
exports.b = 3
module.exports.c = 2

exports = null 
console.log(module.exports)

module.exports = {publico: true}