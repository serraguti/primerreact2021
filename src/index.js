import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import Saludo from './components/Saludo/Saludo';
import Metodos from './components/Metodos/Metodos';
import SumarNumeros from './components/SumarNumeros/SumarNumeros'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <div className="App">
    <SumarNumeros Numero1="5" Numero2="88"/>
    <SumarNumeros Numero1="999" Numero2="777"/>
    <SumarNumeros Numero1="789" Numero2="7821"/>        
  </div> ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
