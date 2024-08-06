import './App.css';
import Boton from './componentes/Boton.js';
import Contador from './componentes/Contador.js';
import freeCodeCampLogo from './Imagenes/freecodecamp-logo.png';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);

  }
  const RestarClics = () => {
    setNumClics(numClics - 1)
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton
          texto='Sumar'
          esBotonDeClic="1"
          manejarClic={manejarClic} />
        <Boton
          texto='Reiniciar'
          esBotonDeClic="2"
          manejarClic={reiniciarContador} />
        <Boton
          texto='Restar'
          esBotonDeClic="3"
          manejarClic={RestarClics} />
      </div>
    </div>
  );
}

export default App;

