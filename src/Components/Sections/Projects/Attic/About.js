import React from 'react'
import { ProjectAboutSection } from '../../../SectionsComponents'
import { AtticAboutInfo } from './Config'

export const About = () => {
  return (
    <ProjectAboutSection
      name="Attic Stroy"
      year="june, 2018"
      link="attic-stroy.com"
      additionalInfo={AtticAboutInfo}
    />
  )
}

