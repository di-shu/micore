import React from 'react'
import { BottomNavigation, ImageWrapper, SectionLayout, SectionSlider } from '../../../SectionsComponents'
import { VipYogaSlides } from './Config'
/*IMAGES*/
const FooterImg = '/images/VipYoga/yoga_down.jpg'

export const Bottom = () => {
  return (
    <SectionLayout
      id="vip-yoga-bottom"
      Header={() => <SectionSlider slides={VipYogaSlides} />}
      Footer={() => (
        <>
          <ImageWrapper src={FooterImg} className="footer-image" />
          <BottomNavigation isBlack />
        </>
      )}
    />
  )
}
