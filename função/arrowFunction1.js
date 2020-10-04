let sobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //retuen implicito
console.log(dobro(Math.PI));

let oi = function () {
    return 'oi'
}

ola = () => 'Olá'
oi = _ => 'oi' //Apenas uma parametro

console.log(ola(), oi())