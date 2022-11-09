import React from 'react'

const SkillsList = ({list, title}) => {
  return (
    <div className='space-y-4'>
      <h3 className='text-primary text-xl'>{title}</h3>
      <ul className='flex flex-wrap'>
        {list.map(item => <li key={item} className='border border-dark p-2 rounded-full mr-3 mb-3 bg-white md:px-6'>{item}</li>)}
      </ul>
    </div>
  )
}

export default SkillsList