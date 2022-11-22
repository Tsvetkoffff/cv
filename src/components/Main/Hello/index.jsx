import React from 'react'

import Button from '/src/components/common/Button'
import Section from '/src/components/common/Section'
import Heading from '/src/components/common/Heading'

import Wrapper from '/src/components/Main/Hello/Wrapper'
import PhotoContainer from '/src/components/Main/Hello/PhotoContainer'
import Photo from '/src/components/Main/Hello/Photo'
import Status from '/src/components/Main/Hello/Status'
import ButtonsContainer from '/src/components/Main/Hello/ButtonsContainer'
import ContantContainer from '/src/components/Main/Hello/ContantContainer'

import {ReactComponent as ArrowDownIcon} from '/src/assets/icons/arrow-down.svg'
import {ReactComponent as EnvelopIcon} from '/src/assets/icons/envelope.svg'

const Hello = () => {
  return (
    <Section className='bg-lightGray'>
      <Wrapper>
        <PhotoContainer>
          <Photo />
        </PhotoContainer>
        <ContantContainer>
          <Status />
          <Heading Tag='h1' className='text-dark'>
            {'<Hello!/>'}
            <br /> I am Slava
            <br /> Frontend developer
          </Heading>
          <ButtonsContainer>
            <Button text={'contact me'} mod='button--primary'>
              <EnvelopIcon />
            </Button>
            <Button text={'download cv'} mod='button--white'>
              <ArrowDownIcon />
            </Button>
          </ButtonsContainer>
        </ContantContainer>
      </Wrapper>
    </Section>
  )
}

export default Hello
