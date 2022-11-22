import React from 'react'
import {Link} from 'react-scroll'

const NavListItem = ({id, text, setAreMenuClose}) => {
  return (
    <li className='cursor-pointer text-grey hover:text-primary transition-colors p-2 text-base font-medium'>
      <Link to={id} spy={true} smooth={true} duration={500} onClick={() => setAreMenuClose(true)}>
        {`<${text}>`}
      </Link>
    </li>
  )
}

export default NavListItem
