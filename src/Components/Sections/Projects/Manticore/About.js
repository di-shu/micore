import React from 'react'
import { ProjectAboutSection } from '../../../SectionsComponents/Projects'
import { ManticoreAboutInfo } from './Config'

export const About = () => {
  return (
    <ProjectAboutSection
      link="micorestudio.com"
      year="april, 2017"
      name="Manticore"
      additionalInfo={ManticoreAboutInfo}
    />
  )
}
