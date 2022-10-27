import React from 'react'
import {ReactComponent as EnvelopIcon} from '../assets/icons/envelope.svg'

const ButtonPrimary = () => {
  return (
    <button className='button button--primary'>
      <EnvelopIcon className='button-icon' />
      <span>contact me</span>
    </button>
  )
}

export default ButtonPrimary
