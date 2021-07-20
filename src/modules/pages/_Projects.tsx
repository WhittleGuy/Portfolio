import React from 'react'
import { LinkHeader, PageContainer, ProjectCard } from '../components'
import { nanoid } from 'nanoid'
import MinerBytes_1 from '../images/MinerBytes-1.png'
import MinerBytes_2 from '../images/MinerBytes-2.png'
import MinerBytes_3 from '../images/MinerBytes-3.png'
import MinerBytes_4 from '../images/MinerBytes-4.png'
import Art_1 from '../images/Art-1.png'
import Art_2 from '../images/Art-2.png'
import Art_3 from '../images/Art-3.png'
import Art_4 from '../images/Art-4.png'

const Projects = (): JSX.Element => {
  return (
    <>
      <LinkHeader />
      <PageContainer title="Projects">
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
                images={p.images ? p.images : null}
              />
            )
          })}
        </div>
      </PageContainer>
    </>
  )
}

const PROJECTS = [
  {
    name: 'MinerBytes',
    aff: 'Missouri University of Science & Technology',
    desc: "TFrontend, database, and API development for Missouri S&T's custom digital signage.",
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
    images: [MinerBytes_1, MinerBytes_2, MinerBytes_3, MinerBytes_4],
  },
  {
    name: 'Generative Javascript',
    aff: 'Personal',
    desc: 'Generative art made with JS and P5.js.',
    tags: ['JavaScript', 'Sass', 'HTML5', 'Frontend', 'React'],
    github: 'https://www.github.com/whittleguy/programmaphic',
    site: 'https://www.asyoudo.art',
    private: false,
    client: true,
    images: [Art_1, Art_2, Art_3, Art_4],
  },
  {
    name: 'MinerBytes Touch',
    aff: 'Missouri University of Science & Technology',
    desc: 'Directory interface designed for use in various buildings accross the Missouri S&T campus. Utilizes main MinerBytes API. NB: This site is designed for 1080x1920 screens.',
    tags: ['TypeScript', 'React', 'Mobx', 'Sass', 'HTML5', 'Frontend', 'Axios'],
    github: '',
    site: 'https://minerbytes.mst.edu/touch/',
    private: true,
    client: true,
  },
  {
    name: 'Portfolio',
    aff: 'Personal',
    desc: 'Personal website showing off various projects.',
    tags: ['TypeScript', 'React', 'Sass', 'HTML5', 'Frontend'],
    github: 'https://www.github.com/whittleguy/portfolio',
    site: 'https://www.brandonwhittle.com',
    private: false,
    client: true,
    images: [],
  },
]

export default Projects
