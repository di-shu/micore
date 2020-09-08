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
const ServicesImg = '/images/PrideLogistic/pridelog_mockup3.jpg'
const Device2 = '/images/PrideLogistic/pridelog_mockup4.jpg'
const AllDevices = '/images/PrideLogistic/AllDevices.png'
const MacOnDesktop = '/images/PrideLogistic/MacOnDesktop.png'
const MobileVersion = '/images/PrideLogistic/MobileVersion.png'

const ServicesHeaderContent = () => {
  const { minWidthLaptop } = useDeviceDetect()
  
  return (
    <>
      <SectionWrapper className="first-services">
        <div className="inner-wrap">
          <ImageWrapper isDot display={minWidthLaptop}/>
          <SectionTitle title="Сайт"/>
          <SectionDesc>
            Следующим этапом проекта стала разработка корпоративного сайта. Ресурс обладает функциональностью, удобной и
            понятной навигацией, качественно презентует услуги компании.
          </SectionDesc>
        </div>
      </SectionWrapper>
      <ImageWrapper src={ServicesImg} className="services-image-wrap"/>
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
      <ImageWrapper src={Device2} className="second-device"/>
      <ImageWrapper isDot display={minWidthLaptop} className="right"/>
      <ImageWrapper isDot display={minWidthLaptop} className="left"/>
    </SectionLayout>
  )
}
