import React from 'react'

const Section = ({id, children, className = ''}) => (
  <section className={`section ${className}`} id={id}>{children}</section>
)

export default Section
