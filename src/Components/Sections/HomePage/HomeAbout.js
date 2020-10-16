import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { ActiveLink, ImageWrapper, SectionDesc, SectionTitle } from '../../SectionsComponents'
/* STYLES */
import '~/Styles/Sections/Home/about.scss'
import { useDeviceDetect } from '../../../Helpers'
/* IMAGES */
const Statue = '/images/statue-about.png'

export const HomeAbout = ({ animation }) => {
  const { desktop } = useDeviceDetect()
  
  return (
    <section id="about-section" className="section">
      <Container fluid>
        <Row>
          <Col xs={12}>
            <SectionTitle main className={animation ? 'on-enter' : 'on-leave'} title="О нас" isContentWhite/>
          </Col>
          <Col xs={12}>
            <ImageWrapper isDot display={!desktop}/>
            <div className={`text-box ${animation ? 'on-enter' : 'on-leave'}`}>
              <SectionDesc isContentWhite className="about-desc">
                Разрабатываем креативные сайты и брендинги, заточенные под бизнес клиента. Наш подход нацелен на
                создание проекта, который будет помогать бизнесу зарабатывать, а оставлять пользователю положительный
                опыт.
              </SectionDesc>
              <ActiveLink link="/about" className="about-link">Подробнее</ActiveLink>
            </div>
            <ImageWrapper src={Statue} className={`about-statue ${animation ? 'on-enter' : 'on-leave'}`}/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
