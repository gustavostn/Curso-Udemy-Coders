console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('') //Inverte a String
}
console.log('Gustavo Santana'.reverse())


Array.prototype.first = function() {
    return this[0] 
}
console.log(['a', 'b', 'c'].first())





