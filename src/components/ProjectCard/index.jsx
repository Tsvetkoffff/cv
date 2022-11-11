import React from 'react'

const ProjectCard = ({project}) => {
  console.log(project.bgColor);
  return (
    <div
      className={`w-[273px] h-[288px] rounded-[12px] ${project.bgColor} ${project.bgImage} bg-right-bottom bg-no-repeat flex flex-col justify-between px-7 py-5`}
    >
      <div>
        <span className='text-xs text-grey'>{project.year}</span>
        <h3 className='font-medium text-base'>{project.name}</h3>
      </div>
      <div>{project.usedSkills}</div>
    </div>
  )
}

export default ProjectCard
