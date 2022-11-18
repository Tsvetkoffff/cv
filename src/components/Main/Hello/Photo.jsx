import React from 'react'
import image from '/src/assets/photo.png'

const Photo = () => {
  return (
    <img
      src={image}
      alt='This is my photo'
      className='w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-60 lg:h-60'
    />
  )
}

export default Photo
