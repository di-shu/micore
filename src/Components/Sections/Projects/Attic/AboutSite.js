import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
  ImageWrapper,
  SectionDesc,
  SectionLayout,
  SectionTitle,
  TypeSomething
} from '../../../SectionsComponents'
import { AtticAboutSiteInfo } from './Config'
/* IMAGES */
const AboutSiteImg = '/images/Attic/AboutSite.jpg'

export const AboutSite = () => {
  return (
    <SectionLayout id="attic-about-site">
      <Row>
        <Col xs={12}>
          <ImageWrapper src={AboutSiteImg} className="about-site-image"/>
        </Col>
        <Col xs={12}>
          <SectionTitle title="Главная страница" className="home-page-title"/>
          <Row>
            <Col xs={12} lg={6}>
              <SectionDesc className="home-page-desc">
                Для разделения пути целевой аудитории, первое, что видит пользователь - две основные услуги компании:
                ремонт квартир и строительство домов.
              </SectionDesc>
            </Col>
          </Row>
        </Col>
      </Row>
    </SectionLayout>
  )
}
