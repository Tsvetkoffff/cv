import React from 'react'

const NavList = ({list, className, upperCase, textDecorations}) => {
  return (
    <ul className={className}>
      {list.map(item => (
        <li key={item} className='link'>
          <a href='#'>
            {textDecorations && `<`}
            {`${upperCase ? item.toUpperCase() : item}`}
            {textDecorations && `>`}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default NavList
