import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'
/*IMAGES*/
const LogoImg = '/images/TwoAre/Logo.svg'
const HeadphonesImg = '/images/TwoAre/Headphones.png'

const SectionFooter = () => (
  <>
    <ImageWrapper isDot/>
    <ImageWrapper src={HeadphonesImg} className="headphones-image"/>
  </>
)

export const Adaptation = () => {
  return (
    <SectionLayout id="two-are-adaptation" Footer={SectionFooter}>
      <Row>
        <Col xs={12} lg={4}>
          <SectionTitle title="Адаптация"/>
        </Col>
        <Col xs={12} lg={8}>
          <SectionDesc>
            Адаптивная версия логотипа выглядит отличается от основной лишь формой. Такой трюк позволяет эффективно
            использовать символ бренда по разному, в зависимости от контекста.
          </SectionDesc>
        </Col>
        <Col xs={12} lg={4}>
          <ImageWrapper src={LogoImg} className="logo-image"/>
        </Col>
      </Row>
    </SectionLayout>
  )
}
