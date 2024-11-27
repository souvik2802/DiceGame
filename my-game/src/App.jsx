import logo from './logo.svg';
import './App.css';
import Startgame from './components/Startgame';
import { useState } from 'react';
import GamePlay from './components/GamePlay';

function App() {
  const[isGameStarted,setIsGameStarted] = useState(false);
  const toggleGamePlay = () =>{
    setIsGameStarted ((prev) => !prev);
  }

  return (
    <>
      {isGameStarted ? <GamePlay /> : <Startgame toggle={toggleGamePlay} />}
    </>
  );
}

export default App;
