import React from 'react'
import { PrideAboutInfo } from './Config'
import { ProjectAboutSection } from '../../../SectionsComponents'

export const About = () => {
  return (
    <ProjectAboutSection
      isLine
      isOverflow
      year="2019"
      name="Pride"
      link="pride-logistika.com"
      additionalInfo={PrideAboutInfo}
    />
  )
}
