import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Premio from './Premio';

const Ruleta = () => {
  const [premios, setPremios] = useState([]);
 




  const [angulo, setAngulo] = useState(0);
  const [premioGanador, setPremioGanador] = useState(null);

  const girarRuleta = () => {
    const randomAngulo = Math.floor(Math.random() * 360 + 720);
    setAngulo(randomAngulo);

    setTimeout(() => {
      const indexPremioGanador = Math.floor(Math.random() * premios.length);
      setPremioGanador(premios[indexPremioGanador]);
    }, 4000);
  };

  const transformStyle = {
    transform: `rotate(${angulo}deg)`
  };


  
  useEffect(() => {
    setPremios([{
      id: 1,
      nombre: 'Premio 1',
      imagen: 'https://picsum.photos/200/300'
    }, {
      id: 2,
      nombre: 'Premio 2',
      imagen: 'https://picsum.photos/200/300'
    }, {
      id: 3,
      nombre: 'Premio 3',
      imagen: 'https://picsum.photos/200/300'
    }, {
      id: 4,
      nombre: 'Premio 4',
      imagen: 'https://picsum.photos/200/300'
    }, {
      id: 5,
      nombre: 'Premio 5',
      imagen: 'https://picsum.photos/200/300'1
    }, {
      id: 6,
      nombre: 'Premio 6',
      imagen: 'https://picsum.photos/200/300'
    }
    ])
    /* const obtenerPremios = async () => {
      const response = await axios.get('https://miapi.com/premios');
      setPremios(response.data);
    };

    obtenerPremios(); */
  }, []);

  return (
    <div className="ruleta">
      <div className="flecha"></div>
      <div className="ruleta-container" style={transformStyle}>
        {premios.map((premio) => (
          <Premio key={premio.id} premio={premio} />
        ))}
      </div>
      <button onClick={() => girarRuleta()}>¡Girar!</button>
      {premioGanador && <p>¡Felicidades! Ganaste: {premioGanador.nombre}</p>}
    </div>
  );
}

export default Ruleta;
