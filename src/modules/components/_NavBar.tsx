import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { ROUTES } from '../../routes'
import { NavTab } from '.'

const NavBar = (): JSX.Element => {
  const history = useHistory()
  const [activeTab, setActiveTab] = useState(-1)
  const [sticky, setSticky] = useState(false)

  const toggleActive = (index: number) => {
    if (activeTab !== index) setActiveTab(index)
  }

  window.onscroll = () => {
    const offset = document.getElementById('nav-bar').offsetTop
    if (window.pageYOffset >= offset) setSticky(true)
    else setSticky(false)
  }

  return (
    <nav id="nav-bar" className={sticky ? 'sticky' : null}>
      <div
        id="nav-bar-name"
        onClick={() => {
          history.push('/')
          setActiveTab(-1)
        }}
      >
        Brandon Whittle
      </div>
      {ROUTES.filter((r) => {
        if (!(r.title === 'Landing' || r.title === 'NotFound')) return true
      }).map((r, idx) => {
        return (
          <NavTab
            key={idx}
            r={r}
            active={activeTab === idx}
            handler={() => toggleActive(idx)}
          />
        )
      })}
    </nav>
  )
}

export default NavBar
