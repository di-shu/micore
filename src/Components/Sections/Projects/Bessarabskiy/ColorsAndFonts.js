import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BessarabskiyColors } from './Config'
import { ProjectColor, SectionDesc, SectionLayout, SectionTitle, ProjectInfoWrap } from '../../../SectionsComponents'

export const ColorsAndFonts = () => {
  return (
    <SectionLayout id="bessarabskiy-colors-and-fonts">
      <SectionTitle title="Colors & Fonts"/>
      <Row className="color-grid-container">
        <Col xs={12} lg={6}>
          <ProjectColor colors={BessarabskiyColors} />
        </Col>
        <Col xs={12} lg={6}>
          <ProjectInfoWrap>
            <p><span>1st</span> - dark brown</p>
            <p><span>2nd</span> - ivory</p>
            <p><span>3rd</span> - warm gold gradient</p>
          </ProjectInfoWrap>
          <SectionDesc withDot className="color-desc"/>
        </Col>
      </Row>
      <Row className="font-grid-container">
        <Col xs={12} lg={6}>
          <p className="font-example">
            A B C D E F
            G H I J K L M
            N O P Q R S T
            U V W X Y Z
          </p>
        </Col>
        <Col xs={12} lg={6}>
          <ProjectInfoWrap>
            <p>Main font</p>
            <SectionDesc withDot>Copperplate Gothic Bold</SectionDesc>
          </ProjectInfoWrap>
        </Col>
      </Row>
    </SectionLayout>
  )
}
