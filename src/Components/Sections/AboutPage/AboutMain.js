import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import useTranslation from 'next-translate/useTranslation'
import { AnimationClass } from '../../../Helpers'
import {ActiveLink, ImageWrapper, SectionDesc, SectionTitle} from '../../SectionsComponents'
import '../../../Styles/Sections/About/main.scss'

const IndianGirl = '/images/About/Indian_Girl.png'

export const AboutMain = ({ firstLoad, animation }) => {
  const { t } = useTranslation('about')

  return (
    <section id="about-main-section" className="section">
      <Container className="section-container">
        <Row>
          <Col xs={12} lg={6} className="grid-item-wrap grid-texts">
            <SectionTitle className={AnimationClass({ firstLoad, animation })}>
              {t('main_title')} <span>M</span>ANTICORE development
            </SectionTitle>
            <SectionDesc className={AnimationClass({ firstLoad, animation })}>
              {t('main_description')}
            </SectionDesc>
              <ActiveLink link="/projects/manticore" className="about-link">
                <span>{t('main_more')}</span>
              </ActiveLink>
          </Col>
          <Col xs={12} lg={6} className="grid-item-wrap grid-images">
            <ImageWrapper isDot className={AnimationClass({ firstLoad, animation })}/>
            <ImageWrapper
              src={IndianGirl}
              className={AnimationClass({ firstLoad, animation, className: 'about-main-statue' })}/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
