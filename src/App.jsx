import React from 'react'
import GreetSection from './components/GreetSection'
import Navigation from './components/Navigation'
import SocialBar from './components/SocialBar';

const App = () => {
  return (
    <>
      <header className='my-container'>
        <Navigation />
      </header>
      <main className='my-container relative'>
        <GreetSection />
        <SocialBar />
      </main>
    </>
  )
}

export default App
