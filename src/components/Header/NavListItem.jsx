import React from 'react'

const NavListItem = ({id, text}) => {
  return (
    <li className='link'>
      <a href={`#${id}`}>
        {`<${text}>`}
      </a>
    </li>
  )
}

export default NavListItem
