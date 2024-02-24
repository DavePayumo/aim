import './Scoreboard.css'

type Props = {
  hasStarted: Boolean
  startGame: () => void
  missedClicks: Number
  goodClicks: Number
}

const Scoreboard = ({
  hasStarted,
  startGame,
  missedClicks,
  goodClicks,
}: Props) => {
  const renderStuff = () => {
    return !hasStarted ? (
      <button
        className='start-btn'
        onClick={handleStartClick}
      >
        Start
      </button>
    ) : (
      <div className='scores-wrapper'>
        <p className='good-clicks'>Good Clicks</p>
        <p className='score-number good'>{String(goodClicks)}</p>

        <p className='missed-clicks'>Missed Clicks</p>
        <p className='score-number missed'>{String(missedClicks)}</p>
      </div>
    )
  }

  const handleStartClick = (e: React.SyntheticEvent) => {
    const btn = e.target as HTMLButtonElement
    btn.setAttribute(
      'style',
      'transition: transform 0.2s; transform: scale(0,1);'
    )

    btn.ontransitionend = () => {
      startGame()
    }
  }

  return (
    <>
      <div className='scoreBoard-wrapper'>{renderStuff()}</div>
    </>
  )
}

export default Scoreboard
