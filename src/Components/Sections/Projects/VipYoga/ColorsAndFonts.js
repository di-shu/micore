import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ProjectColor, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'
import { VipYogaColors } from './Config'

const FontExample = '/images/VipYoga/yoga_font.svg'

export const ColorsAndFonts = () => {
  return (
    <SectionLayout id="vip-yoga-colors-and-fonts">
      <Row>
        <Col xs={12} lg={6} className="col-colors">
          <SectionTitle title="Цвета"/>
          <ProjectColor colors={VipYogaColors}/>
        </Col>
        <Col xs={12} lg={6} className="col-colors">
          <SectionTitle title="Шрифты"/>
          <div className="fonts-wrap">
            <SectionDesc withDot>Quicksand Light</SectionDesc>
            <div className="font-example-image">
              <img src={FontExample} alt="Quicksand Light"/>
            </div>
          </div>
        </Col>
      </Row>
    </SectionLayout>
  )
}
