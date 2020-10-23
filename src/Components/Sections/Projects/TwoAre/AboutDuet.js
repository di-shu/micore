import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'
/*IMAGES*/
const DuetImg = '/images/TwoAre/DJDuet.png'

export const AboutDuet = () => {
  return (
    <SectionLayout id="two-are-about-duet">
      <Row className="row-about-duet">
        <Col xs={12} lg={6} className="col-duet-info">
          <SectionTitle title="DJ duet"/>
          <SectionDesc>
            Талантливые продюсеры и старые друзья - Two Are - это диджейский дуэт музыкантов. У обоих большой опыт
            работы на украинской электронной сцене. В своей музыке сочетают глубокий и прогрессивный хаус с прямым
            техно-звуком.
          </SectionDesc>
        </Col>
        <Col xs={12} lg={6}>
          <ImageWrapper src={DuetImg} className="about-duet-image"/>
        </Col>
      </Row>
    </SectionLayout>
  )
}
