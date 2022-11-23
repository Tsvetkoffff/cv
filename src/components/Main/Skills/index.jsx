import React from 'react'

import Text from '/src/components/common/Text'
import Heading from '/src/components/common/Heading'

import SkillsList from '/src/components/Main/Skills/SkillsList'
import Wrapper from '/src/components/Main/Skills/Wrapper'
import TextContentWrapper from '/src/components/Main/Skills/TextContentWrapper'
import ListContentWrapper from '/src/components/Main/Skills/ListContentWrapper'

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
    <Wrapper>
      <TextContentWrapper>
        <Heading Tag='h2' dot>
          My_Skills
        </Heading>
        <Text className='text-base'>
          Example of the text size. Developing websites from scratch,
          integrating templates, programming components for Bitrix, parsing
          html, xml with processing the result. I work with the git version
          control system, php setup via php.ini, the skill of working in the
          Linux command line.
        </Text>
      </TextContentWrapper>
      <ListContentWrapper>
        <SkillsList list={technologies} title='Technologies' />
        <SkillsList list={libraries} title='Libraries' />
        <SkillsList list={frameworks} title='Frameworks' />
      </ListContentWrapper>
    </Wrapper>
  )
}

export default Skills
