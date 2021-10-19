import logo from './../../assets/images/logo.svg';
import './App.css';
import Saludo from './../Saludo/Saludo';

function App() {

  const metodoPadre = (descripcion) => {
    console.log("Soy " + descripcion);
  }

  return (
    <div className="App">
      <Saludo nombre="Adrian" edad="21" metodoPadre={metodoPadre}/>
      <Saludo nombre="Lucia" edad="18" metodoPadre={metodoPadre}/>
    </div>
  );
}

export default App;
