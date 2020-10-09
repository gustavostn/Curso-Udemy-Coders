class lancamentos {
    constructor(nome = 'generico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class cicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))

    }

    sumario(){
        let valorConsolidade = 0
        this.lancamentos.forEach(l => {
            valorConsolidade += l.valor
        })
        return valorConsolidade
    }
}

const salario = new lancamentos('Salario', 35000)
const contaDeAgua = new lancamentos('agua', 250)

const contas = new cicloFinanceiro(10, 2020)
contas.addLancamentos(salario, contaDeAgua)
console.log(contas.sumario());


