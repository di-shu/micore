import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import useTranslation from 'next-translate/useTranslation'
import { ImageWrapper, MyScrollAnimation, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'

const BrandingImage = '/images/Services/Branding/BrandingImage.png'
const BrandFinalImage = '/images/Services/Branding/BrandFinalImage.jpg'

export const MakeBranding = () => {
  const { t } = useTranslation('branding')
  const [isBrandChange, setIsBrandChange] = useState(false)

  const changeBrand = () => {
    setIsBrandChange(true)
  }

  return (
    <SectionLayout id="branding-make">
      <Row>
        <Col xs={12} lg={6}>
          <MyScrollAnimation delay={[200, 400, 600]}>
            <SectionTitle children={t('make_branding.title')}/>
            <SectionDesc className="d-none d-lg-block" children={t('make_branding.description')}/>
            <div className="make-branding-wrap d-block d-lg-none">
              <ImageWrapper src={BrandingImage} className={`branding-image start ${isBrandChange ? 'hide' : ''}`} />
              <ImageWrapper src={BrandFinalImage} className={`branding-image final ${isBrandChange ? 'active' : ''}`} />
              <button className={`custom-btn ${isBrandChange ? 'hide' : ''}`} onClick={changeBrand}><span>{t('make_branding.button')}</span></button>
            </div>
          </MyScrollAnimation>
        </Col>
        <Col xs={12} lg={6}>
          <MyScrollAnimation delay={[200, 400]}>
            <SectionDesc className="d-block d-lg-none"/>
            <div className="make-branding-wrap d-none d-lg-block">
              <ImageWrapper src={BrandingImage} className={`branding-image start ${isBrandChange ? 'hide' : ''}`} />
              <ImageWrapper src={BrandFinalImage} className={`branding-image final ${isBrandChange ? 'active' : ''}`} />
              <button className={`custom-btn ${isBrandChange ? 'hide' : ''}`} onClick={changeBrand}><span>{t('make_branding.button')}</span></button>
            </div>
          </MyScrollAnimation>
        </Col>
      </Row>
    </SectionLayout>
  )
}
