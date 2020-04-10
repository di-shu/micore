import React from 'react'
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
  const { mobile, minWidthLaptop } = useDeviceDetect()
  
  return (
    <SectionLayout
      id="attic-branding"
      Footer={() => <ImageWrapper src={mobile ? BrandingMobileImg : BrandingImg} className="branding-image" />}
    >
      <Row>
        <Col xs={12} lg={6}>
          <SectionTitle title="Branding" isContentWhite={!minWidthLaptop} />
          <SectionDesc withDot isContentWhite={!minWidthLaptop} />
          <TypeSomething content={BrandingInfo} whiteText={!minWidthLaptop} />
        </Col>
      </Row>
    </SectionLayout>
  )
}
