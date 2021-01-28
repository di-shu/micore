import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { AnimationClass } from '../../../Helpers'
import {ActiveLink, ImageWrapper, SectionDesc, SectionTitle} from '../../SectionsComponents'
/* STYLES */
import '~/Styles/Sections/About/main.scss'
/* IMAGES */
const IndianGirl = '/images/About/Indian_Girl.png'

export const AboutMain = ({ firstLoad, animation }) => {
  return (
    <section id="about-main-section" className="section">
      <Container className="section-container">
        <Row>
          <Col xs={12} lg={6} className="grid-item-wrap grid-texts">
            <SectionTitle className={AnimationClass({ firstLoad, animation })}>
              WE are WEB studio <span>M</span>ANTICORE development
            </SectionTitle>
            <SectionDesc className={AnimationClass({ firstLoad, animation })}>
              Компания родилась с идеи в марте 2017-го года. С того времени наша философия остаётся неизменная: создание
              нового на основе старого. Соединив принципы дизайна разных эпох продукт выходит не похожим на конкурентов.
              Мы ищем клиентов, которые понимают, что интернет занимает в мире не последнее место и готовы идти в ногу
              со временем вместе.
            </SectionDesc>
              <ActiveLink link="/projects/manticore" className="about-link">
                <span>История компании</span>
              </ActiveLink>
          </Col>
          <Col xs={12} lg={6} className="grid-item-wrap grid-images">
            <ImageWrapper isDot className={AnimationClass({ firstLoad, animation })}/>
            <ImageWrapper src={IndianGirl}
                          className={AnimationClass({ firstLoad, animation, className: 'about-main-statue' })}/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
