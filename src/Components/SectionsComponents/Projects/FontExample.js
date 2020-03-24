import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { SectionDesc, SectionTitle } from '../SectionInfo'

export const FontExample = ({ fontNameFirst, fontNameSecond }) => {
  return (
    <>
      <SectionTitle title="Fonts" />
      <Row>
        <Col xs={12} md={6}>
          <div className="font-example-wrap">
            <SectionDesc withDot className="font-title" children={fontNameFirst} />
            <SectionDesc className="font-example font-first">
              <span>AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz <br/>1234567890</span>
            </SectionDesc>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="font-example-wrap">
            <SectionDesc withDot className="font-title" children={fontNameSecond} />
            <SectionDesc className="font-example font-second">
              <span>AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz <br/>1234567890</span>
            </SectionDesc>
          </div>
        </Col>
      </Row>
    </>
  )
}
