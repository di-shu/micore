import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { AboutSiteInfo } from './Config'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle, TypeSomething } from '../../../../Components'
/* IMAGES */
const AboutSiteImage = '/images/Marinist/AboutSite.png'

export const AboutSite = () => {
  return (
    <SectionLayout id="marinist-about-site">
      <ImageWrapper isDot />
      <SectionTitle title="About site" />
      <SectionDesc withDot />
      <ImageWrapper src={AboutSiteImage} className="about-site-image" />
      <Row>
        <Col xs={12} lg={6}>
          <SectionTitle title="Home page" className="home-page-title" />
          <SectionDesc className="home-page-desc" />
        </Col>
        <Col xs={12} lg={6}>
          <TypeSomething content={AboutSiteInfo} />
        </Col>
      </Row>
    </SectionLayout>
  )
}
