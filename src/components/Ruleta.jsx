import React, { useState } from 'react';
import { Wheel } from 'react-custom-roulette'
import flechita from '../assets/flechita.png';
import botoncentrado from '../assets/botoncentra.png';


const data = [
  { option: 'BOTELLA', },
  { option: 'SIGAPARTICIPANDO', },
  { option: '2' },
  { option: 'LLAVERO' },
  { option: '4' },
  { option: 'STICKER' },
  { option: '6' },
  { option: 'POSTAL' },
  { option: '8' },
]
const Ruleta = () => {
  const [ganador, setGanador] = useState();
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      setGanador(newPrizeNumber - 1);
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
        fontSize={30}
        pointerProps={{
          src: flechita,
          style: {
            position: 'absolute',
            top: '13px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '28px',
            height: '75px',
          }
        }}
        data={data}
        onStopSpinning={() => {
          setMustSpin(false);
        }}
      />
      <img src={botoncentrado} onClick={handleSpinClick} className='boton' alt="boton" />
    </>
  );
}

export default Ruleta;