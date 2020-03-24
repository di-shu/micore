import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
  ImageWrapper,
  SectionDesc,
  SectionLayout,
  SectionTitle
} from '../../../SectionsComponents'
import { useDeviceDetect } from '../../../../Helpers'
import { BriefList, BriefCard } from './Config'

export const Brief = () => {
  const { desktop } = useDeviceDetect()
  
  return (
    <SectionLayout id="zlata-brief">
      <SectionTitle title="Logo brief"/>
      <SectionDesc/>
      <ImageWrapper isDot display={desktop} />
      <Row className="grid-container-brief">
        {BriefList.map((brief, index) => (
          <Col key={`brief_${index}`} xs={12} md={6} lg={4} className="grid-item-brief">
            <BriefCard title={brief.title} desc={brief.desc} img={brief.img} />
          </Col>
        ))}
      </Row>
    </SectionLayout>
  )
}
