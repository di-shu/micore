import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'

const BrandingImage = '/Assets/Images/Services/Branding/BrandingImage.png'

export const MakeBranding = () => {
  return (
    <SectionLayout id="branding-make">
      <Row>
        <Col xs={12} lg={6}>
          <SectionTitle title="Этому бренду нужен новый герой" />
          <SectionDesc className="d-none d-lg-block" />
          <div className="make-branding-wrap d-block d-lg-none">
            <ImageWrapper src={BrandingImage} className="branding-image" />
            <button className="custom-btn"><span>Брендировать</span></button>
          </div>
        </Col>
        <Col xs={12} lg={6}>
          <SectionDesc className="d-block d-lg-none"/>
          <div className="make-branding-wrap d-none d-lg-block">
            <ImageWrapper src={BrandingImage} className="branding-image" />
            <button className="custom-btn"><span>Брендировать</span></button>
          </div>
        </Col>
      </Row>
    </SectionLayout>
  )
}
