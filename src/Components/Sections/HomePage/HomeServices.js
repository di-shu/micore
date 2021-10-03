import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import useTranslation from 'next-translate/useTranslation'
import { ServicesList } from '../../Config'
import { AnimationClass } from '../../../Helpers'
import { ActiveLink, ImageWrapper, SectionDesc, SectionTitle } from '../../SectionsComponents'
import '../../../Styles/Pages/services.scss'
import '../../../Styles/Sections/Home/services.scss'

export const HomeServices = ({ animation }) => {
  const { t } = useTranslation('services')

  return (
    <section id="services-section" className="section main-services-section">
      <Container className="section-wrapper">
        <SectionTitle main title={t('title')} isContentWhite className={AnimationClass({ animation })}/>
        <Row className={AnimationClass({ animation, className: 'row-service' })}>
          {ServicesList.map((service, index) => (
            <Col
              key={service.key} xs={12} md={6}
              className={AnimationClass({ animation, className: 'col-service' })}
            >
              <ActiveLink link={service.link}>
                <Row className="services-card">
                  <Col xs={12} lg={6}>
                    <ImageWrapper
                      src={service.img}
                      className={`services-image ${index === ServicesList.length - 1 ? 'other' : ''}`}/>
                  </Col>
                  <Col xs={12} lg={6}>
                    <div className="services-info">
                      <SectionTitle isContentWhite className="services-title" title={t(`services.${service.key}.title`)}/>
                      <SectionDesc isContentWhite className="services-desc" children={t(`services.${service.key}.description`)}/>
                    </div>
                  </Col>
                </Row>
              </ActiveLink>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
