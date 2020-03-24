import React from 'react'
import { ProjectAboutSection } from '../../../SectionsComponents/Projects'
import { BessarabskiyAboutInfo } from './Config'

export const About = () => {
  return (
    <ProjectAboutSection
      year="june, 2018"
      name="Бессарабский Дворик"
      link="bessarabskiy-dvorik.com"
      additionalInfo={BessarabskiyAboutInfo}
    />
  )
}
