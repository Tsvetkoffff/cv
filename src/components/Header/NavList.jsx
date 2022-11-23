import React from 'react'

const NavList = ({children}) => {
  return (
    <ul className='flex flex-col gap-4 md:flex-row md:flex-grow md:justify-center'>
      {children}
    </ul>
  )
}

export default NavList
