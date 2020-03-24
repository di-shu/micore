import React from 'react'
import { ProjectAboutSection } from '../../../SectionsComponents'
import { AdditionalInfo } from './Config'

export const AboutSection = () => {
  return (
    <ProjectAboutSection
      name="ViP Yoga"
      year="june, 2019"
      link="instagram.com/poltavets_vip_yoga"
      additionalInfo={AdditionalInfo}
    />
  )
}
