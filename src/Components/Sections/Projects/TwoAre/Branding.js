import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { SectionDesc, SectionLayout, SectionSlider, SectionTitle, TypeSomething } from '../../../SectionsComponents'
import { TypeContent, TwoAreSlides } from './Config'

export const Branding = () => {
  return (
    <SectionLayout id="two-are-branding" Footer={() => <SectionSlider slides={TwoAreSlides}/>}>
      <SectionTitle title="Branding" isContentWhite />
      <Row>
        <Col xs={12} lg={8}>
          <SectionDesc withDot isContentWhite />
        </Col>
        <Col xs={12} lg={4}>
          <TypeSomething content={TypeContent} whiteText />
        </Col>
      </Row>
    </SectionLayout>
  )
}
