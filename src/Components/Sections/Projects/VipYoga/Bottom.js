import React from 'react'
import { BottomNavigation, ImageWrapper, SectionLayout, SectionSlider } from '../../../SectionsComponents'
import { VipYogaSlides } from './Config'
/*IMAGES*/
const FooterImg = '/Assets/Images/VipYoga/FooterPhoto.png'

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