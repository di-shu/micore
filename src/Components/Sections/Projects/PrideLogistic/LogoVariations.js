import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
  ImageWrapper,
  SectionDesc,
  SectionLayout,
  SectionLine,
  SectionTitle,
} from '../../../SectionsComponents'
import { useDeviceDetect } from '../../../../Helpers'
import { LogosInfo } from './Config'

export const LogoVariations = () => {
  const { laptop, desktop } = useDeviceDetect()
  
  return (
    <SectionLayout id="pride-logo-variations" Header={() => <SectionLine direction="top" display={!desktop}/>}>
      <ImageWrapper isDot display={laptop || desktop}/>
      <SectionTitle title="Logo variations"/>
      <SectionDesc/>
      <Row>
        {LogosInfo.map((item, index) => {
          return (
            <Col key={`logo_${index}`} xs={12}>
              <div className="variation-wrap">
                <span className="logo-number">{index + 1}</span>
                <div className="logo-wrap">
                  <img src={item.logo} alt="Logo variation"/>
                </div>
                <div className="logo-description">
                  <SectionDesc children={item.text}/>
                </div>
              </div>
            </Col>
          )
        })}
      </Row>
    </SectionLayout>
  )
}
