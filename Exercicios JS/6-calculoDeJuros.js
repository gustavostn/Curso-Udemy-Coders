/*Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. 
A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

jurosSimples = (valorInicial, taxaJuros, tempoAplicado) => {
    let calculoJurosSimples = ((taxaJuros / 100) * valorInicial) * tempoAplicado
    let valorTotalPago = valorInicial + calculoJurosSimples

    let totalJurosSimples = calculoJurosSimples.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    let totalPagoFinal = valorTotalPago.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    console.log(`Você irá pagar ${totalJurosSimples} de juros simples, e sua fatura terá um total de: ${totalPagoFinal}`)

}
jurosComposto = (valorInicial, taxaJuros, tempoAplicado) => {
    let calculoTaxaJuros = (taxaJuros / 100)
    let calculoTaxaJurosComposto = valorInicial * ((1 + calculoTaxaJuros) ** tempoAplicado)
    let TotalJurosComposto =  (valorInicial + calculoJurosComposto) - valorInicial
    let valorFinal = valorFinal + totalJurosComposto

    let totalJurosComposto = calculoJurosComposto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    let totalPagoFinal = calculoTotalPago.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    console.log(`Você irá pagar ${totalJurosComposto} de juros compostos, e sua fatura terá um total de: ${valorFinal}`)
}



//Tempo em meses
jurosSimples(900, 5, 6);
jurosComposto(1400, 7, 2)
