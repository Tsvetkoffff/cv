import React from 'react'
import NavListItem from './NavListItem'

const NavList = () => {
  const list = [
    {id: 'about_me', text: 'About me'},
    {id: 'portfolio', text: 'Portfolio'},
    {id: 'contacts', text: 'Contacts'},
  ]

  return (
    <ul className='flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-12 mx-auto'>
      {list.map(item => (
        <NavListItem key={item.id} text={item.text} id={item.id} />
      ))}
    </ul>
  )
}

export default NavList
