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
      className="uniform-wrapper"
      // Footer={() => (
      //   <SectionSlider
      //     slidesToShow={1}
      //     slides={UniformSlides}
      //     className="uniform-slider"
      //   />
      // )}
    >
      <ImageWrapper isDot display={desktop}/>
      <SectionTitle title="Униформа"/>
      <SectionDesc>
        Для сотрудников мы подготовили дизайн удобной и фирменной рабочей униформы, как элемент корпоративной культуры.
      </SectionDesc>
    </SectionLayout>
  )
}
