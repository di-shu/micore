import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { SectionDesc, SectionTitle, ImageWrapper, SectionLayout } from '../../../SectionsComponents'
/*IMAGES*/
const MacBook = '/Assets/Images/Bessarabkiy/Macbook.png'
const PageNews = '/Assets/Images/Bessarabkiy/PageNews.png'
const GrapeFull = '/Assets/Images/Bessarabkiy/GrapeFull.svg'
const PepperYellow = '/Assets/Images/Bessarabkiy/PaperYellow.png'

const SectionHeader = () => (
  <>
    <ImageWrapper src={MacBook} className="macBook-image"/>
    <ImageWrapper src={GrapeFull} className="grape-image"/>
  </>
)

export const News = () => (
  <SectionLayout id="bessarabskiy-news" Header={SectionHeader}>
    <Row>
      <Col xs={12} lg={6} xl={5}>
        <SectionTitle title="News page"/>
        <SectionDesc withDot/>
      </Col>
      <Col xs={12} lg={6} xl={7}>
        <ImageWrapper src={PageNews} className="news-page-image"/>
      </Col>
    </Row>
    <ImageWrapper src={PepperYellow} className="pepper-image"/>
  </SectionLayout>
)
