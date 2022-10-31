import React from 'react'

const SectionHeader = ({text, dot}) => {
  return (
    <h2 className='section-header'>
      {text}
      {dot && <span className='text-primary'>.</span>}
    </h2>
  )
}

export default SectionHeader
