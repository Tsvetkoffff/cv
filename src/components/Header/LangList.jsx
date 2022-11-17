import React from 'react'
import LangListItem from './LangListItem'

const LangList = () => {
  const list = ['en', 'ru']

  return (
    <ul className='flex self-end md:self-auto md:justify-self-end'>
      {list.map(item => (
        <LangListItem key={item} text={item} />
      ))}
    </ul>
  )
}

export default LangList