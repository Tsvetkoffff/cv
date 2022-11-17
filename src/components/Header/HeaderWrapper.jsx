import React from 'react'

const HeaderWrapper = ({children}) => {
  return (
    <div className='flex h-[58px] box-border items-center justify-between p-3'>
      {children}
    </div>
  )
}

export default HeaderWrapper
