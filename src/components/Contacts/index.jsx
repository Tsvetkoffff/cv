import React from 'react'
import Section from '/src/components/Section/'
import SectionHeader from '/src/components/SectionHeader'

const Contacts = () => {
  return (
    <Section className='flex-col gap-5 font-medium' id='contacts'>
      <SectionHeader text='Contacts' dot={true} />
      <div className='flex flex-col gap-4 md:flex-row md:gap-10'>
        <div className='flex flex-col gap-4'>
          <a href="tel:+79885438666">+ 7 (988) 543 86 66</a>
          <a href="mailto:tsvetkoffff@gmail.com">tsvetkoffff@gmail.com</a>
        </div>
        <div className='flex flex-col gap-4'>
          <a href="https://t.me/tsvetkoffff" className='border-b w-[fit-content]'>Telegram</a>
          <a href="https://wa.me/79885438666" className='border-b w-[fit-content]'>WhatsApp</a>
        </div>
      </div>
    </Section>
  )
}

export default Contacts
