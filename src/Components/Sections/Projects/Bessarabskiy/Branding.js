import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
  ImageWrapper,
  SectionDesc,
  SectionLayout,
  SectionSlider,
  SectionTitle,
  TypeSomething
} from '../../../SectionsComponents'
import { useDeviceDetect } from '../../../../Helpers'
import { BessarabskiyBrandingInfo, BessarabskiySlides } from './Config'

export const Branding = () => {
  const { minWidthLaptop } = useDeviceDetect()
  
  return (
    <SectionLayout
      id="bessarabskiy-branding"
      // Footer={() => <SectionSlider slides={BessarabskiySlides}/>}
    >
      <ImageWrapper isDot display={minWidthLaptop}/>
      <Row>
        <Col xs={12} lg={6}>
          <SectionTitle title="Брендирование"/>
          <SectionDesc>
            Главная задача нового заведения - заявить о себе и добиться узнаваемости на локальном рынке. Для достижения
            цели мы подготовили для ресторана дизайн носителей фирменной символики: от авторучек и блокнотов для
            официантов, до пакетов для доставки и подставок под бокалы.
          </SectionDesc>
        </Col>
      </Row>
    </SectionLayout>
  )
}
