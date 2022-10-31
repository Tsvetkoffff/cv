import React from 'react'

const BurgerButton = ({areMenuClose, menuBtnHandleClick}) => {
  return (
    <>
      <button
        className={`burger-button
        ${areMenuClose && 'relative'} 
        ${!areMenuClose && 'sm:absolute sm:right-2'}`}
        onClick={() => menuBtnHandleClick()}
      >
        <span
          className={`button-line top-0 ${
            !areMenuClose && 'rotate-45 top-1/2'
          }`}
        ></span>
        <span
          className={`button-line top-2 ${
            !areMenuClose && 'opacity-0 -translate-x-6'
          }`}
        ></span>
        <span
          className={`button-line bottom-0  ${
            !areMenuClose && '-rotate-45 top-1/2'
          }`}
        ></span>
      </button>
      <div
        className={`absolute top-0 right-0 bottom-0 left-0 z-[5] cursor-pointer ${
          areMenuClose && 'hidden'
        }`}
        onClick={() => menuBtnHandleClick()}
      ></div>
    </>
  )
}

export default BurgerButton
