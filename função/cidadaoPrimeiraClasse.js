//Função em JS First-Class-Object (Citizens)
// Higher-order function

//criar de forma literal
function nomeFuncao() {
    
}

//Armazenar em uma variavel
const fun2 = function () {

}

//Armazenar em um Array
const array = [function (a, b) { return a + b }, nomeFuncao, fun2]

//Armazenar funcao em um atributo de obj
const obj = {}
obj.falar = function () { return 'Olá' }
console.log(obj.falar())

//Passar funcao como parametro
function run(fun) {
    fun()
}
run(function () { console.log('Boa tarde a todos') })

//Uma funcao ode retornar/conter outra funcao
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
soma(5, 6)(7)
