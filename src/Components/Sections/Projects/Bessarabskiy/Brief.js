import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useDeviceDetect } from '../../../../Helpers'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'
/* IMAGES */
const Leaf = '/images/Bessarabkiy/Leaf.png'
const Barrel = '/images/Bessarabkiy/Barrel.png'
const LogoVar1 = '/images/Bessarabkiy/LogoVar1.svg'
const LogoVar2 = '/images/Bessarabkiy/LogoVar2.svg'

export const Brief = () => {
  const { minWidthLaptop } = useDeviceDetect()
  
  return (
    <SectionLayout id="bessarabskiy-brief">
      <Row>
        <Col xs={12} lg={7} className="brief-grid-item">
          <SectionTitle title="Logo brief"/>
          <SectionDesc className="main-desc"/>
          {minWidthLaptop && (
            <Row className="logo-var-container">
              <Col lg={6} className="logo-brief-wrap">
                <SectionTitle title="First version" className="version-title"/>
                <SectionDesc className="version-desc"/>
                <div className="logo-wrap">
                  <ImageWrapper src={LogoVar1}/>
                </div>
              </Col>
              <Col lg={6} className="logo-brief-wrap">
                <SectionTitle title="Results" className="version-title"/>
                <SectionDesc className="version-desc"/>
                <div className="logo-wrap">
                  <ImageWrapper src={LogoVar2}/>
                </div>
              </Col>
            </Row>
          )}
        </Col>
        <Col xs={12} lg={5} className="brief-grid-item">
          <SectionTitle title="Idea" className="version-title"/>
          <SectionDesc className="version-desc"/>
          <div className="brief-images-wrap">
            <div className="brief-row-wrap barrel-wrap">
              <ImageWrapper src={Barrel} className="barrel-image"/>
              <span className="version-title">Barrel</span>
            </div>
            <div className="brief-row-wrap grape-wrap">
              <span className="version-title">Grape</span>
              <ImageWrapper src={Leaf} className="grape-image"/>
            </div>
          </div>
        </Col>
        {!minWidthLaptop && (
          <Col xs={12} lg={6} className="logo-wrapper">
            <Row>
              <Col xs={12} className="logo-brief-wrap">
                <SectionTitle title="First version" className="version-title"/>
                <SectionDesc className="version-desc"/>
                <div className="logo-wrap">
                  <ImageWrapper src={LogoVar1}/>
                </div>
              </Col>
              <Col xs={12} className="logo-brief-wrap">
                <SectionTitle title="Results" className="version-title"/>
                <SectionDesc className="version-desc"/>
                <div className="logo-wrap">
                  <ImageWrapper src={LogoVar2}/>
                </div>
              </Col>
            </Row>
          </Col>
        )}
      </Row>
    </SectionLayout>
  )
}
