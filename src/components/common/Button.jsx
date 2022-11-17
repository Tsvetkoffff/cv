import React from 'react'

const Button = ({text, mod, children}) => {
  const icon = React.cloneElement(children, {
    className: `${children.props.className} ${'absolute left-[20px] top-[50%] -translate-y-1/2'}`,
  })
  
  return (
    <button className={`box-border border w-[167px] py-[12px] pl-6 font-medium tracking-tightest rounded-md uppercase relative transition-all duration-300 xl:w-[207px] xl:pl-0 ${mod}`}>
      {icon}
      <span>{text}</span>
    </button>
  )
}

export default Button
