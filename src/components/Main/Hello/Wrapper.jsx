import React from 'react'

const Wrapper = ({children}) => {
  return (
    <div className='flex flex-col m-auto gap-3 sm:flex-row md:m-0 md:gap-16 xl:gap-28'>
      {children}
    </div>
  )
}

export default Wrapper
