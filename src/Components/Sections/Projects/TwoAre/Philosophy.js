import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'
/*IMAGES*/
const PhilosophyImg = '/images/TwoAre/Philosophy.png'

const SectionFooter = () => <ImageWrapper src={PhilosophyImg} className="philosophy-image"/>

export const Philosophy = () => {
  return (
    <SectionLayout id="two-are-philosophy" Footer={SectionFooter}>
      <Row>
        <Col xs={12} lg={4}>
          <SectionTitle title="Смысл" isContentWhite/>
          <SectionDesc isContentWhite>
            В лаконичном текстовом логотипе отражено название проекта. Акцент проявляется в нестандартном начертании
            букв “W” и “R”. Острые углы придают конструкции брутальности, характерной для мужского дуэта и сферы в
            целом.
          </SectionDesc>
        </Col>
      </Row>
    </SectionLayout>
  )
}
