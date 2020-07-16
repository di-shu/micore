import React from 'react'
import {
  BottomNavigation,
  ImageWrapper,
  SectionDesc,
  SectionLayout,
  SectionTitle,
  SectionWrapper
} from '../../../SectionsComponents'
import { useDeviceDetect } from '../../../../Helpers'
/* IMAGES */
const ServicesImg = '/images/PrideLogistic/Services.png'
const AllDevices = '/images/PrideLogistic/AllDevices.png'
const MacOnDesktop = '/images/PrideLogistic/MacOnDesktop.png'
const MobileVersion = '/images/PrideLogistic/MobileVersion.png'

const ServicesHeaderContent = () => {
  const { minWidthLaptop } = useDeviceDetect()
  
  return (
    <>
      <SectionWrapper className="first-services">
        <div className="inner-wrap">
          <SectionTitle title="services"/>
          <SectionDesc/>
        </div>
      </SectionWrapper>
      <div className="services-image-wrap">
        <ImageWrapper isDot display={minWidthLaptop}/>
        <img src={ServicesImg} alt="Services" className="services-image"/>
      </div>
      <div className="devices-image-wrap">
        <img src={MacOnDesktop} alt="Mac on desktop"/>
      </div>
    </>
  )
}

const ServicesFooterContent = () => {
  return (
    <>
      <div className="mobile-image-wrap">
        <img src={MobileVersion} alt="Mobile version"/>
      </div>
      <div className="all-devices-image-wrap">
        <img src={AllDevices} alt="All devices"/>
      </div>
      <BottomNavigation/>
    </>
  )
}

export const Services = () => {
  const { minWidthLaptop } = useDeviceDetect()
  
  return (
    <SectionLayout id="pride-services" Header={ServicesHeaderContent} Footer={ServicesFooterContent}>
      <SectionTitle title="services"/>
      <SectionDesc/>
      <ImageWrapper isDot display={minWidthLaptop} className="right"/>
    </SectionLayout>
  )
}
