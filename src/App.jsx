import React from 'react'
import GreetingSection from './components/GreetingSection'
import Navigation from './components/Navigation'

const App = () => {
  return (
    <>
      <header className='my-container'>
        <Navigation />
      </header>
      <main className='my-container'>
        <GreetingSection />
      </main>
    </>
  )
}

export default App
