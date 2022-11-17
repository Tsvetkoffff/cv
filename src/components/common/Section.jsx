import React from 'react'

const Section = ({id, children, className}) => (
  <section
    className={`relative rounded-2xl flex p-3 pt-9 pb-14 md:pt-10 md:pb-16 lg:pt-16 lg:pl-8 xl:pt-20 xl:pb-24 xl:pl-20 
      ${className}`}
    id={id}
  >
    {children}
  </section>
)

export default Section
