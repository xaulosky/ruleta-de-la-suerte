import React, { useEffect, useState } from 'react';
import { Wheel } from 'react-custom-roulette'
import flechita from '../assets/flechita.png';
import botoncentrado from '../assets/botoncentra.png';
import Modal from './Modal';

const data = [
  { option: 'BOTELLA', },
  { option: 'SIGA PARTICIPANDO', },
  { option: 'comida' },
  { option: 'LLAVERO' },
  { option: 'SIGAPARTICIPANDO' },
  { option: 'STICKER' },
  { option: 'SIGAPARTICIPANDO' },
  { option: 'POSTAL' },
  { option: 'SIGAPARTICIPANDO' },
  { option: 'SIGAPARTICIPANDO' },

]

const Ruleta = () => {
  const [ganador, setGanador] = useState('');
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const [showModal, setShowModal] = useState(false);


  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      setGanador(newPrizeNumber - 1)
    }
  }


  return (
    <>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        backgroundColors={['#dd5114', '#eeee']}
        pointerAngle={0}
        outerBorderColor={["#22130D"]}
        outerBorderWidth={[20]}
        innerBorderColor={["#f2f2f2"]}
        radiusLineColor={["tranparent"]}
        radiusLineWidth={[1]}
        fontSize={10}
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
        data={data}
        onStopSpinning={() => {
          setMustSpin(false);
          setShowModal(true);
        }}
      />
      <img src={botoncentrado} onClick={handleSpinClick} className='boton' alt="boton" />
      <Modal showModal={showModal} setShowModal={setShowModal} ganador={data[ganador]} />

    </>
  );
}

export default Ruleta;