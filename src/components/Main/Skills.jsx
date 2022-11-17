import React from 'react'
import Section from '/src/components/common/Section'
import SectionHeader from '../SectionHeader/index'
import Text from '/src/components/Text'
import SkillsList from '/src/components/SkillsList';

const Skills = () => {
  const technologies = [
    'HTML5',
    'CSS3',
    'SASS',
    'JavaScript',
    'TypeScript',
    'NodeJS',
    'WebPack',
  ]
  const libraries = ['Tailwind', 'Bootstrap', 'Material UI', 'Axios', 'AntD']
  const frameworks = [
    'React',
    'Redux',
    'Redux Toolkit',
    'RTK Query',
    'React Router Dom',
  ]

  return (
    <Section className='bg-lightGray'>
      <div className='flex flex-col space-y-4  lg:space-y-0 md:w-[90%] lg:flex-row lg:items-center lg:justify-between'>
        <div className='space-y-4 lg:w-2/5'>
          <SectionHeader text='My_Skills' dot={true} />
          <Text>
            Example of the text size. Developing websites from scratch,
            integrating templates, programming components for Bitrix, parsing
            html, xml with processing the result. I work with the git version
            control system, php setup via php.ini, the skill of working in the
            Linux command line.
          </Text>
        </div>
        <div className='space-y-4 lg:w-1/2'>
          <SkillsList list={technologies} title='Technologies' />
          <SkillsList list={libraries} title='Libraries' />
          <SkillsList list={frameworks} title='Frameworks' />
        </div>
      </div>
    </Section>
  )
}

export default Skills
