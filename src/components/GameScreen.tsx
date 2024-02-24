import { useEffect, useRef } from 'react'
import './GameScreen.css'

type Props = {
  hasStarted: Boolean
  addClicks: (isGood: Boolean) => void
}

const GameScreen = ({ hasStarted, addClicks }: Props) => {
  const gameWrapperRef = useRef<HTMLDivElement>(null)

  const handleTargetClick = (event: Event) => {
    addClicks(true)

    const elem = event.currentTarget as HTMLDivElement
    elem.onclick = () => {}
    elem.classList.add('delete')
    elem.setAttribute(
      'style',
      `top: 94%; left: 50%; transform: translateX(-50%)`
    )

    elem.ontransitionend = () => {
      gameWrapperRef.current?.removeChild(elem)
    }

    generateTarget()
  }

  const handleMissedClick = (e: React.SyntheticEvent) => {
    const elem = e.target as HTMLDivElement
    if (elem === gameWrapperRef.current) addClicks(false)
  }

  const generateTarget = () => {
    const randomX = Math.random() * 94 + '%'
    const randomY = Math.random() * 88 + '%'

    const newTarget = document.createElement('div')
    newTarget.className = 'ball target'
    newTarget.onclick = handleTargetClick
    gameWrapperRef.current?.appendChild(newTarget)

    setTimeout(() => {
      newTarget.setAttribute(
        'style',
        `top: ${randomY}; left: ${randomX}; transform: none;`
      )
    }, 0)
  }

  useEffect(() => {
    if (hasStarted)
      for (let i = 0; i < 4; i++) {
        generateTarget()
      }
  }, [hasStarted])

  return (
    <>
      <div
        className='game-wrapper'
        ref={gameWrapperRef}
        onClick={handleMissedClick}
      >
        <div className='ball'></div>
      </div>
    </>
  )
}

export default GameScreen
