import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Conculator from './main/Calculator';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.Fragment>
    <h1>CALCULADORA</h1>
    <Conculator />
  </React.Fragment>,
  document.getElementById('root')
);

reportWebVitals();
