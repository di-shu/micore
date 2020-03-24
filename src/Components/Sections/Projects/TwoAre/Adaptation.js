import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'
/*IMAGES*/
const LogoImg = '/Assets/Images/TwoAre/Logo.svg'
const HeadphonesImg = '/Assets/Images/TwoAre/Headphones.png'

const SectionFooter = () => (
  <>
    <ImageWrapper isDot />
    <ImageWrapper src={HeadphonesImg} className="headphones-image" />
  </>
)

export const Adaptation = () => {
  return (
    <SectionLayout id="two-are-adaptation" Footer={SectionFooter}>
      <Row>
        <Col xs={12} lg={4}>
          <SectionTitle title="Adaptation" />
        </Col>
        <Col xs={12} lg={8}>
          <SectionDesc />
        </Col>
        <Col xs={12} lg={4}>
          <ImageWrapper src={LogoImg} className="logo-image" />
        </Col>
      </Row>
    </SectionLayout>
  )
}
