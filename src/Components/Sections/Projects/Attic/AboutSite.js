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

const AboutSiteImg = '/images/Attic/AboutSite.jpg'

export const AboutSite = () => {
  return (
    <SectionLayout id="attic-about-site">
      <Row>
        <Col xs={12}>
          <ImageWrapper src={AboutSiteImg} className="about-site-image"/>
        </Col>
      </Row>
    </SectionLayout>
  )
}
