import React from 'react'
import GreetSection from '/src/components/GreetSection'
import Navigation from '/src/components/Navigation'
import SocialBar from '/src/components/SocialBar'
import AboutMe from '/src/components/AboutMe'
import MySkills from '/src/components/MySkills'
import MyEducation from '/src/components/MyEducation'
import Portfolio from '/src/components/Portfolio'

const App = () => {
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
    <>
      <header className='my-container'>
        <Navigation />
      </header>
      <main className='my-container relative'>
        <SocialBar />
        <GreetSection />
        <AboutMe />
        <MySkills
          technologies={technologies}
          libraries={libraries}
          frameworks={frameworks}
        />
        <MyEducation />
        <Portfolio />
      </main>
    </>
  )
}

export default App
