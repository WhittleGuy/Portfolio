import React from 'react'

const SiteLinks = (props: {
  private: boolean
  client: boolean
  github: string
  site: string
}): JSX.Element => {
  return (
    <div className="link-container">
      {props.private ? (
        <p className="link private">
          <i className="fas fa-code-branch" /> Private
        </p>
      ) : (
        <a
          className="link"
          href={props.github}
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fas fa-code-branch" /> View Source
        </a>
      )}
      {!props.client ? (
        <p className="link private">
          <i className="fas fa-globe" /> Private
        </p>
      ) : (
        <a
          className="link"
          href={props.site}
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fas fa-globe" /> Visit Site
        </a>
      )}
    </div>
  )
}

export default SiteLinks
