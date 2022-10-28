import React from 'react'
import {ReactComponent as TelegramIcon} from '/src/assets/icons/telegram.svg'
import {ReactComponent as LinkedinIcon} from '/src/assets/icons/linkedin.svg'
import {ReactComponent as GithubIcon} from '/src/assets/icons/github.svg'
import {ReactComponent as CodewarsIcon} from '/src/assets/icons/codewars.svg'

const SocialBar = () => {
  const socials = [
    {
      name: 'Telegram',
      link: 'https://t.me/tsvetkoffff',
      icon: <TelegramIcon className='w-16' />,
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
    <div className='hidden absolute md:flex md:flex-col md:top-4 md:right-8 lg:right-14 xl:top-20 xl:right-24'>
      {socials.map(item => (
        <a href={item.link} key={item.name}>
          {item.icon}
        </a>
      ))}
    </div>
  )
}

export default SocialBar
