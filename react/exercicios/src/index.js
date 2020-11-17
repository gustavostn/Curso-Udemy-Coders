import React, {Fragment} from 'react' //importando react
import ReactDom from 'react-dom' //importando react-dom
import Pai from './componentes/pai'
import Filho from './componentes/filho'

{/*import { BomDia } from './componentes/multiplos'
import Primeiro from './componentes/Primeiro'
import Multi from './componentes/multiplos'
//import {Bomdia, BoaTarde} from './componentes/multiplos'
//Boa tarde esta com o export explicito no documento
const elementos = <h1>Parece HTML...mas é JS</h1>*/}





ReactDom.render(
    <Fragment>
        <Pai nome="Arnaldo" sobrenome="Ferreira">
            <Filho nome="Gustavo" />
            <Filho />
            <Filho sobrenome="Costa"/>
        </Pai> 
    </Fragment>, document.getElementById('root'))





















