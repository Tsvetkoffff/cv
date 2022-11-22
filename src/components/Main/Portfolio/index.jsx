import React from 'react'
import Section from '/src/components/common/Section'
import Heading from '/src/components/common/Heading'
import ProjectCardsList from '/src/components/Main/Portfolio/ProjectCardsList'
import Wrapper from '/src/components/Main/Portfolio/Wrapper'

const Portfolio = () => {
  const projects = [
    {
      name: 'Shelter',
      year: '2022',
      bgColor: 'bg-orange',
      mobileBg: 'bg-[url("/src/assets/images/bg-shelter-mobile.png")]',
      desktopBg: 'xl:bg-[url("/src/assets/images/bg-shelter.png")]',
    },
    {
      name: 'Hacker-news',
      year: '2022',
      bgColor: 'bg-lightGray',
      mobileBg: 'bg-[url("/src/assets/images/bg-hacker-news-mobile.png")]',
      desktopBg: 'xl:bg-[url("/src/assets/images/bg-hacker-news.png")]',
    },
  ]

  return (
    <Section id='portfolio'>
      <Wrapper>
        <Heading Tag='h2' dot>Portfolio</Heading>
        <ProjectCardsList projects={projects} />
      </Wrapper>
    </Section>
  )
}

export default Portfolio
