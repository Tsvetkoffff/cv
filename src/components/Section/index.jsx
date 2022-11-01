import React from 'react'

const Section = ({children, className}) => (
  <section className={`section ${className}`}>{children}</section>
)

export default Section
