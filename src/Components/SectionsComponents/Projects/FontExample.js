import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { SectionDesc, SectionTitle } from '../SectionInfo'
import { ImageWrapper } from '../ImageWrapper'

export const FontExample = ({ fontNameFirst, fontNameSecond, fontExampleFirst, fontExampleSecond }) => {
  return (
    <>
      <SectionTitle title="Fonts" />
      <Row>
        <Col xs={12} md={6}>
          <div className="font-example-wrap">
            <SectionDesc withDot className="font-title" children={fontNameFirst} />
            <ImageWrapper src={fontExampleFirst} alt={fontNameFirst}/>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="font-example-wrap">
            <SectionDesc withDot className="font-title" children={fontNameSecond} />
            <ImageWrapper src={fontExampleSecond} alt={fontNameSecond}/>
          </div>
        </Col>
      </Row>
    </>
  )
}
