import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ImageWrapper, SectionDesc, SectionTitle, SectionWrapper } from '../../../../SectionsComponents'
/*IMAGES*/
const PhoneWhite = '/images/MobileIconWhite.svg'
const LaptopWhite = '/images/LaptopIconWhite.svg'
const TabletWhite = '/images/TabletIconWhite.svg'
const DesktopWhite = '/images/DesktopIconWhite.svg'
const GrapeShape = '/images/Bessarabkiy/GrapeShape.svg'
const iMac = '/images/Bessarabkiy/iMacPresentation.png'

export const AboutSiteFooterContent = () => {
  return (
    <div className="adaptation-wrapper">
      <ImageWrapper src={GrapeShape} className="grape-image"/>
      <ImageWrapper src={iMac} className="iMac-image"/>
      <SectionWrapper className="adaptation-section-wrapper">
        <SectionTitle title="Adaptation"/>
        <SectionDesc/>
        <Row>
          <Col xs={6} lg={3} className="grid-item-icon">
            <div className="icon-wrap">
              <ImageWrapper src={DesktopWhite} className="device-icon-image"/>
              <p>Desktop</p>
            </div>
          </Col>
          <Col xs={6} lg={3} className="grid-item-icon">
            <div className="icon-wrap">
              <ImageWrapper src={LaptopWhite} className="device-icon-image"/>
              <p>Laptop</p>
            </div>
          </Col>
          <Col xs={6} lg={3} className="grid-item-icon">
            <div className="icon-wrap">
              <ImageWrapper src={TabletWhite} className="device-icon-image"/>
              <p>Tablet</p>
            </div>
          </Col>
          <Col xs={6} lg={3} className="grid-item-icon">
            <div className="icon-wrap">
              <ImageWrapper src={PhoneWhite} className="device-icon-image"/>
              <p>Phone</p>
            </div>
          </Col>
        </Row>
      </SectionWrapper>
    </div>
  )
}
