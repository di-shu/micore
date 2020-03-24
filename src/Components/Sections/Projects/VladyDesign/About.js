import React from 'react'
import { ProjectAboutSection } from '../../../SectionsComponents'
import { VladyAboutInfo } from './Config'

export const About = () => {
  return (
    <ProjectAboutSection
      isOverflow
      year="2019"
      name="Vlady Design"
      link="vladydesign.com"
      additionalInfo={VladyAboutInfo}
    />
  )
}
