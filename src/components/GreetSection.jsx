import React from 'react'
import Photo from '../assets/photo.png'
import ButtonPrimary from './ButtonPrimary'
import ButtonWhite from './ButtonWhite'

const GreetingSection = () => {
  return (
    <section className='greet-section'>
      <img
        src={Photo}
        alt='This is my photo'
        className='greet-section__photo'
      />
      <div>
        <p className='greet-section__status'>ready to work</p>
        <h2 className='greet-section__heading'>
          {'<Hello!/>'}
          <br /> I am Slava
          <br /> Frontend developer
        </h2>
        <div className='greet-section__buttons-wrapper'>
          <ButtonPrimary />
          <ButtonWhite />
        </div>
      </div>
    </section>
  )
}

export default GreetingSection
