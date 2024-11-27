import React, {useState} from 'react'

const RollDice = ({diceNumber,setDiceNumber}) => {
    // const [diceNumber,setDiceNumber] = useState(1);
    
    const diceRoll = () =>{
      const randomNumber = Math.floor(Math.random() * 6) +1;
      setDiceNumber(randomNumber);
    };
  return (
    <div style={{textAlign:'center',marginTop:'50px'}}>
      <img src={`/images/dice_${diceNumber}.png`}
      alt={`Dice showing ${diceNumber}`}
      style={{width:'200px',height:'200px',cursor:'pointer',marginTop:'7px'}}
      onClick={diceRoll}
       />
    </div>
  )
}

export default RollDice