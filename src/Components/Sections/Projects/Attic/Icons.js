import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
  SectionDesc,
  SectionTitle,
  ImageWrapper,
  SectionLayout
} from '../../../SectionsComponents'
import { AtticIcons } from './Config'
/* IMAGES */
const ElephantImg = '/images/Attic/Elephant.png'

export const Icons = () => {
  return (
    <SectionLayout id="attic-icons" className="icons-info-wrap" Footer={() => <ImageWrapper src={ElephantImg} className="elephant-image" />}>
      <Row>
        <Col xs={12} lg={2}>
          <SectionTitle title="Icons" isContentWhite/>
        </Col>
        <Col xs={12} lg={{ offset: 1, span: 9 }}>
          <SectionDesc isContentWhite/>
        </Col>
        <Col xs={12} className="col-icons-wrap">
          <Row>
            {AtticIcons.map((icon, index) => (
              <Col xs={4} lg={3} xl={2} key={index} className="col-icon">
                <ImageWrapper src={icon} className="icon-image">
                  <span className="icon-line vertical" />
                  <span className="icon-line vertical" />
                  <span className="icon-line horizontal" />
                  <span className="icon-line horizontal" />
                </ImageWrapper>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </SectionLayout>
  )
}
