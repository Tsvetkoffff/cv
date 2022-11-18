import React from 'react'
import Section from '/src/components/common/Section'
import SectionHeader from '/src/components/SectionHeader'
import SkillsList from '/src/components/Main/Skills/SkillsList'
import ProjectCard from '/src/components/ProjectCard'

const Portfolio = () => {
  const projects = [
    {
      name: 'Shelter',
      year: '2022',
      bgColor: 'bg-orange',
      bgImage: 'bg-[url("/src/assets/images/bg-shelter-mobile.png")]',
      usedSkills: (
        <SkillsList list={['HTML', 'CSS', 'JavaScript']} className='text-xs' />
      ),
    },
    {
      name: 'Hacker-news',
      year: '2022',
      bgColor: 'bg-lightGray',
      bgImage: 'bg-[url("/src/assets/images/bg-hacker-news-mobile.png")]',
      usedSkills: (
        <SkillsList list={['HTML', 'CSS', 'JavaScript']} className='text-xs' />
      ),
    },
  ]
  
  return (
    <Section id='portfolio'>
      <div className='space-y-4'>
        <SectionHeader text='Portfolio' dot={true} />
        <div className='flex flex-col gap-5 md:flex-row md:flex-wrap'>
          {projects.map(project => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Portfolio
