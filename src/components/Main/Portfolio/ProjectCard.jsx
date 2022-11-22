import React from 'react'
import Heading from '/src/components/common/Heading';

const ProjectCard = ({project}) => {
  return (
    <div
      className={`h-[288px] pt-[7%] pl-[15%] rounded-[12px] bg-right-bottom bg-no-repeat lg:h-[350px] xl:h-[570px] ${project.bgColor} ${project.mobileBg} ${project.desktopBg}`}
    >
      <div>
        <span className='text-xs text-grey md:text-sm lg:text-base'>{project.year}</span>
        <Heading Tag='h3' className='text-dark'>{project.name}</Heading>
      </div>
    </div>
  )
}

export default ProjectCard
