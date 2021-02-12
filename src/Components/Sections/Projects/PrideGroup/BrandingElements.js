import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import {
  SectionDesc,
  SectionTitle,
  ImageWrapper,
  SectionLayout,
  BottomNavigation
} from '../../../SectionsComponents'

/*IMAGES*/
const Landscape = '/images/PrideGroup/Landscape.png'
const SymbolLogo = '/images/PrideGroup/SymbolLogo.svg'
const FooterBackground = '/images/PrideGroup/PrideGroupMockup.jpg'

export const BrandingElements = () => {
  return (
    <SectionLayout
      id="pride-group-branding-elements"
      Footer={() => (
        <>
          <ImageWrapper className="footer-background" src={FooterBackground}/>
          <BottomNavigation hidden/>
        </>
      )}
    >
      <ImageWrapper className="section-background" src={Landscape}/>
      <Row style={{ display: 'flex', alignItems: 'center' }}>
        <Col xs={12} lg={6}>
          <SectionTitle title="Символ"/>
          <SectionDesc>
            Лев - воплощение благородства, уверенности и справедливости. Конструкция из трех львов,
            смотрящих на три стороны света, состоит из треугольных элементов.
            Все эти детали отсылают нас к основной идеи - триединства организации.
          </SectionDesc>
        </Col>
        <Col xs={12} lg={6}>
          <ImageWrapper src={SymbolLogo} className="symbol-logo"/>
        </Col>
      </Row>
    </SectionLayout>
  )
}
