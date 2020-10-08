/* Com isso, vamos fazer
um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).*/

let valor = 0.30000000000000004
valorFormatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
console.log(`O valor é de: ${valorFormatado}`);

formataMoeda = (valor2) => {
    valorFormatado2 = valor2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    return valorFormatado2
}
console.log(formataMoeda(123466))