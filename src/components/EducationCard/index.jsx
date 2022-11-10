import React from 'react'
import Text from '/src/components/Text'

const EducationCard = ({period, description}) => {
  return (
    <div className='space-y-2 w-full md:w-2/5 xl:w-[341px]'>
      <h3 className='text-center font-medium bg-primaryLigth border-b-[4px] border-primary box-border p-1'>{period}</h3>
      <Text className=''>{description}</Text>
    </div>
  )
}

export default EducationCard