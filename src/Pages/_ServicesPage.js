import React from 'react'
import Link from 'next/link'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { isMobile, isMobileOnly } from 'react-device-detect'
import { ServicesList } from '../Components/Config'
import { FooterSection } from '../Components/Sections'
import { SeeMoreLink, SectionTitle, ImageWrapper, SectionDesc, ScrollBox } from '../Components'
/* STYLES */
import '~/Styles/Pages/services.scss'

export const ServicesPage = () => {
  return (
    <>
      <SeeMoreLink direction="right" display={isMobile} />
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
                    <Link href={service.link}>
                      <a className="custom-btn"><span>SEE MORE</span></a>
                    </Link>
                    {index === 0 && isMobileOnly && <ScrollBox display />}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      {isMobile && <FooterSection />}
    </>
  )
}
