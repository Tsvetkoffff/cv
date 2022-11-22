import React from 'react'

const Navigation = ({areMenuClose, children}) => {
  return (
    <nav
      className={`fixed flex flex-col space-y-10 z-10 h-full right-0 top-0 justify-center p-10 shadow-2xl bg-white box-border transition-all duration-500 md:static md:flex-row md:space-y-0 md:p-0 md:shadow-none md:bg-none md:items-center md:flex-grow md:justify-end
      ${areMenuClose && '-right-full'}`}
    >
      {children}
    </nav>
  )
}

export default Navigation
