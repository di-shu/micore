import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
  SectionDesc,
  SectionTitle,
  ImageWrapper,
  SectionLayout,
  ProjectInfoWrap, ProjectColor
} from '../../../SectionsComponents'
import { useDeviceDetect } from '../../../../Helpers'
import {PrideLColors} from "./Config";

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
            <div className="results-font-info">
              <p><span>S</span>inhala MN</p>
              <ImageWrapper src="/images/PrideLogistic/pride_font1.svg"/>
            </div>
            <div className="results-font-info">
              <p><span>L</span>uganskyV</p>
              <ImageWrapper src="/images/PrideLogistic/pride_font2.svg"/>
            </div>
          </ProjectInfoWrap>
          <div className="pride-results-colors">
            <div className="pride-results-color">
              <div className="color-wrap">
                <p>#ebaa43</p>
              </div>
              <div className="color-cmyk">
                <span>CMYK</span>
                <span>0, 40, 82, 0</span>
              </div>
              <div className="color-pantone">
                <span>PANTONE</span>
                <span>143 c</span>
              </div>
            </div>
            <div className="pride-results-color">
              <div className="color-wrap">
                <p>#1c1c1c</p>
              </div>
              <div className="color-cmyk">
                <span>CMYK</span>
                <span>78, 68, 61, 86</span>
              </div>
              <div className="color-pantone">
                <span>PANTONE</span>
                <span>Black 6 C</span>
              </div>
            </div>
          </div>
        </Col>
        <ImageWrapper className="logo-results-wrap" src={LogoResult} display={!mobile}/>
      </Row>
    </SectionLayout>
  )
}
