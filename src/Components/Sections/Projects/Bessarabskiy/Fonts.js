import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { SectionDesc, SectionLayout, SectionTitle, ProjectInfoWrap } from '../../../SectionsComponents'

export const Fonts = () => (
  <SectionLayout id="bessarabskiy-fonts">
    <SectionTitle title="Fonts"/>
    <Row className="fonts-row">
      <Col xs={12} lg={6}>
        <Row className="fonts-row-inner">
          <Col xs={6}>
            <p className="font-example semi-bold">
              Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
            </p>
          </Col>
          <Col xs={6}>
            <p className="font-example regular">
              Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
            </p>
          </Col>
        </Row>
      </Col>
      <Col xs={12} lg={6}>
        <ProjectInfoWrap>
          <p>Site font</p>
          <SectionDesc withDot>Montserrat Semibold</SectionDesc>
          <SectionDesc withDot>Montserrat Regular</SectionDesc>
        </ProjectInfoWrap>
      </Col>
    </Row>
  </SectionLayout>
)
