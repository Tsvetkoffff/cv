import React from 'react'
import GreetSection from '/src/components/GreetSection'
import Navigation from '/src/components/Navigation'
import SocialBar from '/src/components/SocialBar'
import AboutMe from '/src/components/AboutMe'
import MySkills from '/src/components/MySkills'
import MyEducation from '/src/components/MyEducation'

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
        <MyEducation />
      </main>
    </>
  )
}

export default App
