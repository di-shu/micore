import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
  ProjectInfoWrap,
  SectionDesc,
  SectionLayout,
  SectionLine,
  SectionTitle
} from '../../../SectionsComponents'
import { useDeviceDetect } from '../../../../Helpers'

export const Results = () => {
  const { desktop } = useDeviceDetect()
  
  return (
    <SectionLayout
      id="zlata-results"
      Header={() => (
        <>
          <SectionLine display={desktop} direction="top" />
          <SectionLine display={desktop} direction="left" />
          <SectionLine display={desktop} direction="bottom" />
        </>
      )}
    >
      <SectionTitle title="Our results"/>
      <Row className="grid-container">
        <Col xs={12} md={6} lg={5} xl={6}>
          <ProjectInfoWrap>
            <p><span>1st</span> - Plum color</p>
            <p><span>2nd</span> - Gold</p>
          </ProjectInfoWrap>
          <SectionDesc withDot/>
        </Col>
        <Col xs={12} md={6} lg={7} xl={6} className="result-color-item-wrap">
          <div className="result-color-wrap primary">
            <div className="result-color">
              <span>1st</span>
            </div>
            <div className="result-color-info">
              <span>#3d3a4a</span>
              <span>CMYK: 73, 79, 44, 41%</span>
              <span>PANTONE 7448 C</span>
            </div>
          </div>
          <div className="result-color-wrap secondary">
            <div className="result-color">
              <span>2nd</span>
            </div>
            <div className="result-color-info">
              <span>#a88154</span>
              <span>CMYK: 25, 49, 85, 5%</span>
              <span>PANTONE 729 C</span>
            </div>
          </div>
        </Col>
      </Row>
    </SectionLayout>
  )
}
