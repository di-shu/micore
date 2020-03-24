import React from 'react'
import { isMobileOnly } from 'react-device-detect'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
  SectionDesc,
  ImageWrapper,
  SectionTitle,
  TypeSomething,
  SectionLayout
} from '../../../SectionsComponents'
import { useDeviceDetect } from '../../../../Helpers'
import { BrandingInfo } from './Config'
/* STYLES */
const BrandingImg = '/Assets/Images/Attic/Branding.png'
const BrandingMobileImg = '/Assets/Images/Attic/BrandingMobile.png'

export const Branding = () => {
  const isLaptop = useDeviceDetect(true)
  
  return (
    <SectionLayout
      id="attic-branding"
      Footer={() => <ImageWrapper src={isMobileOnly ? BrandingMobileImg : BrandingImg} className="branding-image" />}
    >
      <Row>
        <Col xs={12} lg={6}>
          <SectionTitle title="Branding" isContentWhite={!isLaptop} />
          <SectionDesc withDot isContentWhite={!isLaptop} />
          <TypeSomething content={BrandingInfo} whiteText={!isLaptop} />
        </Col>
      </Row>
    </SectionLayout>
  )
}
