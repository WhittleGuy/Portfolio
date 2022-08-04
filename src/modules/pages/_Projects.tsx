import React from 'react'
import { LinkHeader, PageContainer, ProjectCard } from '../components'
import { nanoid } from 'nanoid'
import LandingPage from '../images/landingPage.jpg'
import Art_1 from '../images/Art-1.jpg'
import Art_2 from '../images/Art-2.jpg'
import Art_3 from '../images/Art-3.jpg'
import Art_4 from '../images/Art-4.jpg'

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
    name: 'Pwnagotchi',
    aff: 'Personal',
    desc: 'Portable WPA handshake grabber based on an existing project (see linked site). The Raspberry Pi Zero W is outfitted with an RTC, Waveshare eInk screen, and a 3D printed case. Source files were modified slightly to fix bugs.',
    tags: ['Python', 'Raspberry Pi', 'Linux'],
    github:
      'https://github.com/WhittleGuy/pwnagotchi-docs/blob/main/pwnagotchi.md',
    site: 'https://pwnagotchi.ai/',
    private: true,
    client: true,
    images: [],
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
    images: [LandingPage],
  },
]

export default Projects
