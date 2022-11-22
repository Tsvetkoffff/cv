import React from 'react'
import Text from '/src/components/common/Text'
import Heading from '/src/components/common/Heading'

const EducationCard = ({period, description}) => {
  return (
    <div className='space-y-4'>
      <Heading
        Tag='h3'
        className='text-center text-dark font-medium bg-primaryLigth border-b-[4px] border-primary box-border p-1'
      >
        {period}
      </Heading>
      <Text className='text-base'>{description}</Text>
    </div>
  )
}

export default EducationCard
