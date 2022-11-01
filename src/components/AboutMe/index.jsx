import React from 'react'
import SectionHeader from '../SectionHeader'
import {ReactComponent as TagIcon} from '/src/assets/icons/tag-icon.svg'
import Section from '/src/components/Section'

const AboutMe = () => {
  return (
    <Section className='about-section'>
      <div className='about-section__wrapper space-y-5'>
        <SectionHeader text='About_me' dot={true} />
        <div className='description-wrapper flex flex-col space-y-7 md:space-y-0 md:flex-row-reverse  md:justify-end'>
          <p className='about-section__description text-justify text-sm box-border md:p-3 md:w-[46%]'>
            I am a junior front-end developer, very passionate about development
            and web technologies. Currently looking for commercial development
            experience, preferably in a team of professionals. I am sure that
            the experience gained in the learning process will be able to put
            into practice and bring real benefits to your team and business.
          </p>
          <div className='md:py-3 md:w-[40%]'>
            <TagIcon />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default AboutMe
