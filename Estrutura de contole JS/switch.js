const receberNota = function (nota) {
    switch (Math.floor(nota)) { //Arredondar nota p/ menos
        case 10: //Caso não haja cod p/ execução na casa ele irá olhar para a de baixo.
        case 9:
            console.log('A')
            break
        case 8: case 7: //Pode colocar em linhas diferentes ou na mesma.
            console.log('B')
            break
        case 6:
        case 5:
            console.log('C')
            break
        case 4: case 3:
            console.log('D')
            break
        case 2:
        case 1:
            console.log('E')
            break
        case 0:
            console.log('F')
            break
        default:
            console.log('Valor invalido!')
    }
}

receberNota(9.99)
receberNota("Olá")
receberNota(5.45)