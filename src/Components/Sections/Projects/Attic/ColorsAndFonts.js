import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontExample, ImageWrapper, ProjectColor, SectionLayout, SectionTitle } from '../../../SectionsComponents'
import { AtticColors } from './Config'
/* IMAGES */
const LogoGoldLine = '/Assets/Images/Attic/LogoGoldLine.png'
const LogoGoldFill = '/Assets/Images/Attic/LogoGoldFill.png'

export const ColorsAndFonts = () => {
  return (
    <SectionLayout id="attic-colors-and-fonts">
      <Row>
        <Col xs={12} lg={6}>
          <SectionTitle title="Colors" />
          <ProjectColor colors={AtticColors} />
        </Col>
        <Col xs={12} lg={6}>
          <FontExample fontNameFirst="Andis Regular" fontNameSecond="Gill Sans Regular" />
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <ImageWrapper src={LogoGoldLine} className="logo-demo" />
        </Col>
        <Col xs={6}>
          <ImageWrapper src={LogoGoldFill} className="logo-demo" />
        </Col>
      </Row>
    </SectionLayout>
  )
}
