import React from 'react'
import { LinkHeader, PageContainer } from '../components'

const About: React.FC = () => {
  return (
    <>
      <LinkHeader />
      <PageContainer title="About">
        <p>
          Born and raised in Trenton, Missouri by two veterinarian parents,
          there was no shortage of animals, science, and fun "experiments"
          during my childhood. This love of experimentation at a young age often
          lead to reprimands from my parents, as having a small child running
          around playing with needles, IV bags, and the tools in my father's
          workshop wasn't the safest of activities. However, that didn't stop me
          from making an "exercise machine" from IV bags, lines and valves,
          hydraulic machines out of syringes, or catapults using rubber bands
          and spoons from the kitchen.
        </p>
        <br />
        <p>
          This love for experiments and building things left me with a passion
          for math and science in high school, and by the time I entered my
          senior year, I had my eyes on earning an engineering degree from
          Missouri University of Science & Technology. In the spring of 2018, I
          began taking university classes. At that point, I was unsure of what I
          wanted to major in, but knew that I greatly enjoyed the exposure to
          math and science.
        </p>
        <br />
        <p>
          My first job with the university was with IT Media Services, which put
          me in a production room choked full of A/V equipment to produce the
          university's distance classes. It was from one of these rooms that I
          watched and listened to a class in remediation taught by Dr. Robert
          Taylor. That class peaked my interest in environmental engineering,
          and after speaking with the department chair, Dr. Joel Burken, I found
          it tickled all the right parts of my brain. It has science,
          technology, and care of other people and the environment built right
          in. I had made up my mind. I was going to become an environmental
          engineer.
        </p>
        <br />
        <p>
          When COVID-19 hit, I was laid off from my job with ITMS. I continued
          to take classes at the university, and eventually landed a job with IT
          Research Support Solutions. Now, I still work with ITRSS, and I only
          have eight classes left before I graduate with my degree in
          environmental engineering.
        </p>
        <br />
        <p>
          Environmental engineering can be romanticized as "saving the earth,"
          but that's not what it really is. It's about the health and safety of
          people and the ecosystems we live in. Remediation is a comfortable
          niche in between providing better health and safety to humans, and
          improving our past impacts on the planet. The field is so new, and has
          so many opportunities for advancement in technology and techniques,
          and I want to be a part of that.
        </p>
      </PageContainer>
    </>
  )
}

export default About
