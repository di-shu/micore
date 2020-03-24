import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle } from '../../SectionsComponents'

const TargetImg = '/Assets/Images/services/LandingPage/Target.png'

export const ServiceTarget = ({ title = "Какая цель?", desc, img = TargetImg }) => {
  return (
    <SectionLayout id="service-target-section">
      <Row>
        <Col xs={12} lg={6}>
          <ImageWrapper src={img} className="target-image" />
        </Col>
        <Col xs={12} lg={6}>
          <SectionTitle title={title} />
          <SectionDesc children={desc} />
        </Col>
      </Row>
    </SectionLayout>
  )
}
