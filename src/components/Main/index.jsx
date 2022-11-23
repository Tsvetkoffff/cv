import React from 'react'

import SocialBar from '/src/components/common/SocialBar'
import Section from '/src/components/common/Section'

import Hello from '/src/components/Main/Hello'
import About from '/src/components/Main/About'
import Skills from '/src/components/Main/Skills'
import Education from '/src/components/Main/Education'
import Portfolio from '/src/components/Main/Portfolio'

const Main = () => {
  return (
    <main className='my-container relative'>
      <SocialBar />
      <Section className='bg-lightGray'>
        <Hello />
      </Section>
      <Section id='about'>
        <About />
      </Section>
      <Section className='bg-lightGray' id='skills'>
        <Skills />
      </Section>
      <Section id='education'>
        <Education />
      </Section>
      <Section id='portfolio'>
        <Portfolio />
      </Section>
    </main>
  )
}

export default Main
