import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ImageWrapper, MyScrollAnimation, SectionDesc, SectionLayout, SectionTitle } from '../../SectionsComponents'

const TargetImg = '/images/Services/LandingPage/Target.png'

export const ServiceTarget = ({ title = "Какая цель?", desc, img = TargetImg }) => {
  return (
    <SectionLayout id="service-target-section">
      <Row>
        <Col xs={12} lg={6}>
          <MyScrollAnimation delay={[400]}>
            <ImageWrapper src={img} className="target-image" animate />
          </MyScrollAnimation>
        </Col>
        <Col xs={12} lg={6}>
          <MyScrollAnimation delay={[0, 200]}>
            <SectionTitle title={title}/>
            <SectionDesc children={desc}/>
          </MyScrollAnimation>
        </Col>
      </Row>
    </SectionLayout>
  )
}
