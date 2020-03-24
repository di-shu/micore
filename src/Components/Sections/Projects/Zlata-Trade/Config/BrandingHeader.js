import React from 'react'
import { useDeviceDetect } from '../../../../../Helpers'
import { ImageWrapper, SectionDesc, SectionSlider, SectionTitle, SectionWrapper } from '../../../../SectionsComponents'
import { BrandingSlides } from '.'
/* IMAGES */
const Billboard = '/Assets/Images/ZlataProject/Billboard.png'

export const BrandingHeader = () => {
  const { desktop } = useDeviceDetect()
  
  return (
    <>
      <SectionWrapper>
        <ImageWrapper isDot display={desktop} />
        <SectionTitle title="About branding: ZLATA - TRADE"/>
        <SectionDesc/>
      </SectionWrapper>
      <SectionSlider
        slidesToShow={2}
        slides={BrandingSlides}
      />
      <ImageWrapper src={Billboard} className="billboard-image" />
    </>
  )
}
