import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'
import { useDeviceDetect } from '../../../../Helpers'
/* IMAGES */
const BeeLogo = '/images/BeeGames/MainLogo.svg'

export const DesignStory = () => {
  const { minWidthLaptop } = useDeviceDetect()

  return (
    <SectionLayout id="bee-games-design-story">
      <Row>
        <Col xs={12} lg={6}>
          <SectionTitle title="Logo design story"/>
          <ImageWrapper src={BeeLogo} display={!minWidthLaptop}/>
          <SectionDesc withDot/>
        </Col>
        {
          minWidthLaptop && (
            <Col lg={6}>
              <ImageWrapper src={BeeLogo}/>
            </Col>
          )
        }
      </Row>
    </SectionLayout>
  )
}
