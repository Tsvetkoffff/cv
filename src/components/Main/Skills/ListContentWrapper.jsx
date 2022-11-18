import React from 'react'

const ListContentWrapper = ({children}) => {
  return (
    <div className='flex flex-col'>{children}</div>
  )
}

export default ListContentWrapper