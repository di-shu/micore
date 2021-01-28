import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
  SectionDesc,
  ImageWrapper,
  SectionTitle,
  TypeSomething,
  SectionSlider,
  SectionLayout
} from '../../../SectionsComponents'
import { useDeviceDetect } from '../../../../Helpers'
import { MarinistSlides, BrandingInfo } from './Config'

const SectionFooter = () => {
  const { minWidthLaptop } = useDeviceDetect()
  
  return (
    <div className="slider-wrap">
      <ImageWrapper isDot display={minWidthLaptop}/>
      <SectionSlider slides={MarinistSlides}/>
    </div>
  )
}

export const Branding = () => {
  
  return (
    <SectionLayout id="marinist-branding" Footer={SectionFooter}>
      <Row>
        <Col xs={12} lg={6}>
          <SectionTitle title="Бреднирование"/>
          <SectionDesc>
            Важной составляющей проекта стала разработка носителей бренда вплоть до мельчайших деталей. В их число
            входит фирменные: шрифты, знак, паттерн и декоративные элементы
          </SectionDesc>
        </Col>
      </Row>
    </SectionLayout>
  )
}
