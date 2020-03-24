import React from 'react'
import { ProjectAboutSection } from '../../../SectionsComponents/Projects'
import { GastroBarAboutInfo } from './Config'

export const About = () => {
  return (
    <ProjectAboutSection
      link="gastrobar.com.ua"
      year="june, 2019"
      name="GastroBar"
      additionalInfo={GastroBarAboutInfo}
    />
  )
}
