import React, { useEffect, useState } from 'react';
import { Wheel } from 'react-custom-roulette'
import flechita from '../assets/flechita.png';
import botoncentrado from '../assets/imagenes/1000w/botoncito.png';
import Modal from './Modal';
import useStorePremios from '../store/storePremios';

import sombra from '../assets/imagenes/1000w/sombra.png';
import sonidoruleta from '../assets/sonidos/sonidoruleta.mp3';
import click from '../assets/sonidos/click.mp3';



const Ruleta = () => {


  const [ganador, setGanador] = useState('');
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const [showModal, setShowModal] = useState(false);

  const premios = useStorePremios(state => state.premios);
  const setPremios = useStorePremios(state => state.setPremios);
  const setPremiosLocalStorage = useStorePremios(state => state.setPremiosLocalStorage);
  /* convierte los nombres de los premios en options en un nuevo array y agrega un siga entre cada uno participando */
  const premiosOptions = premios.map((premio) => {
    return { option: premio.nombre, style: { fontSize: 17, backgroundColor: "#dd5114" } }
  }).reduce((acc, curr) => {
    return [...acc, curr, {
      option: /* siga participando con salto de lina */ 'SIGA PARTICIPANDO', style: {
        fontSize: 10,
        backgroundColor: '#eeee',
      }
    }]
  }, [])


  const audio = new Audio(sonidoruleta);
  const sonidoclick = new Audio(click);

  /* newPrizeNumber - 1 no deve ser SIGA PARTICIPANDO */
  const handleSpinClick = () => {
    if (!mustSpin) {
      let newPrizeNumber = 2;

      do {
        newPrizeNumber = Math.floor(Math.random() * (premiosOptions.length));
        console.log(premiosOptions[newPrizeNumber].option)

      } while (validarExistencia(newPrizeNumber));
      /* validar que la cantidad del premio no sea cero recuerda que el premiosOptions tiene mas valores */
      setPremios(premios.map((premio, index) => {
        if (premio.nombre === premiosOptions[newPrizeNumber].option) {
          return { ...premio, cantidad: premio.cantidad - 1 }
        }
        return premio
      }))



      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      setGanador(newPrizeNumber)
    }
  }

  const validarExistencia = (newPrizeNumber) => {
    const premio = premios.find((premio) => premio.nombre === premiosOptions[newPrizeNumber].option);
    return premio && premio.cantidad <= 0;
  }

  const comprobarCantidadTotal = () => {
    const cantidadTotal = premios.reduce((acc, curr) => {
      return acc + curr.cantidad
    }, 0)
    return cantidadTotal;
  }

  /* verificar si no hay premios al cerrar el modal */



  useEffect(() => {
    if (premios.length === 0) {
      setShowModal(true);
    }
  }, [premios])

  useEffect(() => {
    localStorage.setItem('premios', JSON.stringify(premios));
  }, [premios])

  return (
    <>

      <img src={flechita} className='flechita' alt="" style={{
        position: 'absolute',
        top: '1.7%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '5%',
        zIndex: 99

      }}
      />
      <img src={sombra} className='sombra' alt="" style={{


      }} />
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        textColors={['#ffffff', '#000000']}
        outerBorderWidth={[20]}
        innerBorderColor={["#f2f2f2"]}
        radiusLineColor={["transparent"]}
        radiusLineWidth={[1]}
        fontFamily='Univers Next Pro XBlack Ext'
        pointerProps={{
          style: {
            display: 'none'
          }
        }}
        data={premiosOptions}
        onStopSpinning={() => {
          setMustSpin(false)
          setShowModal(true)
        }}
        spinDuration={0.8}
        textDistance={55}
      />
      <img src={botoncentrado} onClick={handleSpinClick} className='boton' alt="boton" />
      <Modal showModal={showModal} setShowModal={setShowModal} ganador={premiosOptions[ganador]} />

    </>
  );
}

export default Ruleta;