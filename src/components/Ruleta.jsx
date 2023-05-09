import React, { useEffect, useState } from 'react';
import { Wheel } from 'react-custom-roulette'
import flechita from '../assets/flechita.png';
import botoncentrado from '../assets/botoncentra.png';
import Modal from './Modal';
import useStorePremios from '../store/storePremios';

import sombra from '../assets/imagenes/1000w/sombra.png';



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
    return { option: premio.nombre }
  }).reduce((acc, curr) => {
    return [...acc, curr, { option: 'SIGA PARTICIPANDO' }]
  }, [])

  /* newPrizeNumber - 1 no deve ser SIGA PARTICIPANDO */
  const handleSpinClick = () => {
    if (comprobarCantidadTotal() <= 0) {
      alert("premios agotados")
      return;
    }
    else if (!mustSpin) {

      let newPrizeNumber = 2;
      do {
        newPrizeNumber = Math.floor(Math.random() * (premiosOptions.length + 1));
      } while (premiosOptions[newPrizeNumber - 1].option === 'SIGA PARTICIPANDO' || validarExistencia(newPrizeNumber) || newPrizeNumber == 0);

      /* validar que la cantidad del premio no sea cero recuerda que el premiosOptions tiene mas valores */


      setPremios(premios.map((premio, index) => {
        if (premio.nombre === premiosOptions[newPrizeNumber - 1].option) {
          return { ...premio, cantidad: premio.cantidad - 1 }
        }
        return premio
      }))

      setPremiosLocalStorage(premios.map((premio, index) => {
        if (premio.nombre === premiosOptions[newPrizeNumber - 1].option) {
          return { ...premio, cantidad: premio.cantidad - 1 }
        }
        return premio
      }))


      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      setGanador(newPrizeNumber - 1)
      /* comprueba si la cantidad de todos los premios es cero muestra de premios agotados */
      if (premios.every(premio => premio.cantidad === 0)) {
        alert("premios agotados")
        return;
      }
    }
  }

  const validarExistencia = (newPrizeNumber) => {
    const premio = premios.find((premio) => premio.nombre === premiosOptions[newPrizeNumber - 1].option);
    return premio && premio.cantidad <= 0;
  }

  const comprobarCantidadTotal = () => {
    const cantidadTotal = premios.reduce((acc, curr) => {
      return acc + curr.cantidad
    }, 0)
    return cantidadTotal;
  }



  useEffect(() => {
    if (premios.length === 0) {
      setShowModal(true);
    }
  }, [premios])

  return (
    <>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        backgroundColors={['#dd5114', '#eeee']}
        outerBorderColor={["#22130D"]}
        outerBorderWidth={[20]}
        innerBorderColor={["#f2f2f2"]}
        radiusLineColor={["transparent"]}
        radiusLineWidth={[1]}
        fontSize={10}
        fontFamily='Univers Next Pro XBlack Ext'
        pointerProps={{
          src: flechita,
          style: {
            position: 'absolute',
            top: '2%',
            left: '50%',
            transform: 'rotate(5deg)',
            width: '6%',
            zIndex: 9999
          }
        }}
        data={premiosOptions}
        onStopSpinning={() => {
          setMustSpin(false);
          setShowModal(true);
        }}
        spinDuration={0.8}
        textDistance={55}
      />
      <img src={botoncentrado} onClick={handleSpinClick} className='boton' alt="boton"  />
      <Modal showModal={showModal} setShowModal={setShowModal} ganador={premiosOptions[ganador]} />

    </>
  );
}

export default Ruleta;