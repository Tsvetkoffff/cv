import React from 'react'

import Section from '/src/components/common/Section'
import Heading from '/src/components/common/Heading'
import Text from '/src/components/common/Text'

import Wrapper from '/src/components/Main/About/Wrapper'
import ContentContainer from '/src/components/Main/About/ContentContainer'
import TagIcon from './TagIcon'

const About = () => {
  return (
    <Section id='about'>
      <Wrapper>
        <Heading Tag='h2' dot>
          About_me
        </Heading>
        <ContentContainer>
          <Text className='text-base'>
            I am a junior front-end developer, very passionate about development
            and web technologies. Currently looking for commercial development
            experience, preferably in a team of professionals. I am sure that
            the experience gained in the learning process will be able to put
            into practice and bring real benefits to your team and business.
          </Text>
          <TagIcon />
        </ContentContainer>
      </Wrapper>
    </Section>
  )
}

export default About
