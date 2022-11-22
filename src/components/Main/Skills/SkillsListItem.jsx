import React from 'react'

const SkillsListItem = ({children}) => {
  return (
    <li
      className={`border border-dark p-2 rounded-full mr-3 mb-3 bg-white md:px-6 text-base`}
    >
      {children}
    </li>
  )
}

export default SkillsListItem
