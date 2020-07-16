import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'
/* IMAGES */
const Water = '/images/Marinist/Water.png'
const LogoMinimized = '/images/Marinist/LogoMinimized.svg'

export const Philosophy = () => {
  return (
    <SectionLayout id="marinist-philosophy">
      <Row>
        <Col xs={12} lg={8} className="philosophy-info-wrap">
          <SectionTitle title="Philosophy" />
          <SectionDesc />
        </Col>
        <Col xs={12} lg={4} className="philosophy-logo-wrap">
          <ImageWrapper src={Water} className="water-image" />
          <ImageWrapper src={LogoMinimized} className="logo-image" />
          <SectionTitle title="Adaptation" />
          <SectionDesc />
        </Col>
      </Row>
    </SectionLayout>
  )
}
