import React from 'react'

const LangListItem = ({text}) => {
  return (
    <li className='link'>
      <a href='#'>
        {text.toUpperCase()}
      </a>
    </li>
  )
}

export default LangListItem