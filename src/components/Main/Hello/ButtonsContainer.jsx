import React from 'react'

const ButtonsContainer = ({children}) => {
  return (
    <div className='flex flex-col gap-3 mt-3 lg:flex-row lg:gap-5 lg:mt-5'>
      {children}
    </div>
  )
}

export default ButtonsContainer
