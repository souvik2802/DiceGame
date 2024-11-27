import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RollDice from './RollDice'
import { useState,useEffect } from 'react'
const GamePlay = () => {
  const[score,setScore] = useState(0);
  const [selectedIndex,setSelectedIndex] = useState(null);
  const [diceNumber,setDiceNumber] = useState(1);

  
  useEffect(() => {
    if (selectedIndex !== null) {
      if (selectedIndex === diceNumber) {
        setScore((prev) => prev + diceNumber);
       } else {
        setScore((prev) => prev - 2);
      }
    }
  }, [selectedIndex, diceNumber]);
  

  return (
    <main>
      <TotalScore score={score} setScore={setScore}/>
      <NumberSelector selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
      <RollDice diceNumber={diceNumber} setDiceNumber={setDiceNumber}/>
    </main>
  )
}

export default GamePlay