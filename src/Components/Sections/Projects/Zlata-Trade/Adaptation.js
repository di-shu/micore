import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { AdaptationFooter, AdaptationHeader } from './Config'
import { SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'
/* IMAGES */
const LogoSizes = '../../images/ZlataProject/LogoSizes.png'

export const Adaptation = () => {
  return (
    <SectionLayout
      id="zlata-adaptation"
      Header={AdaptationHeader}
      Footer={AdaptationFooter}
    >
      <SectionTitle title="About adaptation"/>
      <Row className="grid-container-adaptation">
        <Col xs={12} md={6}>
          <div className="image-wrap logo-count">
            <img src={LogoSizes} alt="Logo"/>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <SectionDesc withDot/>
        </Col>
      </Row>
    </SectionLayout>
  )
}
