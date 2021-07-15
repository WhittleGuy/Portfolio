import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

const NavTab = (props: {
  r: {title: string; path: string}
  active: boolean
  handler: () => void
}): JSX.Element => {
  const history = useHistory()
  const activeClass = props.active ? 'active' : 'inactive'

  return (
    <div
      className="nav-tab"
      id={activeClass}
      onClick={() => {
        activeClass === 'active' ? null : history.push(props.r.path)
        props.handler()
      }}
    >
      <p className="nav-tab-title">{props.r.title}</p>
    </div>
  )
}

export default NavTab
