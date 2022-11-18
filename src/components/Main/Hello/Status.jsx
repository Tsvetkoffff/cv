import React from 'react'
import Text from '/src/components/common/Text';

const Status = () => {
  return (
    <Text className='pl-6 text-sm relative before:absolute before:w-[12px] before:h-[12px] before:bg-primary before:rounded-full before:left-0 before:top-[5px] lg:text-base lg:before:top-[8px]'>
      ready to work
    </Text>
  )
}

export default Status
