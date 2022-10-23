import React from 'react'
import Photo from '../assets/photo.png'

const GreetingSection = () => {
  const socials = [
    {name: 'telegram', link: 'https://t.me/tsvetkoffff', icon: 'telegramIcon'},
    {
      name: 'linkedin',
      link: 'https://www.linkedin.com/in/slava-tsvetkof-769b96252/',
      icon: 'linkedinIcon',
    },
    {
      name: 'github',
      link: 'https://github.com/Tsvetkoffff',
      icon: 'githubIcon',
    },
    {
      name: 'codewars',
      link: 'https://www.codewars.com/users/rsschool_ced8d958720098e8',
      icon: 'codewarsIcon',
    },
  ]

  return (
    <section className='container flex bg-grey rounded-[40px]'>
      <img src={Photo} alt='It`s my photo' className='pt-24 pb-48' />
      <div>
        <div className='p-28'>
          <p className='mb-7 pl-5 relative before:content-[""] before:block before:absolute before:top-[8px] before:left-0 before:w-2 before:h-2 before:rounded-full before:bg-primary'>
            ready to work
          </p>
          <h1 className='text-4xl mb-10'>
            {`<Hello!/>`}
            <br /> I am Vyacheslav,
            <br /> Frontend developer
          </h1>
          <div className='flex justify-between'>
            <button className='bg-primary hover:bg-primaryDark text-white py-[16px] pl-[72px] pr-[40px] rounded-md relative before:content-envelopIcon before:absolute before:left-10 before:top-[17px] transition-all'>
              contact me
            </button>
            <button className='bg-white hover:border-primaryDark hover:text-primaryDark py-[16px] pl-[69px] pr-[40px] ml-7 border rounded-md border-black relative before:content-arrowDownIcon before:absolute before:left-10 before:top-[17px] transition-all'>
              download cv
            </button>
          </div>
        </div>
        {/* <ul className='fixed right-[13%] top-[200px]'>
          {socials.map(social => (
            <li>
              <a
                href={social.link}
                className={`before:content-${social.icon} before:rounded-full`}
              >
                <span>{social.name}</span>
              </a>
            </li>
          ))}
        </ul> */}
      </div>
    </section>
  )
}

export default GreetingSection
