import React from 'react'

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
    <Wrapper>
      <Heading Tag='h2' dot>
        My_Portfolio
      </Heading>
      <ProjectCardsList projects={projects} />
    </Wrapper>
  )
}

export default Portfolio
