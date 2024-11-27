import React from 'react'
import './TotalScore.css';

const TotalScore = ({score}) => {
  return (
    <div className='t-score'>
      <h1>{score}</h1>
      <p>Total Score</p>
    </div>
    )
}

export default TotalScore