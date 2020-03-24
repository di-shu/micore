import React from 'react'
import { ProjectAboutSection } from '../../../SectionsComponents'
import { TwoAreAboutInfo } from './Config'

export const About = () => {
  return (
    <ProjectAboutSection
      link="?"
      name="Two are"
      year="june, 2019"
      additionalInfo={TwoAreAboutInfo}
    />
  )
}
