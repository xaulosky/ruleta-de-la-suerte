import React, { useState } from 'react'
import Ruleta from './components/Ruleta';
import TextoAbajo from './components/ui/TextoAbajo';
import Flecha from './components/ui/Flecha';
import './App.css';
import Encabezado from './components/ui/Encabezado';


function App() {

  return (
    <div className='tablet'>
      <div className="arriba">
        <Encabezado className="encabezado" />
      </div>
      <div className="abajo">
        <div className="contenedor_ruleta">
          <Ruleta />
        </div>
        <div className="texto_abajo">
          <TextoAbajo className="" />
        </div>
      </div>
    </div>
  );
}

export default App;