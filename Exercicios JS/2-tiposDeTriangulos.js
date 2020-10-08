/*Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. 
Isósceles: Dois lados iguais. 
Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/

tiposTriangulos = (ld1, ld2, ld3) => {
    if (ld1 == ld2 && ld2 == ld3 && ld3 == ld1) {
        console.log(`É um triangulo Equilatero`);
    } else if (ld1 == ld2 || ld3 && ld1 != ld2 || ld3) {
        console.log(`É um tringulo Isósceles`)
    } else if (ld1 != ld2 && ld3) {
        console.log(`É um tringulo Escaleno`)
    }

}
//teste equilatero
console.log('----- teste equilatero -----')
tiposTriangulos(3, 3, 3)

//teste isóceles
console.log('----- teste isóceles -----')
tiposTriangulos(3, 2, 3)
tiposTriangulos(2, 3, 3)
tiposTriangulos(5, 5, 6)

//teste escaleno
console.log('----- teste escaleno -----')
tiposTriangulos(1, 2, 3)
tiposTriangulos(1, 3, 2)
tiposTriangulos(2, 3, 1)
tiposTriangulos(2, 1, 3)
tiposTriangulos(3, 1, 2)
tiposTriangulos(3, 2, 1)
