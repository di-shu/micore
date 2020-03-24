import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { BrandingAdditionalInfo } from './Config'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle, TypeSomething } from '../../../SectionsComponents'
/*IMAGES*/
const Landscape = '/Assets/Images/PrideGroup/Landscape.png'

export const BrandingElements = () => {
  return (
    <SectionLayout id="pride-group-branding-elements" Header={() => <ImageWrapper src={Landscape}/>}>
      <Row style={{ display: 'flex', alignItems: 'center' }}>
        <Col xs={12} lg={6}>
          <SectionTitle title="Branding elements"/>
          <SectionDesc/>
        </Col>
        <Col xs={12} lg={6}>
          <TypeSomething content={BrandingAdditionalInfo}/>
        </Col>
      </Row>
    </SectionLayout>
  )
}
