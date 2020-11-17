import React from 'react' //importando react
import ReactDom from 'react-dom' //importando react-dom
import Primeiro from './componentes/Primeiro'
import BomDia from './componentes/BomDia'

const elementos = <h1>Parece HTML...mas é JS</h1>

ReactDom.render(<BomDia nome="Pedro" idade="20" />, document.getElementById('root'))





















