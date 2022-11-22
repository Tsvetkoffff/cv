import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectCardsList = ({projects}) => {
  return (
    <div className='grid gap-4 md:grid-cols-2'>
      {projects.map(project => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  )
}

export default ProjectCardsList
