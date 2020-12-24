import React from 'react'
import { PrideGroupSlides } from './Config'
import { ImageWrapper, SectionDesc, SectionLayout, SectionSlider, SectionTitle, SectionWrapper } from '../../../SectionsComponents'
/*IMAGES*/
const BrandingBG = '/images/PrideGroup/BrandingBG.jpg'

export const Branding = () => {
  return (
    <SectionLayout
      customWrap
      id="pride-group-branding"
      // Footer={() => <SectionSlider slides={PrideGroupSlides}/>}
    >
      <div className="branding-wrap">
        <ImageWrapper src={BrandingBG}/>
        <SectionWrapper>
          <SectionTitle title="Брендинг"/>
          <SectionDesc>
            Дизайн фирменной продукции соответствует единой визуальной концепции минимализма и продолжает идею тонких линий.
          </SectionDesc>
        </SectionWrapper>
      </div>
    </SectionLayout>
  )
}
