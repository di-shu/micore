import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'
/*IMAGES*/
const PhilosophyImg = '/Assets/Images/TwoAre/Philosophy.png'

const SectionFooter = () => <ImageWrapper src={PhilosophyImg} className="philosophy-image" />

export const Philosophy = () => {
  return (
    <SectionLayout id="two-are-philosophy" Footer={SectionFooter}>
      <Row>
        <Col xs={12} lg={4}>
          <SectionTitle title="Philosophy" isContentWhite />
          <SectionDesc isContentWhite />
        </Col>
      </Row>
    </SectionLayout>
  )
}
