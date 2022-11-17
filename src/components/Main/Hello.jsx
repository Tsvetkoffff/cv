import React from 'react'
import Photo from '/src/assets/photo.png'
import Button from '/src/components/common/Button'
import {ReactComponent as EnvelopIcon} from '/src/assets/icons/envelope.svg'
import {ReactComponent as ArrowDownIcon} from '/src/assets/icons/arrow-down.svg'
import Section from '/src/components/common/Section'

const Hello = () => {
  return (
    <Section className='bg-lightGray flex justify-center sm:justify-start'>
      <div className='flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:w-full'>
        <div className='sm:w-2/5'>
          <img
            src={Photo}
            alt='This is my photo'
            className='w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-60 lg:h-60'
          />
        </div>
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
            <Button text={'contact me'} mod='button--primary'>
              <EnvelopIcon />
            </Button>
            <Button text={'download cv'} mod='button--white'>
              <ArrowDownIcon />
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Hello
