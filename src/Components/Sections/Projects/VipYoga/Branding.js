import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
  ImageWrapper,
  SectionDesc,
  SectionLayout,
  SectionTitle,
  TypeSomething
} from '../../../SectionsComponents'
import { BrandingContent } from './Config'
/*IMAGES*/
const BodyImg = '/images/VipYoga/Body.png'

export const Branding = () => {
  return (
    <SectionLayout id="vip-yoga-branding" Header={() => <ImageWrapper src={BodyImg} className="body-image"/>}>
      <Row>
        <Col xs={12} lg={5}>
          <SectionTitle title="Branding" isContentWhite/>
          <SectionDesc withDot isContentWhite/>
          <TypeSomething content={BrandingContent} whiteText/>
        </Col>
      </Row>
    </SectionLayout>
  )
}
