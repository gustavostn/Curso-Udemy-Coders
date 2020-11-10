x = 80000
y = 200000
contaAnos = 0

while(x <= y){    x = x + (x * 0.3) 
    // 80.000 = 80.000 + (80.000 * 0.3) -> 80.000 = 80.000 + (24.000) -> 80.000 = 104.0000 -> x agr é 104.000


    y = y + (y * 0.15)
    // 200000 = 200000 + (200000 * 0.15) ->  200000 = 200000 + (30000) -> 200000 = 230000 -> Y agr é 230.000

    contaAnos++
    //conta quantos anos será necessario para X ser igual ou maior que Y

    //Esse processo vai se repetir até o X for igual ou maior que Y
}