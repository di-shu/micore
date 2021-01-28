import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { SectionDesc, SectionLayout, SectionSlider, SectionTitle, TypeSomething } from '../../../SectionsComponents'
import { TypeContent, TwoAreSlides } from './Config'

export const Branding = () => {
  return (
    <SectionLayout
      id="two-are-branding"
      Footer={() => <SectionSlider slides={TwoAreSlides}/>}
    >
      <SectionTitle title="Брендирование" isContentWhite/>
      <Row>
        <Col xs={12} lg={8}>
          <SectionDesc isContentWhite>
            Логотип Dj-проекта - это графическая визитка, которая работает на его продвижение. Эмблему можно
            использовать на афишах, в оформлении альбомов, дисков и страниц на музыкальных ресурсах.
          </SectionDesc>
        </Col>
      </Row>
    </SectionLayout>
  )
}
