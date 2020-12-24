import React from 'react'
import { ImageWrapper, SectionDesc, SectionLayout, SectionSlider, SectionTitle } from '../../../SectionsComponents'
import { SimplySlides } from './Config'

const SlideTemplate = ({ slide }) => {
  return (
    <div className="slide-img-container">
      <div className="img-container top-img">
        <ImageWrapper src={slide.imgHard} className="slide-img"/>
        <p className="slide-desc">{slide.descHard}</p>
      </div>
      <div className="img-container bottom-img">
        <ImageWrapper src={slide.imgEasy} className="slide-img"/>
        <p className="slide-desc">{slide.descEasy}</p>
      </div>
    </div>
  )
}

export const SimplyWords = () => {
  return (
    <SectionLayout
      id="manticore-simply-word"
      // Footer={() => <SectionSlider slides={SimplySlides} customSlide SlideComponent={SlideTemplate}/>}
    >
      <SectionDesc className="sub-title" children="Сложные вещи"/>
      <SectionTitle isContentWhite>простыми словами</SectionTitle>
    </SectionLayout>
  )
}
