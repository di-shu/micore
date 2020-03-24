import React from 'react'
import { ProjectAboutSection } from '../../../SectionsComponents'
import { PrideGroupAboutInfo } from './Config'

export const About = () => {
  return (
    <ProjectAboutSection
      year="june, 2019"
      name="Pride group"
      link="pridegroup.com.ua"
      additionalInfo={PrideGroupAboutInfo}
    />
  )
}
