import React from 'react'

const Text = ({children, className}) => {
  return (
    <p
      className={`font-sans text-grey ${className}`}
    >
      {children}
    </p>
  )
}

export default Text
