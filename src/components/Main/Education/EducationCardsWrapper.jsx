import React from 'react'

const EducationCardsWrapper = ({children}) => {
  return (
    <div className='grid gap-4 md:grid-cols-2 lg:gap-8 xl:grid-cols-3 xl:gap-10'>
      {children}
    </div>
  )
}

export default EducationCardsWrapper
