import React from 'react'
import SectionHeader from '../SectionHeader'
import {ReactComponent as TagIcon} from '/src/assets/icons/tag-icon.svg'

const AboutMe = () => {
  return (
    <section className='about-section'>
      <div className='about-section__wrapper py-9 space-y-5'>
        <SectionHeader text='About_me' dot={true} />
        <div className='description-wrapper flex flex-col space-y-7 md:space-y-0 md:flex-row-reverse  md:justify-end'>
          <p className='about-section__description text-justify text-sm md:w-[40%]'>
            I am a junior web developer, I live in Georgia. I am currently
            looking for a full-time job as a remote junior web developer at an
            IT company. I want to take on more work and improve my web developer
            skills.
          </p>
          <div className='md:w-[40%]'>
            <TagIcon/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
