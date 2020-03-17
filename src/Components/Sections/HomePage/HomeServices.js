import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ServicesList } from '../../Config'
import { AnimationClass } from '../../../Helpers'
import { SectionDesc, SectionTitle, ImageWrapper, SectionLayout, ActiveLink } from '../../SectionsComponents'
/* STYLES */
import '~/Styles/Sections/Home/services.scss'

export const HomeServices = ({ animation }) => {
  return (
    <SectionLayout id="services-section" sectionClassName="section main-services-section">
      <SectionTitle main title="Services" isContentWhite className={AnimationClass({ animation })}/>
      <Row className={AnimationClass({ animation, className: 'row-service' })}>
        {ServicesList.map((service, index) => (
          <Col key={`service_${index}`} xs={12} md={6} className={AnimationClass({ animation, className: 'col-service' })}>
            <ActiveLink link={service.link} className="service-link" />
            <Row className="services-card">
              <Col xs={12} lg={6}>
                <ImageWrapper src={service.img} className="services-image"/>
              </Col>
              <Col xs={12} lg={6}>
                <div className="services-info">
                  <SectionTitle isContentWhite className="services-title" title={service.name}/>
                  <SectionDesc isContentWhite className="services-desc" children={service.desc}/>
                </div>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </SectionLayout>
  )
}
