import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontExample, SectionLayout, SectionTitle } from '../../../SectionsComponents'

const FontLight = '/images/PrideGroup/Font_Light.svg'
const FontRegular = '/images/PrideGroup/Font_Regular.svg'

export const Colors = () => {
  return (
    <SectionLayout id="pride-group-colors">
      <SectionTitle title="Colors"/>
      <Row className="color-grid-container">
        <Col xs={12} lg={4} className="color-grid-item">
          <div className="colors-wrap">
            <div className="triangle-top graphite"/>
            <div className="triangle-bottom"/>
          </div>
          <div className="colors-info-wrap">
            <span className="color-text color-name">dark graphite</span>
            <span className="color-text color-number">#333333</span>
            <span className="color-text">CMYK: 72, 67, 59, 79%</span>
            <span className="color-text">PANTONE Neutral Black C</span>
          </div>
        </Col>
        <Col xs={12} lg={4} className="color-grid-item">
          <div className="colors-wrap">
            <div className="triangle-top darkgray"/>
            <div className="triangle-bottom"/>
          </div>
          <div className="colors-info-wrap">
            <span className="color-text color-name">dark gray</span>
            <span className="color-text color-number">#585857</span>
            <span className="color-text">CMYK: 72, 67, 59, 79%</span>
            <span className="color-text">PANTONE Neutral Black C</span>
          </div>
        </Col>
        <Col xs={12} lg={4} className="color-grid-item">
          <div className="colors-wrap">
            <div className="triangle-top lightgray"/>
            <div className="triangle-bottom"/>
          </div>
          <div className="colors-info-wrap">
            <span className="color-text color-name">light gray</span>
            <span className="color-text color-number">#C4C4C4</span>
            <span className="color-text">CMYK: 72, 67, 59, 79%</span>
            <span className="color-text">PANTONE Neutral Black C</span>
          </div>
        </Col>
      </Row>
      <FontExample
        fontExampleFirst={FontLight}
        fontExampleSecond={FontRegular}
        fontNameFirst="Proxima Nova Light"
        fontNameSecond="Proxima Nova Regular"
      />
    </SectionLayout>
  )
}
