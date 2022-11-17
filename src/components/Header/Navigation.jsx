import React from 'react'
import NavList from '/src/components/Header/NavList'
import LangList from '/src/components/Header/LangList'

const Navigation = ({areMenuClose}) => {
  return (
    <nav
      className={`fixed flex flex-col space-y-10 z-10 h-full right-0 top-0 justify-center p-10 shadow-2xl bg-white box-border text-grey tracking-tightest font-medium transition-all duration-500 md:static md:flex-row md:space-y-0 md:p-0 md:shadow-none md:bg-none md:items-center md:flex-grow md:justify-end
      ${areMenuClose && '-right-full'}`}
    >
      <NavList />
      <LangList />
    </nav>
  )
}

export default Navigation
