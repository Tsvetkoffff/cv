import React from 'react'

const Navigation = () => {
  const linksList = ['About me', 'Portfolio', 'Contacts']
  const langsList = ['en', 'ru']

  return (
    <nav className='flex justify-between py-6'>
      <ul className='flex w-[485px] justify-between'>
        {linksList.map(item => (
          <li key={item} className='nav-link'><a href="#">{`<${item}>`}</a></li>
        ))}
      </ul>

      <ul className='flex w-[63px] justify-between'>
        {langsList.map(lang => (
          <li key={lang} className='nav-link'>
            {lang.toUpperCase()}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
