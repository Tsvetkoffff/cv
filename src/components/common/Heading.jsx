import React from 'react'

const Heading = ({Tag, dot, children}) => {
  return (
    <Tag className='relative font-medium text-dark text-lg lg:text-xl xl:text-2xl'>
      {children}
      {dot && <span className='text-primary'>.</span>}
    </Tag>
  )
}

export default Heading
