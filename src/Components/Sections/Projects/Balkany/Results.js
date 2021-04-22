import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
  ImageWrapper,
  ProjectInfoWrap,
  SectionDesc,
  SectionLayout,
  SectionTitle
} from '../../../SectionsComponents'
import { useDeviceDetect } from '../../../../Helpers'

const Form = '/images/Balkany/BalkanyForm.jpg'

export const Results = () => {
  const { mobile, laptop, desktop } = useDeviceDetect()
  
  return (
    <SectionLayout
      id="balkany-results"
      Footer={() => <div className="section-image-wrap" style={{ backgroundImage: `url(${Form})` }}/>}
    >
      <SectionTitle title="Шрифт и цвет"/>
      <Row>
        <Col xs={12} lg={6}>
          <SectionDesc>
            Синий цвет, цвет чистого неба - основной цвет нового стиля. Он символизирует честность, добрую славу и
            стремление вверх.
          </SectionDesc>
          <ProjectInfoWrap>
            <p><span>P</span>rimary Blue color</p>
            <p><span>F</span>ont Phenomena</p>
          </ProjectInfoWrap>
          {mobile && (
            <div className="color-info-wrap">
              <div className="color-info-text">
                <span children="#3e4676"/>
                <span children="CMYK: 98, 98, 32, 11%"/>
                <span children="PANTONE 2111 C"/>
                <div className="custom-line">
                  <span/>
                  <span/>
                </div>
              </div>
              <div className="color-info-round"/>
            </div>
          )}
        </Col>
        {(laptop || desktop) && (
          <Col lg={6}>
            <div className="color-info-wrap">
              <div className="color-info-text">
                <span children="#3e4676"/>
                <span children="CMYK: 98, 98, 32, 11%"/>
                <span children="PANTONE 2111 C"/>
                <div className="custom-line">
                  <span/>
                  <span/>
                </div>
              </div>
              <div className="color-info-round"/>
            </div>
          </Col>
        )}
      </Row>
    </SectionLayout>
  )
}
