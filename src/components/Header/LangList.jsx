import React from 'react'

const LangList = ({children}) => {
  return (
    <ul className='flex self-end md:self-auto md:justify-self-end'>
      {children}
    </ul>
  )
}

export default LangList