import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { GastroBarIdentityInfo } from './Config'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle, TypeSomething } from '../../../SectionsComponents'
/*IMAGES*/
const Pattern = '/Assets/Images/Gastrobar/PatternBG.png'

export const Identity = () => {
  return (
    <SectionLayout id="gastrobar-identity" Footer={() => <ImageWrapper src={Pattern} className="section-pattern"/>}>
      <SectionTitle title="Identity"/>
      <Row>
        <Col xs={12} lg={6}>
          <SectionDesc/>
        </Col>
        <Col xs={12} lg={6}>
          <TypeSomething content={GastroBarIdentityInfo}/>
        </Col>
      </Row>
    </SectionLayout>
  )
}
