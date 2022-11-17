import React from 'react'

const BurgerButton = ({areMenuClose, setAreMenuClose}) => {
  return (
    <>
      <button
        className={`cursor-pointer w-[26px] h-[22px] relative z-20 md:hidden
        ${areMenuClose && 'relative'} 
        ${!areMenuClose && 'sm:absolute sm:right-2'}`}
        onClick={() => setAreMenuClose(prev => !prev)}
      >
        <span
          className={`absolute h-[4px] bg-dark rounded-full left-0 right-0 transition-all duration-500 top-0 ${
            !areMenuClose && 'rotate-45 top-1/2'
          }`}
        ></span>
        <span
          className={`absolute h-[4px] bg-dark rounded-full left-0 right-0 transition-all duration-500 top-2 ${
            !areMenuClose && 'opacity-0 -translate-x-6'
          }`}
        ></span>
        <span
          className={`absolute h-[4px] bg-dark rounded-full left-0 right-0 transition-all duration-500 bottom-0  ${
            !areMenuClose && '-rotate-45 top-1/2'
          }`}
        ></span>
      </button>
      <div
        className={`absolute top-0 right-0 bottom-0 left-0 z-[5] cursor-pointer ${
          areMenuClose && 'hidden'
        }`}
        onClick={() => setAreMenuClose(prev => !prev)}
      ></div>
    </>
  )
}

export default BurgerButton
