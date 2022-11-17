import React from 'react'

const SectionHeader = ({text, dot}) => {
  return (
    <h2 className='relative font-medium text-dark tracking-tightest text-[1.4em] leading-[130%] lg:leading-[130%] lg:text-4xl xl:leading-[130%] xl:text-5xl'>
      {text}
      {dot && <span className='text-primary'>.</span>}
    </h2>
  )
}

export default SectionHeader
