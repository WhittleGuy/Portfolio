import React from 'react'
import {nanoid} from 'nanoid'

const ProjectCard = (props: {
  name: string
  aff?: string
  desc: string
  tags: string[]
  github: string
  site: string
  private?: boolean
  client?: boolean
}): JSX.Element => {
  return (
    <div className="project-card">
      <p className="affiliation">{props.aff ? props.aff : ' '}</p>
      <h3 className="title">{props.name}</h3>

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
      <p className="description">{props.desc}</p>

      <div className="tags">
        {props.tags.sort().map((tag) => {
          return (
            <p key={nanoid()} className={`tag ${tag}`}>
              {tag}
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default ProjectCard
