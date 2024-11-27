import React from 'react'

const startgame = ({toggle}) => {
  return (
    <div className='intro-main'>
      <div className='dices'>
        <img src="/images/dices.png" alt="dices" />
      </div>
      <div onClick={toggle} className='intro'>
        <h1>Dice Game</h1>
        <button className='intro-btn'>Play Now</button>
      </div>
    </div>
  )
}

export default startgame;