import { useState } from 'react'
import './App.css'
import GameScreen from './components/GameScreen'
import Scoreboard from './components/Scoreboard'

type StartGame = (isGood: Boolean) => void

const App = () => {
  const [hasStarted, sethasStarted] = useState(false)
  const [missedClicks, setMissedClicks] = useState(0)
  const [goodClicks, setGoodClicks] = useState(0)

  const addClicks: StartGame = isGood => {
    if (isGood) setGoodClicks(cv => cv + 1)
    else setMissedClicks(cv => cv + 1)
  }

  const startGame = (): void => {
    sethasStarted(true)
  }

  return (
    <>
      <GameScreen
        hasStarted={hasStarted}
        addClicks={addClicks}
      />

      <Scoreboard
        hasStarted={hasStarted}
        startGame={startGame}
        missedClicks={missedClicks}
        goodClicks={goodClicks}
      />
    </>
  )
}

export default App
