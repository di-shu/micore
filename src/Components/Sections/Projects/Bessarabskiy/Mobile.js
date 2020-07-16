import React from 'react'
import {
  SectionDesc,
  SectionTitle,
  ImageWrapper,
  SectionLayout,
  BottomNavigation
} from '../../../SectionsComponents'
import { useDeviceDetect } from '../../../../Helpers'
/* IMAGES */
const iPhone = '/images/Bessarabkiy/iPhone.png'
const FooterShape = '/images/Bessarabkiy/FooterShape.svg'
const MobilePages = '/images/Bessarabkiy/MobilePages.png'
const DesktopPages = '/images/Bessarabkiy/DesktopPages.png'

const SectionFooter = () => (
  <div className="bottom-wrapper">
    <ImageWrapper src={iPhone} className="iphone-image"/>
    <ImageWrapper src={FooterShape} className="shape-image"/>
    <BottomNavigation />
  </div>
)

export const Mobile = () => {
  const { minWidthLaptop } = useDeviceDetect()
  
  return (
    <SectionLayout id="bessarabskiy-mobile" Footer={SectionFooter}>
      <ImageWrapper isDot/>
      <SectionTitle title="Mobile adaptation"/>
      <SectionDesc/>
      <ImageWrapper src={DesktopPages} className="site-pages-image" display={minWidthLaptop}/>
      <ImageWrapper src={MobilePages} className="site-pages-image" display={!minWidthLaptop}/>
    </SectionLayout>
  )
}
