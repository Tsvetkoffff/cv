import React from 'react'

const Wrapper = ({children}) => {
  return (
    <div className='flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-12'>
      {children}
    </div>
  )
}

export default Wrapper
