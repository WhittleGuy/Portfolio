import React from 'react'
import {LinkHeader, ProjectCard} from '../components'
import {nanoid} from 'nanoid'

const Projects = (): JSX.Element => {
  return (
    <>
      <LinkHeader />
      <div className="page-container">
        <h1 className="section-title">Projects</h1>
        <div className="project-cards">
          {PROJECTS.map((p) => {
            return (
              <ProjectCard
                key={nanoid()}
                name={p.name}
                aff={p.aff ? p.aff : null}
                desc={p.desc}
                tags={p.tags}
                github={p.github}
                site={p.site}
                private={p.private}
                client={p.client}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

const PROJECTS = [
  {
    name: 'Portfolio',
    aff: 'Personal',
    desc: 'Personal website showing off various projects.',
    tags: ['TypeScript', 'React', 'Sass', 'HTML5', 'Frontend'],
    github: 'https://www.github.com/whittleguy/portfolio',
    site: 'https://www.brandonwhittle.com',
    private: false,
    client: true,
  },
  {
    name: 'MinerBytes Frontend',
    aff: 'Missouri University of Science & Technology',
    desc: 'The primary landing page and auth pages that allow customers to customize content and change display settings on their MinerBytes signage.',
    tags: [
      'TypeScript',
      'React',
      'Mobx',
      'Sass',
      'HTML5',
      'Frontend',
      'Axios',
      'GoogleOAuth',
    ],
    github: '',
    site: 'https://minerbytes.mst.edu/',
    private: true,
    client: true,
  },
  {
    name: 'MinerBytes Backend',
    aff: 'Missouri University of Science & Technology',
    desc: 'MariaDB database and Laravel based API that serves all MinerBytes products.',
    tags: ['PHP', 'Laravel', 'Backend', 'MySQL'],
    github: '',
    site: '',
    private: true,
    client: false,
  },
  {
    name: 'MinerBytes Touch',
    aff: 'Missouri University of Science & Technology',
    desc: 'Directory interface designed for use in various buildings accross the Missouri S&T campus.',
    tags: ['TypeScript', 'React', 'Mobx', 'Sass', 'HTML5', 'Frontend', 'Axios'],
    github: '',
    site: 'https://minerbytes.mst.edu/touch/',
    private: true,
    client: true,
  },
  {
    name: 'MinerBytes Web Client',
    aff: 'Missouri University of Science & Technology',
    desc: 'Frontend site that enables the MinerBytes team to deploy digital signage on any machine with a web browser.',
    tags: ['TypeScript', 'React', 'Sass', 'HTML5', 'Frontend', 'Axios'],
    github: '',
    site: '',
    private: true,
    client: false,
  },
]

export default Projects
