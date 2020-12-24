import React from 'react'
import {
  ImageWrapper,
  SectionDesc,
  SectionLayout,
  SectionSlider,
  SectionTitle,
  SectionWrapper
} from '../../../SectionsComponents'
import { GastrobarBrandingSlides } from './Config'
/*IMAGES*/
const Pattern = '/images/Gastrobar/PatternBG.png'
const BrandingBG = '/images/Gastrobar/BrandingBG.png'

export const Branding = () => {
  return (
    <SectionLayout
      customWrap
      id="gastrobar-branding"
      // Footer={() => <SectionSlider slides={GastrobarBrandingSlides}/>}
    >
      <div className="branding-info-wrapper">
        <SectionWrapper>
          <SectionTitle title="Брендинг"/>
          <SectionDesc>
            Собственный уникальный фирменный стиль гармонирует с общей концепцией заведения, помогает занять свою нишу и
            привлекает постоянных клиентов.
          </SectionDesc>
        </SectionWrapper>
        <ImageWrapper src={BrandingBG} className="section-bg"/>
        <ImageWrapper src={Pattern} className="section-pattern"/>
      </div>
    </SectionLayout>
  )
}
