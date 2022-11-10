import React from 'react'
import Section from '/src/components/Section'
import SectionHeader from '/src/components/SectionHeader'
import EducationCard from '/src/components/EducationCard'

const MyEducation = () => {
  const courses = [
    {
      id: 1,
      period: 'Augest 2022',
      description: 'Rolling Scopes School - Stage 1',
    },
    {
      id: 2,
      period: 'Augest 2022',
      description: 'Rolling Scopes School - Stage 1',
    },
    {
      id: 3,
      period: 'Augest 2022',
      description: 'Rolling Scopes School - Stage 1',
    },
    {
      id: 4,
      period: 'Augest 2022',
      description: 'Rolling Scopes School - Stage 1',
    },
    {
      id: 5,
      period: 'Augest 2022',
      description: 'Rolling Scopes School - Stage 1',
    },
    {
      id: 6,
      period: 'Augest 2022',
      description: 'Rolling Scopes School - Stage 1',
    },
  ]
  return (
    <Section>
      <div className='w-full flex flex-col space-y-4'>
        <div>
          <SectionHeader text='My_Education' dot={true} />
        </div>
        <div className='flex flex-col flex-wrap gap-y-5 md:flex-row md:gap-x-9 xl:gap-y-12'>
          {courses.map(course => (
            <EducationCard
              key={course.id}
              period={course.period}
              description={course.description}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}

export default MyEducation
