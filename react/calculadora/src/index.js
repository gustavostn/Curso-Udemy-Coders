import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './main/Calculator'


ReactDOM.render(
  <Fragment>
    <h1>Calculadora</h1>
    <Calculator />
  </Fragment>
  ,document.getElementById('root')
)

