import React from 'react'
import { Carousel, SiteLinks, Tags } from '.'

const ProjectCard = (props: {
  name: string
  aff?: string
  desc: string
  tags: string[]
  github: string
  site: string
  private?: boolean
  client?: boolean
  images: string[] | null
}): JSX.Element => {
  return (
    <div className="project-card">
      <div className="info-section">
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
      {props.images ? <Carousel images={props.images} /> : null}
    </div>
  )
}

export default ProjectCard
