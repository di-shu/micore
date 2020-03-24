import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BottomNavigation, ImageWrapper, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'
/*IMAGES*/
const iPhoneX = '/Assets/Images/Marinist/iPhoneX.png'
const WavesPattern = '/Assets/Images/Marinist/WavesPattern.png'

const SectionHeader = () => <ImageWrapper src={WavesPattern} className="waves-pattern" />
const SectionFooter = () => <BottomNavigation />

export const Mobile = () => {
  return (
    <SectionLayout id="marinist-mobile" Header={SectionHeader} Footer={SectionFooter}>
      <Row>
        <Col xs={12} lg={6}>
          <SectionTitle title="Mobile adaptation" />
          <SectionDesc />
        </Col>
        <Col xs={12} lg={6}>
          <ImageWrapper src={iPhoneX} className="iPhoneX-image" />
        </Col>
      </Row>
    </SectionLayout>
  )
}
