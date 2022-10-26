import React, {useState} from 'react'
import {ReactComponent as Logo} from '../assets/icons/logo.svg'
import useSetBodyScroll from './../hooks/bodyScroll'
import {useEffect} from 'react'

const Navigation = () => {
  const linksList = ['About me', 'Portfolio', 'Contacts']
  const langsList = ['en', 'ru']
  const [areMenuClose, setAreMenuClose] = useState(true)
  const setBodyScroll = useSetBodyScroll()

  const menuBtnHandleClick = () => {
    setAreMenuClose(prev => !prev)
  }

  useEffect(() => {
    setBodyScroll(prev => !prev)
  }, [areMenuClose])

  return (
    <nav
      className={`flex h-[58px] box-border items-center justify-between p-3`}
    >
      <Logo className='w-[32px] h-[32px] md:w-[40px] md:h-[40px]' />
      <div
        className={`fixed flex flex-col space-y-10 z-10 h-full right-0 top-0 justify-center p-10 shadow-2xl bg-white box-border transition-all duration-500 md:static md:flex-row md:space-y-0 md:p-0 md:shadow-none md:bg-none md:items-center md:flex-grow md:justify-end
        ${areMenuClose && '-right-full'}
        `}
      >
        <ul className='flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-12 mx-auto'>
          {linksList.map(item => (
            <li key={item} className='nav-link'>
              <a href='#'>{`<${item}>`}</a>
            </li>
          ))}
        </ul>

        <ul className='flex self-end md:self-auto md:justify-self-end'>
          {langsList.map(lang => (
            <li key={lang} className='nav-link'>
              {lang.toUpperCase()}
            </li>
          ))}
        </ul>
      </div>

      <div
        className='cursor-pointer w-[26px] h-[22px] relative z-20 md:hidden'
        onClick={() => menuBtnHandleClick()}
      >
        <span
          className={`absolute h-[4px] box-border bg-dark rounded-full left-0 right-0 top-0 transition-all duration-500 ${
            !areMenuClose && 'rotate-45 top-1/2'
          }`}
        ></span>
        <span
          className={`absolute h-[4px] box-border bg-dark rounded-full  left-0 right-0 top-2 transition-all duration-500 ${
            !areMenuClose && 'opacity-0 -translate-x-6'
          }`}
        ></span>
        <span
          className={`absolute h-[4px] box-border bg-dark rounded-full left-0 right-0 bottom-0 transition-all duration-500 ${
            !areMenuClose && '-rotate-45 top-1/2'
          }`}
        ></span>
      </div>
      <div
        className={`absolute top-0 right-0 bottom-0 left-0 z-[5] cursor-pointer ${
          areMenuClose && 'hidden'
        }`}
        onClick={() => menuBtnHandleClick()}
      ></div>
    </nav>
  )
}

export default Navigation
