import React from 'react'
import { SiteLinks, Tags } from '.'

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
      <SiteLinks
        private={props.private}
        client={props.client}
        github={props.github}
        site={props.site}
      />
      <p className="description">{props.desc}</p>
      <Tags tags={props.tags} />
    </div>
  )
}

export default ProjectCard
