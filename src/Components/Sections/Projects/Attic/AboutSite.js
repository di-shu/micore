import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
  ImageWrapper,
  SectionDesc,
  SectionLayout,
  SectionTitle,
  TypeSomething
} from '../../../SectionsComponents'
import { AtticAboutSiteInfo } from './Config'
/* IMAGES */
const AboutSiteImg = '/images/Attic/AboutSite.png'

export const AboutSite = () => {
  return (
    <SectionLayout id="attic-about-site">
      <Row>
        <Col xs={12} lg={4}>
          <SectionTitle title="About site" />
        </Col>
        <Col xs={12} lg={8}>
          <SectionDesc withDot />
        </Col>
        <Col xs={12}>
          <ImageWrapper src={AboutSiteImg} className="about-site-image" />
        </Col>
        <Col xs={12}>
          <SectionTitle title="Home page" className="home-page-title" />
          <Row>
            <Col xs={12} lg={6}>
              <SectionDesc className="home-page-desc" />
            </Col>
            <Col xs={12} lg={6}>
              <TypeSomething content={AtticAboutSiteInfo} whiteText />
            </Col>
          </Row>
        </Col>
      </Row>
    </SectionLayout>
  )
}
