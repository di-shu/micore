import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
/* IMAGES */
const DescriptionLogo = '../../Assets/images/ZlataProject/LogoWithDescription.png'
const DescriptionLogoStreet = '../../Assets/images/ZlataProject/LogoStreetWithDescription.png'

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
