import React from 'react'

const Navigation = ({areMenuClose, children}) => {
  return (
    <nav
      className={`fixed flex flex-col gap-6 z-10 h-full w-full right-0 top-0 justify-center items-center bg-white transition-all duration-500 md:static md:flex-row md:gap-0 md:flex-grow
      ${areMenuClose && '-right-full'}`}
    >
      {children}
    </nav>
  )
}

export default Navigation
