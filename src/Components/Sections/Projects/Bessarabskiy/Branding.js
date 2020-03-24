import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
  ImageWrapper,
  SectionDesc,
  SectionLayout,
  SectionSlider,
  SectionTitle,
  TypeSomething
} from '../../../SectionsComponents'
import { useDeviceDetect } from '../../../../Helpers'
import { BessarabskiyBrandingInfo, BessarabskiySlides } from './Config'

export const Branding = () => {
  const { minWidthLaptop } = useDeviceDetect()
  
  return (
    <SectionLayout id="bessarabskiy-branding" Footer={() => <SectionSlider slides={BessarabskiySlides}/>}>
      <ImageWrapper isDot display={minWidthLaptop}/>
      <SectionTitle title="About branding"/>
      <Row>
        <Col xs={12} lg={6} className="grid-item">
          <SectionDesc withDot/>
        </Col>
        <Col xs={12} lg={6} className="grid-item">
          <TypeSomething content={BessarabskiyBrandingInfo} />
        </Col>
      </Row>
    </SectionLayout>
  )
}
