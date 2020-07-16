import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'
/*IMAGES*/
const Lion = '/images/PrideGroup/Lion.png'
const Landscape = '/images/PrideGroup/Landscape.png'

export const Philosophy = () => {
  return (
    <SectionLayout id="pride-group-philosophy" Footer={() => <ImageWrapper src={Landscape} className="landscape-image"/>}>
      <Row style={{ display: 'flex', alignItems: 'center' }}>
        <Col xs={12} lg={5}>
          <SectionTitle title="Philosophy"/>
          <SectionDesc/>
        </Col>
        <Col xs={12} lg={7}>
          <ImageWrapper src={Lion} className="lion-image"/>
        </Col>
      </Row>
    </SectionLayout>
  )
}
