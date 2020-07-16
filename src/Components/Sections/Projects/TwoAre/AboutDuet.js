import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'
/*IMAGES*/
const DuetImg = '/images/TwoAre/DJDuet.png'

export const AboutDuet = () => {
  return (
    <SectionLayout id="two-are-about-duet">
      <Row className="row-about-duet">
        <Col xs={12} lg={6} className="col-duet-info">
          <SectionTitle title="About DJ duet" />
          <SectionDesc />
        </Col>
        <Col xs={12} lg={6}>
          <ImageWrapper src={DuetImg} className="about-duet-image" />
        </Col>
      </Row>
    </SectionLayout>
  )
}
