import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ProjectColor, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'
import { VipYogaColors } from './Config'

export const ColorsAndFonts = () => {
  return (
    <SectionLayout id="vip-yoga-colors-and-fonts">
      <Row>
        <Col xs={12} lg={6}>
          <SectionTitle title="Colors" />
          <ProjectColor colors={VipYogaColors} />
        </Col>
        <Col xs={12} lg={6}>
          <SectionTitle title="Fonts" />
          <div className="fonts-wrap">
            <SectionDesc withDot>Quicksand Light</SectionDesc>
            <p className="font-example">
              AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz <br/>
              1234567890
            </p>
          </div>
        </Col>
      </Row>
    </SectionLayout>
  )
}
