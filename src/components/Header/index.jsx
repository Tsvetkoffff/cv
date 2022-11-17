import React, {useState} from 'react'
import Logo from '/src/components/Header/Logo'
import Navigation from '/src/components/Header/Navigation'
import BurgerButton from '/src/components/Header/BurgerButton'

const Header = () => {
  const [areMenuClose, setAreMenuClose] = useState(true)

  return (
    <header className='my-container'>
      <div className='flex h-[58px] box-border items-center justify-between p-3'>
        <Logo />
        <Navigation areMenuClose={areMenuClose} />
        <BurgerButton
          areMenuClose={areMenuClose}
          setAreMenuClose={setAreMenuClose}
        />
      </div>
    </header>
  )
}

export default Header
