import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ImageWrapper, SectionDesc, SectionTitle, SectionWrapper } from '../../../../SectionsComponents'

/*IMAGES*/
const Tomato = '/images/Bessarabkiy/Tomato.png'
const Broccoli = '/images/Bessarabkiy/Broccoli.png'
const GrapeShape = '/images/Bessarabkiy/GrapeShape.svg'
const iMac = '/images/Bessarabkiy/iMacPresentation.png'
const PageScreen1 = '/images/Bessarabkiy/PageScreen.png'
const PageScreen2 = '/images/Bessarabkiy/PageScreen2.png'

export const AboutSiteFooterContent = () => {
  return (
    <>
      <div className="adaptation-wrapper">
        <ImageWrapper src={Tomato} className="tomato-image"/>
        <ImageWrapper src={iMac} className="computer-image"/>
      </div>
      <SectionWrapper className="pages-wrapper">
        <ImageWrapper src={GrapeShape} className="grape-image"/>
        <Row>
          <Col xs={12} lg={6}>
            <SectionTitle title="Фишки сайта" isContentWhite/>
            <SectionDesc isContentWhite>
              Преимуществом сайта заведения является онлайн-заказ и доставка еды. Для удобства заказчика мы создали
              функциональную админ-панель, которая позволяет управлять разделами меню, добавлять/убирать/изменять
              блюда и их характеристики.
            </SectionDesc>
          </Col>
          <Col xs={12}>
            <div className="pages-images-wrapper">
              <ImageWrapper src={PageScreen1} className="screen-page-1"/>
              <ImageWrapper src={PageScreen2} className="screen-page-2"/>
              <ImageWrapper src={Broccoli} className="broccoli-image"/>
              <ImageWrapper isDot/>
            </div>
          </Col>
        </Row>
      </SectionWrapper>
    </>
  )
}
