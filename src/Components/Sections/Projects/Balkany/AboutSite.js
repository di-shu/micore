import React from 'react'
import {
  ImageWrapper,
  SectionDesc,
  SectionLayout,
  SectionTitle
} from '../../../SectionsComponents'
/* IMAGES */
const Devices = '/Assets/Images/Balkany/BalkanyDevices.png'
const AboutSiteImg = '/Assets/Images/Balkany/AboutSiteImage.png'

export const AboutSite = () => {
  return (
    <SectionLayout id="balkany-about-site" Header={() => <ImageWrapper src={AboutSiteImg} className="main"/>}>
      <SectionTitle title="About site"/>
      <SectionDesc withDot/>
      <ImageWrapper src={Devices} className="devices"/>
    </SectionLayout>
  )
}
