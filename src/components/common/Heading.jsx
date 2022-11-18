import React from 'react'

const Heading = ({Tag, dot, children}) => {
  let size = ''

  if(Tag === 'h1' || Tag === 'h2') {
    size = 'text-lg lg:text-xl xl:text-2xl'
  } else if(Tag === 'h3') {
    size = ''
  }

  return (
    <Tag className='relative font-medium text-lg lg:text-xl xl:text-2xl'>
      {children}
      {dot && <span className='text-primary'>.</span>}
    </Tag>
  )
}

export default Heading
