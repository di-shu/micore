import React from 'react'
import { isMobile } from 'react-device-detect'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { AnimationClass } from '../../../Helpers'
import { ImageWrapper, SectionDesc, SectionTitle, SeeMoreLink } from '../.'
/* STYLES */
import '~/Styles/Pages/Sections/About/main.scss'
/* IMAGES */
const IndianGirl = '/Assets/Images/About/Indian_Girl.png'

export const AboutMain = ({ firstLoad, animation }) => {
  return (
    <section id="about-main-section" className="section">
      <SeeMoreLink
        label="Our skills"
        display={isMobile}
        className="on-first-load"
      />
      <Container className="section-container">
        <Row>
          <Col xs={12} lg={6} className="grid-item-wrap grid-texts">
            <SectionTitle className={AnimationClass({ firstLoad, animation })}>
              WE are WEB studio <span>M</span>ANTICORE development
            </SectionTitle>
            <SectionDesc className={AnimationClass({ firstLoad, animation })} />
          </Col>
          <Col xs={12} lg={6} className="grid-item-wrap grid-images">
            <ImageWrapper isDot className={AnimationClass({ firstLoad, animation })} />
            <ImageWrapper src={IndianGirl} className={AnimationClass({ firstLoad, animation, className: 'about-main-statue' })} />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
