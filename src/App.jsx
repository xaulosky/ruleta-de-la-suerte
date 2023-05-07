import React, { useState } from 'react'
import Ruleta from './components/Ruleta';
import TextoAbajo from './components/ui/TextoAbajo';
import Flecha from './components/ui/Flecha';
import './App.css';
import imagen1 from './assets/imagenes/SVG/imagen1.svg';
import imagen2 from './assets/imagenes/SVG/imagen2.svg';
import imagen3 from './assets/imagenes/SVG/imagen3.svg';
import imagen4 from './assets/imagenes/SVG/imagen4.svg';
import imagen5 from './assets/imagenes/SVG/imagen5.svg';

function App() {
  return (
    <div className='tablet'>
      <div className="arriba">
        <img src={imagen1} alt="" className='imagen1' />
        <img src={imagen2} alt="" className='imagen2' />
        <div className="logos">
          <img src={imagen3} alt="" className='imagen3' />
          <img src={imagen4} alt="" className='imagen4' />
        </div>
      </div>
      <div className="abajo">
        <div className="contenedor_ruleta">
          <Ruleta />
        </div>

      </div>
      <div className="pie">
        <img src={imagen5} alt="" className='imagen5' />
      </div>
    </div>
  );
}

export default App;