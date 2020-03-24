import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'
/*IMAGES*/
const PhilosophyImg = '/Assets/Images/VipYoga/Philosophy.png'

export const Philosophy = () => {
  return (
    <SectionLayout id="vip-yoga-philosophy">
      <Row className="philosophy-row">
        <Col xs={12} lg={5}>
          <SectionTitle title="Philosophy" />
          <SectionDesc />
        </Col>
        <Col xs={12} lg={7}>
          <ImageWrapper src={PhilosophyImg} className="philosophy-image" />
        </Col>
      </Row>
    </SectionLayout>
  )
}
