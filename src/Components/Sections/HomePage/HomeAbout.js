import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import useTranslation from 'next-translate/useTranslation'
import { useDeviceDetect } from '../../../Helpers'
import { ActiveLink, ImageWrapper, SectionDesc, SectionTitle } from '../../SectionsComponents'
import '../../../Styles/Sections/Home/about.scss'

const Statue = '/images/statue-about.png'

export const HomeAbout = ({ animation }) => {
  const { desktop } = useDeviceDetect()
  const { t } = useTranslation('about')
  
  return (
    <section id="about-section" className="section">
      <Container fluid>
        <Row>
          <Col xs={12}>
            <SectionTitle main className={animation ? 'on-enter' : 'on-leave'} title={t('title')} isContentWhite/>
          </Col>
          <Col xs={12}>
            <ImageWrapper isDot display={!desktop}/>
            <div className={`text-box ${animation ? 'on-enter' : 'on-leave'}`}>
              <SectionDesc isContentWhite className="about-desc">
                {t('description')}
              </SectionDesc>
              <ActiveLink link="/about" className="about-link">{t('more')}</ActiveLink>
            </div>
            <ImageWrapper src={Statue} className={`about-statue ${animation ? 'on-enter' : 'on-leave'}`}/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
