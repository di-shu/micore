import React from 'react'
import { FontExample, ImageWrapper, SectionLayout, SectionTitle, SectionWrapper } from '../../../SectionsComponents'
/*IMAGES*/
const TriangleGrey = '/Assets/Images/Gastrobar/TriangleGray.svg'
const LetterExample = '/Assets/Images/Gastrobar/LetterExample.svg'
const TriangleBlack = '/Assets/Images/Gastrobar/TriangleBlack.svg'

const ColorsFooterContent = () => {
  return (
    <SectionWrapper className="fonts-wrapper">
      <FontExample fontNameFirst="Proxima Nova Extrabold" fontNameSecond="Gotham Pro Medium"/>
      <ImageWrapper src={LetterExample} className="letter-image"/>
    </SectionWrapper>
  )
}

export const Colors = () => {
  return (
    <SectionLayout id="gastrobar-colors" className="colors-wrapper" Footer={ColorsFooterContent}>
      <SectionTitle title="Colors"/>
      <div className="colors-all-wrap">
        <div className="colors-wrap black">
          <div className="triangle-wrap">
            <ImageWrapper src={TriangleBlack} className="triangle black"/>
            <div className="color-info">
              <span className="color-text name">dark graphite</span>
              <span className="color-text number">#232F20</span>
            </div>
          </div>
          <div className="info-wrap">
            <span className="info-text">CMYK: 72, 67, 59, 79%</span>
            <span className="info-text">PANTONE Neutral Black C</span>
          </div>
        </div>
        <div className="colors-wrap gray">
          <div className="info-wrap">
            <span className="info-text">CMYK: 60, 50, 47, 39%</span>
            <span className="info-text">PANTONE Cool Gray 11 C</span>
          </div>
          <div className="triangle-wrap">
            <ImageWrapper src={TriangleGrey} className="triangle gray"/>
            <div className="color-info">
              <span className="color-text name">gray</span>
              <span className="color-text number">#58595B</span>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}
