import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'
/*IMAGES*/
const PhilosophyImg = '/images/VipYoga/Philosophy.png'

export const Philosophy = () => {
  return (
    <SectionLayout id="vip-yoga-philosophy">
      <Row className="philosophy-row">
        <Col xs={12} lg={5}>
          <SectionTitle title="Смысл"/>
          <SectionDesc>
            Мы предложили заказчице концепцию логотипа в виде круглой шрифтовой эмблемы. В основе конструкции
            аббревиатура и имя нашей клиентки - Виктории Полтавец. Цветовая гамма сдержанная, с акцентом на приглушенно
            голубой - цвет моря на рассвете - это неспроста, Виктория проводит занятия по йоге рано утром на городском
            пляже.
          </SectionDesc>
        </Col>
        <Col xs={12} lg={7}>
          <ImageWrapper src={PhilosophyImg} className="philosophy-image"/>
        </Col>
      </Row>
    </SectionLayout>
  )
}
