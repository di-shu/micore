import React from 'react'
import { PrideGroupSlides } from './Config'
import { ImageWrapper, SectionDesc, SectionLayout, SectionSlider, SectionTitle, SectionWrapper } from '../../../SectionsComponents'
/*IMAGES*/
const BrandingBG = '/Assets/Images/PrideGroup/BrandingBG.png'

export const Branding = () => {
  return (
    <SectionLayout id="pride-group-branding" customWrap Footer={() => <SectionSlider slides={PrideGroupSlides}/>}>
      <div className="branding-wrap">
        <ImageWrapper src={BrandingBG}/>
        <SectionWrapper>
          <SectionTitle title="Branding"/>
          <SectionDesc withDot/>
        </SectionWrapper>
      </div>
    </SectionLayout>
  )
}
