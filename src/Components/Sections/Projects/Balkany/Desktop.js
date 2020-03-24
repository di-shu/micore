import React from 'react'
import {
  ImageWrapper,
  SectionDesc,
  SectionLayout,
  SectionTitle
} from '../../../SectionsComponents'
/* IMAGES */
const DesktopMac = '/Assets/Images/Balkany/AboutDesktopMac.png'
const DesktopMacFull = '/Assets/Images/Balkany/AboutDesktopFullSite.png'

export const Desktop = () => {
  return (
    <SectionLayout id="balkany-about-desktop" Footer={() => <ImageWrapper src={DesktopMacFull} className="full-mac"/>}>
      <SectionTitle title="About desktop"/>
      <SectionDesc withDot/>
      <ImageWrapper src={DesktopMac} className="desktop-mac"/>
    </SectionLayout>
  )
}
