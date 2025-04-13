import { useState } from "react";

const diceImages = [
  "../assets/images/dice-empty.png",
  "../assets/images/dice1.png",
  "../assets/images/dice2.png",
  "../assets/images/dice3.png",
  "../assets/images/dice4.png",
  "../assets/images/dice5.png",
  "../assets/images/dice6.png",
];

export default function Dice() {
  const getRandomDice = () => diceImages[Math.floor(Math.random() * 6)];

  const [dice, setDice] = useState(getRandomDice());

  const handleClick = () => {
    setDice("../assets/images/dice-empty.png");

    setTimeout(() => {
      setDice(getRandomDice());
    }, 1000);
  };

  return <img src={dice} alt="dice" onClick={handleClick} />;
}
