import React from 'react'
import { SectionLayout, SectionSlider } from '../../../../Components'
import { BrandingSlides } from './Config'

export const Slider = () => (
  <SectionLayout id="attic-slider" Header={() => <SectionSlider slides={BrandingSlides} />} />
)
