import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ServicesList } from '../../Config'
import { AnimationClass } from '../../../Helpers'
import { ActiveLink, ImageWrapper, SectionDesc, SectionTitle } from '../../SectionsComponents'
/* STYLES */
import '~/Styles/Pages/services.scss'
import '~/Styles/Sections/Home/services.scss'
import Container from 'react-bootstrap/Container'

export const HomeServices = ({ animation }) => {
  return (
    <section id="services-section" className="section main-services-section">
      <Container className="section-wrapper">
        <SectionTitle main title="Услуги" isContentWhite className={AnimationClass({ animation })}/>
        <Row className={AnimationClass({ animation, className: 'row-service' })}>
          {ServicesList.map((service, index) => (
            <Col key={`service_${index}`} xs={12} md={6}
                 className={AnimationClass({ animation, className: 'col-service' })}>
              <ActiveLink link={service.link}>
                <Row className="services-card">
                  <Col xs={12} lg={6}>
                    <ImageWrapper
                      src={service.img}
                      className={`services-image ${index === ServicesList.length - 1 ? 'other' : ''}`}/>
                  </Col>
                  <Col xs={12} lg={6}>
                    <div className="services-info">
                      <SectionTitle isContentWhite className="services-title" title={service.name}/>
                      <SectionDesc isContentWhite className="services-desc" children={service.desc}/>
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
