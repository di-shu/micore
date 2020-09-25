import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'

/*IMAGES*/
const Lion = '/images/PrideGroup/Lion.png'
const Landscape = '/images/PrideGroup/Landscape.jpg'

export const Philosophy = () => {
  return (
    <SectionLayout id="pride-group-philosophy" Footer={() => <ImageWrapper src={Landscape} className="landscape-image"/>}>
      <Row style={{ display: 'flex', alignItems: 'center' }}>
        <Col xs={12} lg={5}>
          <SectionTitle title="Смысл"/>
          <SectionDesc>
            Pride Group представляет собой своеобразный бизнес-прайд, куда входят три равнозначные компании.
            Именно эта идея заложена в логотипе бренда. Три льва символизируют три организации, представляющие собой единое целое.
          </SectionDesc>
        </Col>
        <Col xs={12} lg={7}>
          <ImageWrapper src={Lion} className="lion-image"/>
        </Col>
      </Row>
    </SectionLayout>
  )
}
