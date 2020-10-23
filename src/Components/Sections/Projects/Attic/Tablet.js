import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'
import { AtticTablet } from './Config'

export const Tablet = () => {
  return (
    <SectionLayout id="attic-tablet">
      <ImageWrapper isDot/>
      <SectionTitle title="Планшет"/>
      <Row>
        {AtticTablet.map((tablet, index) => (
          <Col xs={12} key={`tablet_page_${index}`} className="col-tablet">
            <Row>
              <Col xs={12} lg={6}>
                <SectionTitle title={tablet.title} className="tablet-title"/>
                <SectionDesc children={tablet.desc} className="tablet-desc"/>
              </Col>
              <Col xs={12} lg={6}>
                <ImageWrapper src={tablet.image} className="tablet-image"/>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </SectionLayout>
  )
}
