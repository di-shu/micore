import React from 'react'
import { ProjectAboutSection, ImageWrapper } from '../../../SectionsComponents'
import { useDeviceDetect } from '../../../../Helpers'
import { AboutInfo } from './Config'
/* IMAGES */
const BlurBall = '/images/Balkany/BlurBall.png'

export const About = () => {
  const { desktop } = useDeviceDetect()
  
  return (
    <ProjectAboutSection
      isLine
      isOverflow
      year="2018"
      name="Balkany"
      link="fcbalkans.com.ua"
      additionalInfo={AboutInfo}
      Content={<ImageWrapper src={BlurBall} className="blur-ball" display={desktop} />}
    />
  )
}
