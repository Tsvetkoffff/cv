import React from 'react'
import Section from '/src/components/common/Section'
import Text from '/src/components/common/Text'
import SkillsList from '/src/components/Main/Skills/SkillsList'
import Heading from '/src/components/common/Heading'
import Wrapper from '/src/components/Main/Skills/Wrapper';
import TextContentWrapper from './TextContentWrapper';
import ListContentWrapper from './ListContentWrapper';

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
    </Section>
  )
}

export default Skills
