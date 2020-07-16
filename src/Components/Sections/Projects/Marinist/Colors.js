import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
  SectionDesc,
  SectionTitle,
  ProjectColor,
  SectionLayout,
  ProjectInfoWrap
} from '../../../SectionsComponents'
import { MarinistColors } from './Config'
import { useDeviceDetect } from '../../../../Helpers'

export const Colors = () => {
  const { desktop } = useDeviceDetect()

  return (
    <SectionLayout id="marinist-colors">
      <SectionTitle title={desktop ? 'Colors & fonts' : 'Colors'} />
      <Row className="row-color-wrap">
        <Col xs={12} lg={6}>
          <ProjectColor colors={MarinistColors} />
        </Col>
        <Col xs={12} lg={6}>
          <ProjectInfoWrap>
            <p><span>1st</span> - dark brown</p>
            <p><span>2nd</span> - wave blue</p>
            <p><span>3rd</span> - dark sea wave</p>
          </ProjectInfoWrap>
          <SectionDesc withDot />
        </Col>
      </Row>
    </SectionLayout>
  )
}
