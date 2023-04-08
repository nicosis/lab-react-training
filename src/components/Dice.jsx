import React, { useState } from 'react';
import './Dice.css';

const random = () => {
  return Math.floor(Math.random() * 6) + 1;
};

const Dice = () => {
  const [diceNumber, setDiceNumber] = useState(require(`../assets/images/dice-empty.png`));
  const [clase, setClase] = useState('dice-container');

  const handleClick = () => {
    setDiceNumber(require(`../assets/images/dice-empty.png`));
    setClase(clase + ' rotate-scale-down');
    setTimeout(() => {
      setDiceNumber(require(`../assets/images/dice${random()}.png`));
      setClase('dice-container');
    }, 500);
  };

  return (
    <div className={clase}>
      <img onClick={handleClick} src={diceNumber} alt="dice img" />
    </div>
  );
};

export default Dice;
