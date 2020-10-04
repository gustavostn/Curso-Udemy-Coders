Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('A')
    } else if (nota.entre(7, 8.99)) {
        console.log('B')
    } else if (nota.entre(5, 6.99)) {
        console.log('C')
    } else if (nota.entre(3, 4.99)) {
        console.log('D')
    } else if (nota.entre(1, 2.99)) {
        console.log('E')
    } else {
        console.log('F')
    }
    console.log('Fim')
}


imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(6)
imprimirResultado(4)
imprimirResultado(2)
imprimirResultado(0)