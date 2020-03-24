import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'
/*IMAGES*/
const DesktopAdaptation = '/Assets/Images/Marinist/DesktopAdaptation.png'
const LaptopAdaptation = '/Assets/Images/Marinist/LaptopAdaptation.png'
const TabletAdaptation = '/Assets/Images/Marinist/TabletAdaptation.png'
const MobileAdaptation = '/Assets/Images/Marinist/MobileAdaptation.png'
const DeviceAdaptation = '/Assets/Images/Marinist/DeviceAdaptation.png'

export const Adaptation = () => {
  return (
    <SectionLayout id="marinist-adaptation">
      <SectionTitle title="Devices adaptation" />
      <SectionDesc />
      <Row>
        <Col xs={12} lg={4}>
          <ImageWrapper src={DesktopAdaptation} className="adaptation-image desktop" />
        </Col>
        <Col xs={12} lg={4}>
          <ImageWrapper src={LaptopAdaptation} className="adaptation-image laptop" />
        </Col>
        <Col xs={12} lg={3}>
          <ImageWrapper src={TabletAdaptation} className="adaptation-image tablet" />
        </Col>
        <Col xs={12} lg={1}>
          <ImageWrapper src={MobileAdaptation} className="adaptation-image mobile" />
        </Col>
        <Col xs={12} className="adaptation-device-wrap">
          <ImageWrapper isDot />
          <ImageWrapper src={DeviceAdaptation} className="device-image" />
        </Col>
      </Row>
    </SectionLayout>
  )
}
