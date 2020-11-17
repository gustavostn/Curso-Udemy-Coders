import React, { Fragment } from 'react'
import { childrenWithProps } from './ExternalFunction/children'




export default props =>
    <Fragment>
        <h1> {props.nome} {props.sobrenome} </h1>
        <h2> Filhos </h2>
        <ul>
            {childrenWithProps(props)}
        </ul>
    </Fragment>

{/* Passando os elementos da classe pai p/ a filho*/ }
{/*1º paramento: Array q deseja acessar (props.Children) 2º param a funcao callback que ele ira chamar */ }
{/*Recendo dados do pai e caso haja dados na filho irá sobreescrever as do pai*/ }