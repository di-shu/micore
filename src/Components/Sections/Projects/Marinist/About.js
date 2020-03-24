import React from 'react'
import { ProjectAboutSection } from '../../../SectionsComponents'
import { MarinistAboutInfo } from './Config'

export const About = () => {
  return (
    <ProjectAboutSection
      year="june, 2018"
      link="marinist.com.ua"
      name="Marinist Residence"
      additionalInfo={MarinistAboutInfo}
    />
  )
}
