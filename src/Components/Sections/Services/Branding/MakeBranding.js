import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ImageWrapper, MyScrollAnimation, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'

const BrandingImage = '/Assets/Images/Services/Branding/BrandingImage.png'
const BrandFinalImage = '/Assets/Images/Services/Branding/BrandFinalImage.jpg'

export const MakeBranding = () => {
  const [isBrandChange, setIsBrandChange] = useState(false)

  const changeBrand = () => {
    setIsBrandChange(true)
  }

  return (
    <SectionLayout id="branding-make">
      <Row>
        <Col xs={12} lg={6}>
          <MyScrollAnimation delay={[200, 400, 600]}>
            <SectionTitle title="Этому бренду нужен новый герой" />
            <SectionDesc className="d-none d-lg-block" />
            <div className="make-branding-wrap d-block d-lg-none">
              <ImageWrapper src={BrandingImage} className={`branding-image start ${isBrandChange ? 'hide' : ''}`} />
              <ImageWrapper src={BrandFinalImage} className={`branding-image final ${isBrandChange ? 'active' : ''}`} />
              <button className={`custom-btn ${isBrandChange ? 'hide' : ''}`} onClick={changeBrand}><span>Брендировать</span></button>
            </div>
          </MyScrollAnimation>
        </Col>
        <Col xs={12} lg={6}>
          <MyScrollAnimation delay={[200, 400]}>
            <SectionDesc className="d-block d-lg-none"/>
            <div className="make-branding-wrap d-none d-lg-block">
              <ImageWrapper src={BrandingImage} className={`branding-image start ${isBrandChange ? 'hide' : ''}`} />
              <ImageWrapper src={BrandFinalImage} className={`branding-image final ${isBrandChange ? 'active' : ''}`} />
              <button className={`custom-btn ${isBrandChange ? 'hide' : ''}`} onClick={changeBrand}><span>Брендировать</span></button>
            </div>
          </MyScrollAnimation>
        </Col>
      </Row>
    </SectionLayout>
  )
}
