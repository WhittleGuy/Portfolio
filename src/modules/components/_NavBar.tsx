import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {ROUTES} from '../../routes'
import {NavTab} from '.'

const NavBar = (): JSX.Element => {
  const history = useHistory()
  const [activeTab, setActiveTab] = useState(0)

  const toggleActive = (index: number) => {
    if (activeTab !== index) setActiveTab(index)
  }

  return (
    <nav id="nav-bar">
      <div id="nav-bar-name" onClick={() => history.push('/')}>
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
