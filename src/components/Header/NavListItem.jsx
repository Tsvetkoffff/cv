import React from 'react'
import {Link} from 'react-scroll'

const NavListItem = ({id, text, setAreMenuClose}) => {
  return (
    <li className='link'>
      <Link to={id} spy={true} smooth={true} duration={500} onClick={() => setAreMenuClose(true)}>
        {`<${text}>`}
      </Link>
    </li>
  )
}

export default NavListItem
