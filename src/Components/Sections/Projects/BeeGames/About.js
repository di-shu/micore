import React from 'react'
import { ProjectAboutSection } from '../../../SectionsComponents/Projects'
import { BeeGamesAboutInfo } from './Config'

export const About = () => {
  return (
    <ProjectAboutSection
      isOverflow
      year="2019"
      name="Bee game"
      additionalInfo={BeeGamesAboutInfo}
    />
  )
}
