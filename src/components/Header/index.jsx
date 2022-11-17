import React from 'react'
import {useMenuToggle} from '/src/hooks'

import HeaderWrapper from '/src/components/Header/HeaderWrapper'
import Logo from '/src/components/Header/Logo'
import Navigation from '/src/components/Header/Navigation'
import NavList from '/src/components/Header/NavList'
import LangList from '/src/components/Header/LangList'
import NavListItem from '/src/components/Header/NavListItem'
import LangListItem from '/src/components/Header/LangListItem'
import BurgerButton from '/src/components/Header/BurgerButton'

const Header = () => {
  const [areMenuClose, setAreMenuClose] = useMenuToggle()

  const links = [
    {id: 'about', text: 'About me'},
    {id: 'portfolio', text: 'Portfolio'},
    {id: 'contacts', text: 'Contacts'},
  ]

  const langs = ['en', 'ru']

  return (
    <header className='my-container'>
      <HeaderWrapper>
        <Logo />
        <Navigation areMenuClose={areMenuClose}>
          <NavList>
            {links.map(item => (
              <NavListItem
                key={item.id}
                text={item.text}
                id={item.id}
                setAreMenuClose={setAreMenuClose}
              />
            ))}
          </NavList>
          <LangList>
            {langs.map(item => (
              <LangListItem
                key={item}
                text={item}
                setAreMenuClose={setAreMenuClose}
              />
            ))}
          </LangList>
        </Navigation>
        <BurgerButton
          areMenuClose={areMenuClose}
          setAreMenuClose={setAreMenuClose}
        />
      </HeaderWrapper>
    </header>
  )
}

export default Header
