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
      <SectionTitle title={isSecond ? 'Форма' : 'Брендинг'}/>
      <SectionDesc>
        {isSecond ?
          'Белый - еще один цвет футбольного клуба. Цвет истины, чистоты и победы. ' +
          'В белой форме футболисты «Балкан» традиционно выступают на домашнем стадионе. ' :
          'Новый стиль активно используется в сувенирной брендовой продукции клуба.'}
      </SectionDesc>
    </SectionLayout>
  )
}
