import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
  SectionDesc,
  ImageWrapper,
  SectionTitle,
  TypeSomething,
  SectionSlider,
  SectionLayout
} from '../../../SectionsComponents'
import { useDeviceDetect } from '../../../../Helpers'
import { MarinistSlides, BrandingInfo } from './Config'

const SectionFooter = () => {
  const { minWidthLaptop } = useDeviceDetect()

  return (
    <div className="slider-wrap">
      <ImageWrapper isDot display={minWidthLaptop} />
      <SectionSlider slides={MarinistSlides} />
    </div>
  )
}

export const Branding = () => {
  
  return (
    <SectionLayout id="marinist-branding" Footer={SectionFooter}>
      <SectionTitle title="About branding" />
      <Row>
        <Col xs={12} lg={6}>
          <SectionDesc withDot />
        </Col>
        <Col xs={12} lg={6}>
          <TypeSomething content={BrandingInfo} />
        </Col>
      </Row>
    </SectionLayout>
  )
}
