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
import { useDeviceDetect } from '../../../../Helpers'
import { AdaptationInfo } from './Config'
/* IMAGES */
const Phone = '/Assets/Images/Balkany/AdaptationPhone.png'

export const Adaptation = () => {
  const { mobile } = useDeviceDetect()
  
  return (
    <SectionLayout id="balkany-adaptation">
      <Row className="grid-container">
        <Col xs={12} md={7} className="grid-item">
          <SectionTitle title="Mobile adaptation"/>
          <SectionDesc/>
          <ImageWrapper isDot display={mobile}/>
          <ImageWrapper src={Phone} className="phone-image" display={mobile}/>
          <TypeSomething content={AdaptationInfo}/>
        </Col>
        {!mobile && (
          <Col md={5} className="grid-item">
            <ImageWrapper isDot/>
            <ImageWrapper src={Phone} className="phone-image"/>
          </Col>
        )}
      </Row>
    </SectionLayout>
  )
}
