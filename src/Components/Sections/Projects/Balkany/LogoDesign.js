import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
  ImageWrapper,
  SectionDesc,
  SectionLayout,
  SectionLine,
  SectionTitle
} from '../../../SectionsComponents'
import { useDeviceDetect } from '../../../../Helpers'
/* IMAGES */
const LogoStory = '/Assets/Images/Balkany/LogoStory.png'

export const LogoDesign = () => {
  const { desktop } = useDeviceDetect()
  
  return (
    <SectionLayout id="balkany-logo-design" Footer={() => <SectionLine direction="bottom"/>}>
      <ImageWrapper isDot display={desktop}/>
      <SectionTitle title="Logo design story"/>
      <Row style={{ flexDirection: 'row-reverse' }}>
        <Col xs={12} md={6} className="grid-item">
          <ImageWrapper src={LogoStory}/>
        </Col>
        <Col xs={12} md={6} className="grid-item">
          <SectionDesc withDot/>
        </Col>
      </Row>
    </SectionLayout>
  )
}
