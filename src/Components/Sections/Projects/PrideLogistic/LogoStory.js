import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'
import { useDeviceDetect } from '../../../../Helpers'
/* IMAGES */
const LogoDesign = '/Assets/Images/PrideLogistic/LogoDesign.svg'

export const LogoStory = () => {
  const { mobile, tablet, laptop, desktop } = useDeviceDetect()
  
  return (
    <SectionLayout id="pride-logo-story">
      <Row>
        <Col xs={12} lg={6}>
          <SectionTitle title="Logo design story"/>
          <ImageWrapper src={LogoDesign} display={mobile || tablet}/>
          <SectionDesc withDot/>
        </Col>
        {(laptop || desktop) && (
          <Col lg={6}>
            <ImageWrapper src={LogoDesign}/>
          </Col>
        )}
      </Row>
    </SectionLayout>
  )
}
