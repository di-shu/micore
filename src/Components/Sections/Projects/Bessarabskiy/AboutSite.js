import React from 'react'
import { Col, Row } from 'react-bootstrap'
import {
  SectionDesc,
  ImageWrapper,
  SectionTitle,
  SectionLayout
} from '../../../../Components'
import { AboutSiteFooterContent } from './Config'

export const AboutSite = () => {
  return (
    <SectionLayout
      id="bessarabskiy-about-site"
      className="about-site-wrapper"
      Footer={AboutSiteFooterContent}
    >
      <Row>
        <Col xs={12} lg={6}>
          <SectionTitle title="Сайт"/>
          <SectionDesc>
            Сайт ресторана выполнен в фирменном стиле и подчеркивает целостность индивидуального образа. Чтобы создать
            максимально информативный и удобный для клиента ресурс мы организовали фуд-фотосет и адаптировали все изображения
            блюд для сайта.
          </SectionDesc>
        </Col>
        <Col xs={12} lg={6}>
          <ImageWrapper isDot/>
        </Col>
      </Row>
    </SectionLayout>
  )
}
