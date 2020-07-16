import React from 'react'
import {
  ImageWrapper,
  SectionDesc,
  SectionLayout,
  SectionTitle
} from '../../../SectionsComponents'
/* IMAGES */
const Devices = '/images/Balkany/BalkanyDevices.png'
const AboutSiteImg = '/images/Balkany/AboutSiteImage.png'

export const AboutSite = () => {
  return (
    <SectionLayout id="balkany-about-site" Header={() => <ImageWrapper src={AboutSiteImg} className="main"/>}>
      <SectionTitle title="About site"/>
      <SectionDesc withDot/>
      <ImageWrapper src={Devices} className="devices"/>
    </SectionLayout>
  )
}
