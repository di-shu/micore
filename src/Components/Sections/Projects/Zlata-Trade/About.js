import React from 'react'
import { ProjectAboutSection } from '../../../SectionsComponents'
import { AboutInfo } from './Config'

export const About = () => {
  return (
    <ProjectAboutSection
      isOverflow
      year="2019"
      name="Zlata-Trade"
      link="zlata-trade.com"
      additionalInfo={AboutInfo}
    />
  )
}
