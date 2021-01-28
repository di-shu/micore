import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
/* IMAGES */
const DescriptionLogo = '../../images/ZlataProject/LogoWithDescription.png'
const DescriptionLogoStreet = '../../images/ZlataProject/LogoStreetWithDescription.jpg'

export const AdaptationFooter = () => {
  return (
    <Row className="logo-adaptation-container">
      <Col xs={6}>
        <div className="image-wrap logo-adaptation">
          <img src={DescriptionLogo} alt="Project logo"/>
        </div>
      </Col>
      <Col xs={6}>
        <div className="image-wrap logo-street">
          <img src={DescriptionLogoStreet} alt="Project logo"/>
        </div>
      </Col>
    </Row>
  )
}
