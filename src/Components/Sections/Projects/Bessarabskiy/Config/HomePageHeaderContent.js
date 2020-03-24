import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useDeviceDetect } from '../../../../../Helpers'
import { ImageWrapper, SectionDesc, SectionTitle, SectionWrapper } from '../../../../SectionsComponents'
/*IMAGES*/
const Broccoli = '/Assets/Images/Bessarabkiy/Broccoli.png'
const PageScreen1 = '/Assets/Images/Bessarabkiy/PageScreen.png'
const PageScreen2 = '/Assets/Images/Bessarabkiy/PageScreen2.png'

export const HomePageHeaderContent = () => {
  const { minWidthLaptop } = useDeviceDetect()

  return minWidthLaptop ? (
    <SectionWrapper className="pages-wrapper">
      <Row>
        <Col lg={6} xl={7}>
          <Row>
            <Col lg={12}>
              <SectionTitle title="Home page"/>
              <SectionDesc withDot/>
            </Col>
            <Col lg={12}>
              <ImageWrapper src={PageScreen2} className="screen-page-2"/>
              <ImageWrapper src={Broccoli} className="broccoli-image"/>
              <ImageWrapper isDot className="top-dots"/>
            </Col>
          </Row>
        </Col>
        <Col lg={6} xl={5}>
          <ImageWrapper src={PageScreen1} className="screen-page-1"/>
        </Col>
      </Row>
    </SectionWrapper>
  ) : (
    <>
      <ImageWrapper src={PageScreen1} className="screen-page-1"/>
      <ImageWrapper src={PageScreen2} className="screen-page-2"/>
      <ImageWrapper src={Broccoli} className="broccoli-image"/>
      <ImageWrapper isDot className="top-dots"/>
    </>
  )
}
