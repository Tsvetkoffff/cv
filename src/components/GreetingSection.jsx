import React from 'react'
import Photo from '../assets/photo.png'
import {ReactComponent as EnvelopIcon} from '../assets/icons/envelope.svg'
import {ReactComponent as ArrowDownIcon} from '../assets/icons/arrow-down.svg'
import {ReactComponent as TelegramIcon} from '../assets/icons/telegram.svg'
import {ReactComponent as LinkedinIcon} from '../assets/icons/linkedin.svg'
import {ReactComponent as GithubIcon} from '../assets/icons/github.svg'
import {ReactComponent as CodewarsIcon} from '../assets/icons/codewars.svg'

const GreetingSection = () => {
  const socials = [
    {
      name: 'Telegram',
      link: 'https://t.me/tsvetkoffff',
      icon: <TelegramIcon />,
    },
    {
      name: 'Linkedin',
      link: 'https://www.linkedin.com/in/slava-tsvetkof-769b96252/',
      icon: <LinkedinIcon />,
    },
    {
      name: 'Github',
      link: 'https://github.com/Tsvetkoffff',
      icon: <GithubIcon />,
    },
    {
      name: 'Codewars',
      link: 'https://www.codewars.com/users/rsschool_ced8d958720098e8',
      icon: <CodewarsIcon />,
    },
  ]

  return (
    <section className='relative bg-lightGray rounded-2xl p-3 pt-4 pb-14 flex flex-col items-center space-y-4 sm:flex-row sm:space-x-8 sm:space-y-0 md:pt-6 md:pb-16 lg:space-x-16 lg:pt-16 lg:pl-8 xl:pb-28 xl:pl-20 xl:pt-20 xl:space-x-28'>
      <img src={Photo} alt='This is my photo' className='w-28 h-28 self-start sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-60 lg:h-60' />
      <div className=''>
        <p className='pl-6 text-sm tracking-tightest text-grey relative before:absolute before:w-[12px] before:h-[12px] before:bg-primary before:rounded-full before:left-0 before:top-[5px] lg:text-base lg:before:top-[8px]'>
          ready to work
        </p>
        <h2 className='mt-4 font-medium text-dark tracking-tightest text-[1.4em] leading-[130%] lg:leading-[130%] lg:text-4xl xl:leading-[130%] xl:text-5xl'>
          {'<Hello!/>'}
          <br /> I am Slava
          <br /> Frontend developer
        </h2>
        <div className='flex flex-col items-start mt-6 space-y-4  lg:flex-row lg:space-y-0 lg:space-x-4'>
          <button className='box-border w-[167px] py-[12px] pl-6 bg-primary text-white font-medium tracking-tightest rounded-md uppercase relative hover:bg-primaryDark transition-all duration-300 xl:w-[207px] xl:pl-0'>
            <EnvelopIcon className='absolute left-[20px] top-[50%] -translate-y-1/2'/>
            <span>contact me</span>
          </button>
          <button className='box-border w-[167px] py-[12px] pl-7 bg-white border border-grey text-gray font-medium tracking-tightest rounded-md uppercase relative hover:border-primaryDark hover:text-primaryDark hover:fill-primaryDark transition-all duration-300 xl:w-[207px] xl:pl-0'>
            <ArrowDownIcon className='absolute left-[20px] top-[50%] -translate-y-1/2'/>
            <span>download cv</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default GreetingSection
