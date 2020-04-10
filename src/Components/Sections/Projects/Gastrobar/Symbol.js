import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BottomNavigation, ImageWrapper, SectionDesc, SectionLayout, SectionTitle, SectionWrapper } from '../../../SectionsComponents'
import { useDeviceDetect } from '../../../../Helpers'
/* IMAGES */
const TShirt = '/Assets/Images/Gastrobar/TShirt.png'
const Hand = '/Assets/Images/Gastrobar/HandIcon.svg'
const Artbook = '/Assets/Images/Gastrobar/Artbook.png'
const Pattern = '/Assets/Images/Gastrobar/PatternBG.png'
const LogoGrill = '/Assets/Images/Gastrobar/LogoGrill.svg'

const SymbolContentFooter = () => {
  const { mobile } = useDeviceDetect()

  return (
    <>
      <div className="artbook-wrapper">
        <ImageWrapper src={Hand} className="hand-icon" display={mobile}/>
        <ImageWrapper src={Artbook} className="section-bg"/>
      </div>
      <div className="tshirt-wrapper">
        <SectionWrapper>
          <ImageWrapper src={TShirt} className="tshirt-image"/>
        </SectionWrapper>
        <ImageWrapper src={Pattern} className="section-pattern"/>
      </div>
      <BottomNavigation/>
    </>
  )
}

export const Symbol = () => {
  return (
    <SectionLayout id="gastrobar-symbol" Footer={SymbolContentFooter}>
      <SectionTitle title="Symbol"/>
      <Row style={{ display: 'flex', alignItems: 'center' }}>
        <Col xs={12} lg={6}>
          <ImageWrapper src={LogoGrill} className="symbol-logo"/>
        </Col>
        <Col xs={12} lg={6}>
          <p className="symbol-title">Green Egg Grill</p>
          <SectionDesc/>
        </Col>
      </Row>
      <ImageWrapper isDot/>
    </SectionLayout>
  )
}