import React from 'react'
import { LinkHeader, PageContainer } from '../components'

const Skills = (): JSX.Element => {
  return (
    <>
      <LinkHeader />
      <PageContainer title="Skills">
        <div className="skills-content">
          <div className="skill-section">
            <div className="hard-skills">
              <h2>Hard Skills</h2>
              <ul>
                <li>TypeScript</li>
                <li>React</li>
                <li>Python</li>
                <li>Go</li>
                <li>Yarn</li>
                <li>Linux</li>
                <li>SolidWorks</li>
                <li>Adobe Photoshop</li>
                <li>Adobe Illustrator</li>
                <li>Microsoft Office Suite</li>
              </ul>
            </div>
          </div>
          {/* <div className="skill-section">
            <div className="soft-skills">
              <h2>Soft Skill</h2>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div> */}

          <div className="skill-section">
            <div className="coursework">
              <h2>Coursework</h2>
              <ul>
                <li>Environmental Chemistry</li>
                <li>Environmental Biology</li>
                <li>Environmental Law & Regulations</li>
                <li>Water & Wastewater Engineering</li>
                <li>Phytoremediation</li>
                <li>Thermodynamics</li>
                <li>Fluid Mechanics</li>
              </ul>
            </div>
          </div>
        </div>
      </PageContainer>
    </>
  )
}

export default Skills
