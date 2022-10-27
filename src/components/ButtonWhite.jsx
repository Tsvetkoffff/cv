import React from 'react'
import {ReactComponent as ArrowDownIcon} from '../assets/icons/arrow-down.svg'

const ButtonWhite = () => {
  return (
    <button className='button button--white'>
      <ArrowDownIcon className='button-icon' />
      <span>download cv</span>
    </button>
  )
}

export default ButtonWhite
