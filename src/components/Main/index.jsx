import React from 'react'
import SocialBar from '/src/components/common/SocialBar'
import Hello from '/src/components/Main/Hello'
import About from '/src/components/Main/About'
import Skills from '/src/components/Main/Skills'
import Education from '/src/components/Main/Education'
import Portfolio from '/src/components/Main/Portfolio'

const Main = () => {
  return (
    <main className='my-container relative'>
      <SocialBar />
      <Hello />
      <About />
      <Skills />
      <Education />
      <Portfolio />
    </main>
  )
}

export default Main
