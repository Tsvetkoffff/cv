import React, {useState} from 'react'
import {ReactComponent as Logo} from '/src/assets/icons/logo.svg'
import useSetBodyScroll from '/src/hooks/bodyScroll'
import {useEffect} from 'react'
import BurgerButton from '../BurgerButton/index'
import NavList from '../NavList'

const Navigation = () => {
  const [linksList, setLinksList] = useState([
    'About me',
    'Portfolio',
    'Contacts',
  ])
  const [langsList, setLangsList] = useState(['en', 'ru'])
  const [areMenuClose, setAreMenuClose] = useState(true)
  const setBodyScroll = useSetBodyScroll()

  const menuBtnHandleClick = () => {
    setAreMenuClose(prev => !prev)
  }

  useEffect(() => {
    setBodyScroll(prev => !prev)
  }, [areMenuClose])

  return (
    <nav className='navigation'>
      <Logo className='navigation__logo' />
      <div
        className={`navigation__menu-wrapper
        ${areMenuClose && '-right-full'}`}
      >
        <NavList
          className='navigation__links-list'
          list={linksList}
          upperCase={false}
          textDecorations={true}
        />

        <NavList
          className='navigation__langs-list'
          list={langsList}
          upperCase={true}
          textDecorations={false}
        />
      </div>

      <BurgerButton
        areMenuClose={areMenuClose}
        menuBtnHandleClick={menuBtnHandleClick}
      />
    </nav>
  )
}

export default Navigation
