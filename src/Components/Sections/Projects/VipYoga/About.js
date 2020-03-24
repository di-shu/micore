import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'
/*IMAGES*/
const Logo = '/Assets/Images/VipYoga/Logo.svg'
const AboutImg = '/Assets/Images/VipYoga/About.png'

export const About = () => {
  return (
    <SectionLayout id="vip-yoga-about" Header={() => <ImageWrapper isDot />}>
      <Row className="about-row">
        <Col xs={12} lg={6}>
          <SectionTitle title="About V.Poltavets" />
          <SectionDesc />
        </Col>
        <Col xs={12} lg={6}>
          <ImageWrapper src={AboutImg} className="about-image" />
        </Col>
        <Col xs={12} className="logo-col">
          <ImageWrapper src={Logo} className="logo-image" />
        </Col>
      </Row>
    </SectionLayout>
  )
}
