import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { GastroBarIdentityInfo } from './Config'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle, TypeSomething } from '../../../SectionsComponents'
/*IMAGES*/
const Pattern = '/images/Gastrobar/PatternBG.png'

export const Identity = () => {
  return (
    <SectionLayout id="gastrobar-identity" Footer={() => <ImageWrapper src={Pattern} className="section-pattern"/>}>
      <SectionTitle title="Паттерн"/>
      <Row>
        <Col xs={12} lg={5}>
          <SectionDesc>
            Органической частью новой айдентики стал геометрический паттерн. Он усиливает общий визуальный эффект и
            работает на узнаваемость бренда.
          </SectionDesc>
        </Col>
      </Row>
    </SectionLayout>
  )
}
