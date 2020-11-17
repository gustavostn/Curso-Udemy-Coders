import React, { Component } from 'react'

export default class Saudacao extends Component { //Exportando por padrao a classe Saudacao

    state = {
        tipo: 'Fala', //Valor inicial da const tipo
        nome: 'Pedro' // ..... da const nome
    }

    constructor(props) {
        super(props) //Na funcao construtora é necessario chamar o super(props) para compatibilidade
        this.setTipo = this.setTipo.bind(this) 
        this.setNome = this.setNome.bind(this) 
        //Dentro da func constr o This aponta para o elemento atual


    }

    setTipo(e) { //CADA CONST TEM QUE TER A SUA FUNC PARA PERMITIR ALTERAÇÃO
        //console.log(e.target.value)  -> Somente lendo o valor no console 
        // this.props.tipo = e.target.value ->O props nao pode ser alterado 
        this.setState({ tipo: e.target.value })
        //Possibilitando alterar a var tipo e arm o novo valor 
    }

    setNome(e) {
        //Chamar o setState para alterar o valor de  nome
        this.setState({ nome: e.target.value })
        //Arm o novo valor
    }


    render() { //função responsavel por renderizar os componentes
        //Deste modo os valores ficam fixos e nao é possivel alterar -> const {tipo, nome} = this.props //Por ser uma classe é preciso utilizar o this para utilizar o props 
        const { tipo, nome } = this.state
        return (
            <div>
                <h1> {tipo} {nome}! </h1>
                <hr />
                <input type="text" placeholder="tipo"
                    value={tipo} onChange={this.setTipo} />

                <input type="text" placeholder="nome.."
                    value={nome} onChange={this.setNome} />
            </div>
            // O texto informado no input será armz na VAR { tipo }
        )       // OnChange => Recebendo os dados caso haja uma mudança no valor 

    }
}