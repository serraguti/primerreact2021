import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import Saludo from './components/Saludo/Saludo';
import Metodos from './components/Metodos/Metodos';
import SumarNumeros from './components/SumarNumeros/SumarNumeros'
import Padre from './components/Matematicas/Padre';
import Contador from './components/Contador/Contador';
import reportWebVitals from './reportWebVitals';
import PadreDibujo from './components/MatematicasDibujo/PadreDibujo';
import Car from './components/Car/Car';

ReactDOM.render(
  <div className="App">
    <Car Marca="Pontiac" Modelo="Firebird" 
    Aceleracion="20" VelocidadMaxima="210"/>
    <Car Marca="Seat" Modelo="600" 
    Aceleracion="2" VelocidadMaxima="90"/>
    <Car Marca="Audi" Modelo="A6 Sportback" 
    Aceleracion="30" VelocidadMaxima="270"/>        
  </div> ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
