import React from 'react'
import {
  ImageWrapper,
  SectionDesc,
  SectionLayout,
  SectionSlider,
  SectionTitle
} from '../../../SectionsComponents'
import { useDeviceDetect } from '../../../../Helpers'
import { UniformSlides, BrandingHeader } from './Config'

export const Branding = () => {
  const { desktop } = useDeviceDetect()
  
  return (
    <SectionLayout
      id="zlata-branding"
      Header={BrandingHeader}
      Footer={() => (
        <SectionSlider
          slidesToShow={1}
          slides={UniformSlides}
          className="uniform-slider"
        />
      )}
      className="uniform-wrapper"
    >
      <ImageWrapper isDot display={desktop} />
      <SectionTitle title="About branding: ZLATA - TRADE"/>
      <SectionDesc/>
    </SectionLayout>
  )
}
