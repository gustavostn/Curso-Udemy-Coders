function compras(trab1, trab2){
    const comprarRoupa = trab1 || trab2
    const comprarPc = trab1 && trab2
    // const comprarTv = !!(trab1 ^ trab2) -> bitwise xar
    const comprarTv = trab1 != trab2
    const comprarNd = !comprarRoupa //operador unirario

    return { comprarRoupa, comprarPc, comprarTv, comprarNd}

}

console.log(compras(true, true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))