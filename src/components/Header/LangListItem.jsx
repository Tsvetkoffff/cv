import React from 'react'

const LangListItem = ({text, setAreMenuClose}) => {
  return (
    <li className='cursor-pointer text-grey hover:text-primary transition-colors p-2 text-base font-medium'>
      <a href='#' onClick={() => setAreMenuClose(true)}>
        {text.toUpperCase()}
      </a>
    </li>
  )
}

export default LangListItem
