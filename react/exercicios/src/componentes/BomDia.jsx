import React from 'react'

export default props => [
    <h1 key='h1'>Olá {props.nome}, parabéns pelo seu {props.idade} anos!!</h1>,
    <h3 key='h3'>Curta muito o seu dia! xD</h3>
]



// export default props => 
// <React.Fragment>
//     <h1>Olá {props.nome}, parabéns pelo seu {props.idade} anos!!</h1>
//     <h3>Curta muito o seu dia! xD</h3>
// </React.Fragment>


//Enviar maid de 1 elemento 
//1º -> Usando div porem o elemento aparece no HTML
//2 -> Usando React.Fragment o elemento nao aparece no HTML
//3º -> Importando o fragment junto com o React, usa-se do o <Fragment>
//4º -> Colocando os elemento dentro de [] separando por , NESTE CASO É NECESSARIO DECLARAR UMA KEY 