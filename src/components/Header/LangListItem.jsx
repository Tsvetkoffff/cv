import React from 'react'

const LangListItem = ({text, setAreMenuClose}) => {
  return (
    <li className='link'>
      <a href='#' onClick={() => setAreMenuClose(true)}>
        {text.toUpperCase()}
      </a>
    </li>
  )
}

export default LangListItem
