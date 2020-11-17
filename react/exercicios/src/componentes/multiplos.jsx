import React from 'react'

const BoaTarde = props => <h1>Boa tarde {props.nome}!</h1>

const BomDia = props => <h2>Bom dia {props.nome}</h2>

export {BomDia, BoaTarde }
export default { BoaTarde, BomDia}


//Exportando como default os 2 elementos