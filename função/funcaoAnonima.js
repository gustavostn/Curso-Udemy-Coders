const soma = (a, b) => a + b
//console.log(soma(4, 5));

const imprimirResultado = (a, b, operacao = soma) => console.log(operacao(a, b));
imprimirResultado(5, 6)

imprimirResultado(4, 9, (x, y) => x * y)