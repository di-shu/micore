import React from 'react'
import {
  ImageWrapper,
  SectionDesc,
  SectionLayout,
  SectionSlider,
  SectionTitle
} from '../../../SectionsComponents'
import { useDeviceDetect } from '../../../../Helpers'
import { UniformSlides, BrandingSlides } from './Config'

export const Branding = ({ isSecond }) => {
  const { laptop, desktop } = useDeviceDetect()
  
  return (
    <SectionLayout
      id="balkany-branding"
      Footer={() =>
        isSecond ?
          <SectionSlider slidesToShow={1} slides={UniformSlides}/> :
          <SectionSlider slidesToShow={1} slides={BrandingSlides}/>
      }
    >
      <ImageWrapper isDot display={laptop || desktop}/>
      <SectionTitle title="About branding: Balkany"/>
      <SectionDesc/>
    </SectionLayout>
  )
}
