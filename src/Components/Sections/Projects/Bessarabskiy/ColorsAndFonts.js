import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BessarabskiyColors } from './Config'
import { ProjectColor, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'

export const ColorsAndFonts = () => {
  return (
    <SectionLayout id="bessarabskiy-colors-and-fonts">
      <SectionTitle title="Цвета и шрифты"/>
      <Row className="color-grid-container">
        <Col xs={12} lg={7}>
          <SectionDesc>
            Цветовая гамма состоит из трёх гармонично сочетаюющихся цветов
          </SectionDesc>
          <ProjectColor colors={BessarabskiyColors} />
        </Col>
        <Col xs={12} lg={5}>
          <div className="d-flex flex-column" style={{ marginBottom: 27 }}>
            <p className="font-example-title">Логотип</p>
            <div className="font-name-row d-flex justify-content-between align-items-center">
              <p className="font-name">Copperplate Gothic</p>
              <p className="font-weight">Bold</p>
            </div>
            <div>
              <img src="/images/Bessarabkiy/FontExample1.svg" alt="Font"/>
              <img src="/images/Bessarabkiy/FontExample2.svg" alt="Font"/>
            </div>
          </div>
          <div className="d-flex flex-column">
            <p className="font-example-title">Сайт</p>
            <div className="font-name-row d-flex justify-content-between align-items-center">
              <p className="font-name">Montserrat</p>
              <p className="font-weight">bold, medium, regular</p>
            </div>
            <div className="d-flex flex-column">
              <img src="/images/Bessarabkiy/FontExample3.svg" alt="Font"/>
              <img src="/images/Bessarabkiy/FontExample4.svg" alt="Font"/>
            </div>
          </div>
        </Col>
      </Row>
    </SectionLayout>
  )
}
