import React from 'react'
import { useHistory } from 'react-router-dom'

const Footer = (): JSX.Element => {
  const history = useHistory()

  if (history.location.pathname === '') return null

  return (
    <div id="footer">
      <p>
        Brandon Whittle, <i className="far fa-copyright" />
        2021
      </p>
    </div>
  )
}

export default Footer
