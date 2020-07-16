import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
  BottomNavigation,
  ImageWrapper,
  SectionDesc,
  SectionTitle,
  SectionWrapper
} from '../../../../SectionsComponents'
import { AtticMobile } from './index'
import { useDeviceDetect } from '../../../../../Helpers'
/* IMAGES */
const FooterHands = '/images/Attic/FooterHands.png'
const FooterHandFirst = '/images/Attic/FooterHandFirst.png'
const FooterHandSecond = '/images/Attic/FooterHandSecond.png'

export const SectionFooter = () => {
  const { mobile } = useDeviceDetect()
  
  return (
    <div className="footer-wrap">
      <SectionWrapper className="mobile-pages-wrapper">
        <Row>
          {AtticMobile.map((mobile, index) => (
            <Col xs={12} lg={4} key={`mobile_page_${index}`} className="col-mobile">
              <Row className="row-mobile">
                <Col xs={6} lg={12}>
                  <ImageWrapper src={mobile.image} className="mobile-image" />
                </Col>
                <Col xs={6} lg={12}>
                  <SectionTitle title={mobile.title} className="mobile-title" isContentWhite />
                  <SectionDesc children={mobile.desc} className="mobile-desc" isContentWhite />
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
      </SectionWrapper>
      {mobile ? (
        <>
          <ImageWrapper src={FooterHandFirst} className="footer-hand-first" />
          <ImageWrapper src={FooterHandSecond} className="footer-hand-second" />
        </>
      ) : <ImageWrapper src={FooterHands} className="footer-hands-image" />}
      <ImageWrapper isDot />
      <BottomNavigation />
    </div>
  )
}
