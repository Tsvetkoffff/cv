import React from 'react'
import Heading from '/src/components/common/Heading';

const SkillsList = ({list, title, className}) => {
  return (
    <div className='space-y-4'>
      <Heading Tag='h3'>{title}</Heading>
      <ul className='flex flex-wrap'>
        {list.map(item => <li key={item} className={`border border-dark p-2 rounded-full mr-3 mb-3 bg-white md:px-6 text-sm ${className}`}>{item}</li>)}
      </ul>
    </div>
  )
}

export default SkillsList
