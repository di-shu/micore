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
const BrandingImg = '/images/Attic/Branding.png'
const BrandingMobileImg = '/images/Attic/BrandingMobile.png'

export const Branding = () => {
  const { mobile, minWidthLaptop } = useDeviceDetect()
  
  return (
    <SectionLayout
      id="attic-branding"
      Footer={() => <ImageWrapper src={mobile ? BrandingMobileImg : BrandingImg} className="branding-image" />}
    >
      <Row>
        <Col xs={12} lg={6}>
          <SectionTitle title="Брендирование" isContentWhite />
          <SectionDesc isContentWhite>
            Корпоративная символика используется во всех коммуникациях строительной компании.
          </SectionDesc>
        </Col>
      </Row>
    </SectionLayout>
  )
}
