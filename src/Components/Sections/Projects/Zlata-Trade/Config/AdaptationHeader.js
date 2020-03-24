import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useDeviceDetect } from '../../../../../Helpers'
import { SectionLine } from '../../../../SectionsComponents/Projects'
/* IMAGES */
const AdaptationLogo = '../../Assets/Images/ZlataProject/AdaptationLogo.png'
const AdaptationLogoStreet = '../../Assets/Images/ZlataProject/AdaptationLogoStreet.png'

export const AdaptationHeader = () => {
  const { desktop } = useDeviceDetect()
  
  return (
    <>
      <SectionLine display={desktop} direction="top" />
      <SectionLine display={desktop} direction="left" />
      <SectionLine display={desktop} direction="bottom" />
      <Row className="logo-adaptation-container">
        <Col xs={6}>
          <div className="image-wrap logo-adaptation">
            <img src={AdaptationLogo} alt="Project logo"/>
          </div>
        </Col>
        <Col xs={6}>
          <div className="image-wrap logo-street">
            <img src={AdaptationLogoStreet} alt="Project logo"/>
          </div>
        </Col>
      </Row>
    </>
  )
}
