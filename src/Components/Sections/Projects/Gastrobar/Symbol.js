import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
  BottomNavigation,
  ImageWrapper,
  SectionDesc,
  SectionLayout,
  SectionTitle,
  SectionWrapper
} from '../../../SectionsComponents'
import { useDeviceDetect } from '../../../../Helpers'
/* IMAGES */
const TShirt = '/images/Gastrobar/TShirt.png'
const Hand = '/images/Gastrobar/HandIcon.svg'
const Artbook = '/images/Gastrobar/Artbook.png'
const Pattern = '/images/Gastrobar/PatternBG.png'
const LogoGrill = '/images/Gastrobar/LogoGrill.svg'

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
      <BottomNavigation isBlack />
    </>
  )
}

export const Symbol = () => {
  return (
    <SectionLayout id="gastrobar-symbol" Footer={SymbolContentFooter}>
      <SectionTitle title="Символ"/>
      <Row style={{ display: 'flex', alignItems: 'center' }}>
        <Col xs={12} lg={6}>
          <ImageWrapper src={LogoGrill} className="symbol-logo"/>
        </Col>
        <Col xs={12} lg={6}>
          <p className="symbol-title">Green Egg Grill</p>
          <SectionDesc>
            Благодаря полигональной технике удалось создать оригинальный графический символ печи. Эффект незавершенности
            символа как бы передает распространение приятного аромата приготовленной еды.
          </SectionDesc>
        </Col>
      </Row>
    </SectionLayout>
  )
}
