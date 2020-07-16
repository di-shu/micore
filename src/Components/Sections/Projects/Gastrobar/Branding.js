import React from 'react'
import { ImageWrapper, SectionDesc, SectionLayout, SectionSlider, SectionTitle, SectionWrapper } from '../../../SectionsComponents'
import { GastrobarBrandingSlides } from './Config'
/*IMAGES*/
const Pattern = '/images/Gastrobar/PatternBG.png'
const BrandingBG = '/images/Gastrobar/BrandingBG.png'

export const Branding = () => {
  return (
    <SectionLayout id="gastrobar-branding" customWrap Footer={() => <SectionSlider slides={GastrobarBrandingSlides}/>}>
      <div className="branding-info-wrapper">
        <SectionWrapper>
          <SectionTitle title="Branding"/>
          <SectionDesc withDot/>
        </SectionWrapper>
        <ImageWrapper src={BrandingBG} className="section-bg"/>
        <ImageWrapper src={Pattern} className="section-pattern"/>
      </div>
    </SectionLayout>
  )
}
