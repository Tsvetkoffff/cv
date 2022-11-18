import React from 'react'

const TextContentWrapper = ({children}) => {
  return (
    <div className='flex flex-col gap-6 lg:w-[60%]'>{children}</div>
  )
}

export default TextContentWrapper