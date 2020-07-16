import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BottomNavigation, ImageWrapper, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'
import { useDeviceDetect } from '../../../../Helpers'
/* IMAGES */
const SymbolLogo = '/images/PrideGroup/SymbolLogo.svg'
const PrideMockup = '/images/PrideGroup/PrideGroupMockup.png'

const SymbolFooterContent = () => {
  return (
    <>
      <ImageWrapper src={PrideMockup} className="section-bg"/>
      <BottomNavigation/>
    </>
  )
}

export const Symbol = () => {
  const { minWidthLaptop } = useDeviceDetect()

  return (
    <SectionLayout id="pride-group-symbol" Footer={SymbolFooterContent}>
      <ImageWrapper isDot display={minWidthLaptop}/>
      <Row style={{ display: 'flex', alignItems: 'center' }}>
        {minWidthLaptop && (
          <Col lg={7}>
            <ImageWrapper src={SymbolLogo} className="symbol-logo"/>
          </Col>
        )}
        <Col xs={12} lg={5}>
          <SectionTitle title="Symbol"/>
          {!minWidthLaptop && (
            <ImageWrapper src={SymbolLogo} className="symbol-logo"/>
          )}
          <SectionDesc/>
        </Col>
      </Row>
    </SectionLayout>
  )
}
