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
import useStorePremios from './store/storePremios';
import resetIcon from './assets/reset.png';
import viewIcon from './assets/view.png';


function App() {

  /* pedir clave para resetear premios */
  const [clave, setClave] = useState('');
  const [claveCorrecta, setClaveCorrecta] = useState(false);


  const resetTodosLosPremios = useStorePremios(state => state.resetTodosLosPremios);
  const premios = useStorePremios(state => state.premios);


  const onClickReset = () => {
    let clave = prompt("Ingrese clave para recargar cantidades de premios");
    if (clave === '123') {
      resetTodosLosPremios();
      alert('premios reseteados')
    } else {
      alert('clave incorrecta')
    }
  }

  const mostrarCantidadCadaPremio = () => {
    let clave = prompt("Ingrese clave para ver premios");
    if (clave === '123') {
      alert(premios.map((premio) => {
        return `${premio.nombre}: ${premio.cantidad} `
      }
      ))
    } else {
      alert('clave incorrecta')
    }

  }

  return (
    <div className='tablet'>
      <div className="opciones">
        <img onClick={() => onClickReset()} src={resetIcon} alt="" style={{
          width: '30px',
        }} />

        <img src={viewIcon} style={{
          width: '30px',
        }} onClick={() => mostrarCantidadCadaPremio()}
        />
      </div>

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
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default App;