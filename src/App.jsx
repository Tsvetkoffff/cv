import React from 'react'
import GreetingSection from './components/GreetingSection'
import Navigation from './components/Navigation'

const App = () => {
  return (
    <>
      <header className='container font-medium text'>
        <Navigation />
      </header>
      <main>
        <GreetingSection />
      </main>
    </>
  )
}

export default App
