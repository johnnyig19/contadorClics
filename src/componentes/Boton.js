import React from 'react';
import '../hoja-de-estilo/Boton.css';

function Boton({ texto, esBotonDeClic, manejarClic }) {
  return (
    <button
      className={esBotonDeClic =="1"? 'boton-clic' :esBotonDeClic =="2" ? 'boton-reiniciar':'boton-Restar'}
      onClick={manejarClic}>
      {texto}
    </button>
  );
}

export default Boton;