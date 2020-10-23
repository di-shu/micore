import React from 'react'
import { FontExample, ImageWrapper, SectionLayout, SectionTitle } from '../../../SectionsComponents'
import { Col, Row } from 'react-bootstrap'
/*IMAGES*/
const FontExample1 = '/images/Gastrobar/gastrobar_font_1.svg'
const FontExample2 = '/images/Gastrobar/gastrobar_font_2.svg'
const TriangleGrey = '/images/Gastrobar/TriangleGray.svg'
const TriangleBlack = '/images/Gastrobar/TriangleBlack.svg'

export const Colors = () => {
  return (
    <SectionLayout id="gastrobar-colors" className="colors-wrapper">
      <SectionTitle title="Цвета и шрифты"/>
      <Row>
        <Col xs={12} lg={6}>
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
        </Col>
        <Col xs={12} lg={6}>
          <div className="font-example-all-wrap">
            <div className="font-example-wrap">
              <p className="font-example-name">Proxima Nova Extrabold</p>
              <div className="font-example-image">
                <img src={FontExample1} alt="Proxima Nova Extrabold example"/>
              </div>
            </div>
            <div className="font-example-wrap">
              <p className="font-example-name">Gotham Pro Medium</p>
              <div className="font-example-image">
                <img src={FontExample2} alt="Gotham Pro Medium example"/>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </SectionLayout>
  )
}
