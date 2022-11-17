import React from 'react'

const NavList = ({children}) => {
  return (
    <ul className='flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-12 mx-auto'>
      {children}
    </ul>
  )
}

export default NavList
