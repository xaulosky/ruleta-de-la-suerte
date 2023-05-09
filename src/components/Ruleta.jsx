import React, { useEffect, useState } from 'react';
import { Wheel } from 'react-custom-roulette'
import flechita from '../assets/flechita.png';
import botoncentrado from '../assets/botoncentra.png';
import Modal from './Modal';
import useStorePremios from '../store/storePremios';


const Ruleta = () => {
  const [ganador, setGanador] = useState('');
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const [showModal, setShowModal] = useState(false);

  const premios = useStorePremios(state => state.premios);
  const setPremios = useStorePremios(state => state.setPremios);
  /* convierte los nombres de los premios en options en un nuevo array y agrega un siga entre cada uno participando */
  const premiosOptions = premios.map((premio) => {
    return { option: premio.nombre }
  }).reduce((acc, curr) => {
    return [...acc, curr, { option: 'SIGA PARTICIPANDO' }]
  }, [])

  console.log(premiosOptions)


  /* newPrizeNumber - 1 no deve ser SIGA PARTICIPANDO */
  const handleSpinClick = () => {
    if (!mustSpin) {

      let newPrizeNumber = 1;
      do {
        newPrizeNumber = Math.floor(Math.random() * premiosOptions.length);
      } while (premiosOptions[newPrizeNumber - 1].option === 'SIGA PARTICIPANDO' || premios[newPrizeNumber - 1].cantidad === 0);

      setPremios(premios.map((premio, index) => {
        if (premio.nombre === premiosOptions[newPrizeNumber - 1].option) {
          return { ...premio, cantidad: premio.cantidad - 1 }
        }
        return premio
      }))

      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      setGanador(newPrizeNumber - 1)
      console.log(premios)

    }
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
        radiusLineColor={["tranparent"]}
        radiusLineWidth={[1]}
        fontSize={10}
        fontFamily='Univers Next Pro XBlack Ext'
        pointerProps={{
          src: flechita,
          style: {
            position: 'absolute',
            top: '2%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '6%',
          }
        }}
        data={premiosOptions}
        onStopSpinning={() => {
          setMustSpin(false);
          setShowModal(true);
        }}
      />
      <img src={botoncentrado} onClick={handleSpinClick} className='boton' alt="boton" />
      <Modal showModal={showModal} setShowModal={setShowModal} ganador={premiosOptions[ganador]} />

    </>
  );
}

export default Ruleta;