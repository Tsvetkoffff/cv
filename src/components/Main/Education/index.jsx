import React from 'react'

import Heading from '/src/components/common/Heading'

import EducationCard from '/src/components/Main/Education/EducationCard'
import Wrapper from '/src/components/Main/Education/Wrapper'
import EducationCardsWrapper from '/src/components/Main/Education/EducationCardsWrapper'

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
    <Wrapper>
      <Heading Tag='h2' className='text-dark' dot>
        My_Education
      </Heading>
      <EducationCardsWrapper>
        {courses.map(course => (
          <EducationCard
            key={course.id}
            period={course.period}
            description={course.description}
          />
        ))}
      </EducationCardsWrapper>
    </Wrapper>
  )
}

export default MyEducation
