import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {Particles, RightArrow, RoundButton} from '../components'

const Landing: React.FC = () => {
  const [type, setType] = useState('')
  const [showCaret, setShowCaret] = useState(true)
  const history = useHistory()
  const showClass = showCaret ? 'opacity-100' : 'opacity-0'
  const name = 'Brandon Whittle'

  const handler = () => {
    history.push('/about')
  }

  useEffect(() => {
    setTimeout(() => {
      let index = 0
      if (index < name.length) {
        const interval = setInterval(() => {
          setType(name.slice(0, index))
          index++
        }, 100)
        return () => clearInterval(interval)
      }
    }, 2000)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCaret(!showCaret)
    }, 500)
    return () => clearInterval(interval)
  })

  return (
    <div className="landing-container">
      <div className="title-container">
        <h1 id="landing-title">{type}</h1>
        <h1 className={`title-caret ${showClass}`}>|</h1>
      </div>

      <RoundButton id="title-button" handler={() => handler()}>
        <RightArrow />
      </RoundButton>
      <Particles wRatio={1} hRatio={1} />
    </div>
  )
}

export default Landing
