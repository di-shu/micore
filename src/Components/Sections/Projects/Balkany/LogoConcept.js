import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
  ImageWrapper,
  SectionDesc,
  SectionLayout,
  SectionLine,
  SectionTitle
} from '../../../SectionsComponents'

const LogoStory = '/images/Balkany/LogoStory.png'

export const LogoConcept = () => {
  return (
    <SectionLayout id="balkany-logo-concepts" Footer={() => <SectionLine direction="bottom"/>}>
      <Row className="concept-grid-container">
        <Col xs={12} md={6} className="concept-grid-item">
          <SectionTitle title="Logo concepts"/>
          <SectionDesc/>
        </Col>
        <Col xs={12} md={6} className="concept-grid-item">
          <ImageWrapper src="#"/>
        </Col>
      </Row>
      <Row className="concepts-wrap image-grid-container">
        <Col xs={12} md={6} lg={4} className="image-wrap image-grid-item">
          <img src={LogoStory} alt="Concept"/>
        </Col>
        <Col xs={12} md={6} lg={4} className="image-wrap image-grid-item">
          <img src={LogoStory} alt="Concept"/>
        </Col>
        <Col xs={12} md={6} lg={4} className="image-wrap image-grid-item">
          <img src={LogoStory} alt="Concept"/>
        </Col>
        <Col xs={12} md={6} lg={4} className="image-wrap image-grid-item">
          <img src={LogoStory} alt="Concept"/>
        </Col>
      </Row>
    </SectionLayout>
  )
}
