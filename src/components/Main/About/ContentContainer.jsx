import React from 'react'

const ContentContainer = ({children}) => {
  return (
    <div className='flex flex-col gap-7 md:flex-row-reverse md:justify-end md:gap-28 md:w-[90%] lg:gap-48  xl:gap-60'>
      {children}
    </div>
  )
}

export default ContentContainer
