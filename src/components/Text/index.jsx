import React from 'react'

const Text = ({children, className}) => {
  return (
    <p className={`text-justify text-sm box-border ${className}`}>{children}</p>
  )
}

export default Text