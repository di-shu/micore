import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { ServicesList } from '../Config'
import { FooterSection } from '../Sections'
import { useDeviceDetect } from '../../Helpers'
import { SeeMoreLink, SectionTitle, ImageWrapper, SectionDesc, ScrollBox, ActiveLink } from '../SectionsComponents'
/* STYLES */
import '~/Styles/Pages/services.scss'

const ServicesPage = () => {
  const { mobile, desktop } = useDeviceDetect()
  
  return (
    <>
      <SeeMoreLink direction="right" display={!desktop} />
      <section id="services-section">
        <Container fluid>
          <SectionTitle main title="Services" isContentWhite />
          <Row>
            {ServicesList.map((service, index) => (
              <Col key={`service_${index}`} xs={12} md={6} xl={3} className="col-service">
                <div className="services-card">
                  <ImageWrapper src={service.img} className="services-image" />
                  <div className="services-info">
                    <SectionTitle isContentWhite className="services-title" title={service.name} />
                    <SectionDesc isContentWhite className="services-desc" children={service.desc} />
                    <ActiveLink link={service.link} className="custom-btn">
                      <span>SEE MORE</span>
                    </ActiveLink>
                    {index === 0 && mobile && <ScrollBox />}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      {!desktop && <FooterSection />}
    </>
  )
}

export default ServicesPage
