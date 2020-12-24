import React from 'react'
import {
  ImageWrapper,
  SectionDesc,
  SectionLayout,
  SectionSlider,
  SectionTitle
} from '../../../SectionsComponents'
import { ApplicationSlides } from './Config'
/* IMAGES */
const ApplicationBackground = '/images/PrideLogistic/pridelog_mockup1.jpg'

export const LogoApplication = () => {
  return (
    <SectionLayout
      id="pride-logo-application"
      Header={() =>  <ImageWrapper src={ApplicationBackground} className="section-background-wrap"/>}
      // Footer={() => <SectionSlider slidesToShow={1} slides={ApplicationSlides}/>}
    >
      <SectionTitle title="Брендирование"/>
      <SectionDesc>
        У компании есть своя широкая система визуальных носителей. Правила использования логотипа и фирменного стиля
        содержатся в брендбуке, разработанном в нашей студии.
      </SectionDesc>
    </SectionLayout>
  )
}
