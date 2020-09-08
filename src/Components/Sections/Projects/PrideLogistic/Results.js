import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
  SectionDesc,
  SectionTitle,
  ImageWrapper,
  SectionLayout,
  ProjectInfoWrap
} from '../../../SectionsComponents'
import { useDeviceDetect } from '../../../../Helpers'
/* IMAGES */
const LogoResult = '/images/PrideLogistic/LogoResult.png'

export const Results = () => {
  const { mobile } = useDeviceDetect()
  
  return (
    <SectionLayout id="pride-results">
      <SectionTitle title="Фундамент"/>
      <Row>
        <Col xs={12} md={6}>
          <SectionDesc>
            Охранные поля визуально выделяют логотип и препятствует пересечению с другими элементами
          </SectionDesc>
          <ImageWrapper className="logo-results-wrap" src={LogoResult} display={mobile}/>
          <ProjectInfoWrap>
            <p><span>S</span>inhala MN</p>
            <p><span>L</span>uganskyV</p>
          </ProjectInfoWrap>
        </Col>
        <ImageWrapper className="logo-results-wrap" src={LogoResult} display={!mobile}/>
      </Row>
    </SectionLayout>
  )
}
