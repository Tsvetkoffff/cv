import React from 'react'
import Photo from '/src/assets/photo.png'
import Button from '/src/components/Button'
import {ReactComponent as EnvelopIcon} from '/src/assets/icons/envelope.svg'
import {ReactComponent as ArrowDownIcon} from '/src/assets/icons/arrow-down.svg'
import Section from './../Section/index'

const GreetingSection = () => {
  return (
    <Section className='greet-section'>
      <div className='greet-section__warpper'>
        <div className='sm:w-2/5'>
          <img
            src={Photo}
            alt='This is my photo'
            className='greet-section__photo'
          />
        </div>
        <div className=''>
          <p className='greet-section__status'>ready to work</p>
          <h2 className='greet-section__heading'>
            {'<Hello!/>'}
            <br /> I am Slava
            <br /> Frontend developer
          </h2>
          <div className='greet-section__buttons-wrapper'>
            <Button text={'contact me'} mod='button--primary'>
              <EnvelopIcon />
            </Button>
            <Button text={'download cv'} mod='button--white'>
              <ArrowDownIcon />
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default GreetingSection
