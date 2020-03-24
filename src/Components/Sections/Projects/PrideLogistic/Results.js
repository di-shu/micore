import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
  SectionDesc,
  SectionTitle,
  ImageWrapper,
  SectionLayout,
  ProjectInfoWrap
} from '../../../SectionsComponents'
import { useDeviceDetect } from '../../../../Helpers'
/* IMAGES */
const LogoResult = '/Assets/Images/PrideLogistic/LogoResult.png'

export const Results = () => {
  const { mobile } = useDeviceDetect()
  
  return (
    <SectionLayout id="pride-results">
      <SectionTitle title="Our results"/>
      <Row>
        <Col xs={12} md={6}>
          <ImageWrapper className="logo-results-wrap" src={LogoResult} display={mobile}/>
          <ProjectInfoWrap>
            <p><span>P</span>rimary - Orange color</p>
            <p><span>F</span>ont - Sinhala MN</p>
          </ProjectInfoWrap>
          <SectionDesc withDot/>
        </Col>
        <ImageWrapper className="logo-results-wrap" src={LogoResult} display={!mobile}/>
      </Row>
    </SectionLayout>
  )
}
