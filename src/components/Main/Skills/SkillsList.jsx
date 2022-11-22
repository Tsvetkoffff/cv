import React from 'react'
import Heading from '/src/components/common/Heading'
import SkillsListItem from './SkillsListItem'

const SkillsList = ({list, title}) => {
  return (
    <div className='space-y-4'>
      <Heading Tag='h3' className='text-primary'>
        {title}
      </Heading>
      <ul className='flex flex-wrap'>
        {list.map(item => (
          <SkillsListItem key={item}>
            {item}
          </SkillsListItem>
        ))}
      </ul>
    </div>
  )
}

export default SkillsList
