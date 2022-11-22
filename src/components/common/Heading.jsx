import React, {useState, useEffect} from 'react'

const Heading = ({Tag, dot, children, className}) => {
  const [size, setSize] = useState('')

  useEffect(() => {
    if (Tag === 'h1' || Tag === 'h2') {
      setSize('text-2xl md:text-3xl lg:text-4xl xl:text-5xl')
    } else if (Tag === 'h3') {
      setSize('text-xl md:text-2xl lg:text-3xl')
    }
  }, [])

  return (
    <Tag className={`relative font-medium ${className} ${size}`}>
      {children}
      {dot && <span className='text-primary'>.</span>}
    </Tag>
  )
}

export default Heading
