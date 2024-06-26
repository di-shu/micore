import React from 'react'
import { useDeviceDetect } from '../../../../../Helpers'
import { ImageWrapper, SectionDesc, SectionSlider, SectionTitle, SectionWrapper } from '../../../../SectionsComponents'
import { BrandingSlides } from '.'

const Billboard = '/images/ZlataProject/Billboard.jpg'

export const BrandingHeader = () => {
  const { desktop } = useDeviceDetect()
  
  return (
    <>
      <SectionWrapper>
        <ImageWrapper isDot display={desktop}/>
        <SectionTitle title="Брендирование"/>
        <SectionDesc>
          Задействовав различные элементы, а также объекты фирменного стиля мы разработали дизайн полиграфической и
          рекламной продукции.
        </SectionDesc>
      </SectionWrapper>
      <SectionSlider
        slidesToShow={2}
        slides={BrandingSlides}
      />
      <ImageWrapper src={Billboard} className="billboard-image"/>
    </>
  )
}
