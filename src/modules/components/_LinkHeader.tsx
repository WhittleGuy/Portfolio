import React from 'react'
import { Particles } from '.'

const LinkHeader = (): JSX.Element => {
  return (
    <div className="link-header">
      <div className="particle-header">
        {/* <Particles width={2560} height={222.83} /> */}
      </div>
      <div className="link-bar">
        <a
          href="https://www.github.com/whittleguy"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-github fa-2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/brandon-whittle-9568b975/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-linkedin fa-2x" />
        </a>
        <a
          href="https://www.twitter.com/whittleguyyy"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-twitter fa-2x" />
        </a>
      </div>
    </div>
  )
}

export default LinkHeader
