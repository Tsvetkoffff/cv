import React from 'react'

const Button = ({text, mod, children}) => {
  const icon = React.cloneElement(children, {
    className: `${children.props.className} ${'button-icon'}`,
  })
  return (
    <button className={`button ${mod}`}>
      {icon}
      <span>{text}</span>
    </button>
  )
}

export default Button
