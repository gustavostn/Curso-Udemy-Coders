function numeroAleatorio(min, max) {
    const valor = Math.random() * (max - min) - min
    return Math.round(valor)
}

let cond = 90

do { //Primeiro irá executar a primeira condição para finalizar o prog
    cond = numeroAleatorio(0, 100)
    console.log(`O numero aleatorio foi ${cond}`)
} while (cond < 80)
console.log('Programa finalizado')
