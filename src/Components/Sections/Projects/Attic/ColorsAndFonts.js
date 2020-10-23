import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontExample, ImageWrapper, ProjectColor, SectionLayout, SectionTitle } from '../../../SectionsComponents'
import { AtticColors } from './Config'
/* IMAGES */
const FontExample1 = '/images/Attic/attic_font_1.svg'
const FontExample2 = '/images/Attic/attic_font_2.svg'
const LogoGoldLine = '/images/Attic/LogoGoldLine.png'
const LogoGoldFill = '/images/Attic/LogoGoldFill.png'

export const ColorsAndFonts = () => {
  return (
    <SectionLayout id="attic-colors-and-fonts">
      <Row>
        <Col xs={12} lg={6}>
          <SectionTitle title="Цвета"/>
          <ProjectColor colors={AtticColors}/>
        </Col>
        <Col xs={12} lg={6}>
          <SectionTitle title="Шрифты"/>
          <div className="font-example-all-wrap">
            <div className="font-example-wrap">
              <p className="font-example-name">Andis Regular</p>
              <div className="font-example-image">
                <img src={FontExample1} alt="Andis Regular example"/>
              </div>
            </div>
            <div className="font-example-wrap">
              <p className="font-example-name">Gill Sans Regular</p>
              <div className="font-example-image">
                <img src={FontExample2} alt="Gill Sans Regular example"/>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <ImageWrapper src={LogoGoldLine} className="logo-demo"/>
        </Col>
        <Col xs={6}>
          <ImageWrapper src={LogoGoldFill} className="logo-demo"/>
        </Col>
      </Row>
    </SectionLayout>
  )
}
