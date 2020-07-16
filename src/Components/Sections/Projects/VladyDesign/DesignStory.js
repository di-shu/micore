import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'
import { useDeviceDetect } from '../../../../Helpers'
/* IMAGES */
const VladyLogo = '/images/VladyDesign/VladyLogo.svg'

export const DesignStory = () => {
  const { minWidthLaptop } = useDeviceDetect()

  return (
    <SectionLayout id="vlady-design-story">
      <Row>
        <Col xs={12} lg={6}>
          <SectionTitle title="Logo design story"/>
          <ImageWrapper src={VladyLogo} display={!minWidthLaptop}/>
          <SectionDesc withDot/>
        </Col>
        {
          minWidthLaptop && (
            <Col lg={6}>
              <ImageWrapper src={VladyLogo}/>
            </Col>
          )
        }
      </Row>
    </SectionLayout>
  )
}
