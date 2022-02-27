import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'
/*IMAGES*/
const AboutImg = '/images/Bezcreditov/about-img.png'

export const About = () => {
  return (
    <SectionLayout id="bezcreditov-about" Footer={() => <ImageWrapper src={AboutImg} className="about-image"/>}>
      <Row>
        <Col xs={12} lg={5} className="about-main">
          <SectionTitle title="About Project"/>
          <SectionDesc>
						Our regular customer turned to us with a task for a new business: to develop a system for working with client's loans. The content of the business is to legally obtain a reduction of the amount of the loan for the client and buy it back from the lenders.
          </SectionDesc>
        </Col>
      </Row>
    </SectionLayout>
  )
}
