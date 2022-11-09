import React from 'react'
import GreetSection from '/src/components/GreetSection'
import Navigation from '/src/components/Navigation'
import SocialBar from '/src/components/SocialBar'
import AboutMe from '/src/components/AboutMe'
import MySkills from '/src/components/MySkills'

const App = () => {
  return (
    <>
      <header className='my-container'>
        <Navigation />
      </header>
      <main className='my-container relative'>
        <SocialBar />
        <GreetSection />
        <AboutMe />
        <MySkills />
      </main>
    </>
  )
}

export default App
