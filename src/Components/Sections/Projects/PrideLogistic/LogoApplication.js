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
const ApplicationBackground = '/images/PrideLogistic/LogoApplicationBackground.png'

export const LogoApplication = () => {
  return (
    <SectionLayout
      id="pride-logo-application"
      Header={() =>  <ImageWrapper src={ApplicationBackground} className="section-background-wrap"/>}
      Footer={() => <SectionSlider slidesToShow={1} slides={ApplicationSlides}/>}
    >
      <SectionTitle title="About branding: Pride"/>
      <SectionDesc/>
    </SectionLayout>
  )
}
