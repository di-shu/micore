import React from 'react'
import {
  ImageWrapper,
  SectionDesc,
  SectionLayout,
  SectionTitle
} from '../../../SectionsComponents'
/* IMAGES */
const Devices = '/images/Balkany/balkany_mockup6.png'
const AboutSiteImg = '/images/Balkany/AboutSiteImage.png'

export const AboutSite = () => {
  return (
    <SectionLayout id="balkany-about-site" Header={() => <ImageWrapper src={AboutSiteImg} className="main"/>}>
      <SectionTitle title="Сайт"/>
      <SectionDesc withDot/>
      <ImageWrapper src={Devices} className="devices"/>
    </SectionLayout>
  )
}
