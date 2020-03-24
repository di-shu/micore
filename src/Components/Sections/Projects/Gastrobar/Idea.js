import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle, SectionWrapper } from '../../../SectionsComponents'
/*IMAGES*/
const Logo = '/Assets/Images/Gastrobar/Logo.png'
const Grill = '/Assets/Images/Gastrobar/Grill.png'
const Pattern = '/Assets/Images/Gastrobar/PatternBG.png'
const GraphiteBG = '/Assets/Images/Gastrobar/GraphiteBG.png'

const IdeaFooterContent = () => {
  return (
    <SectionWrapper className="logo-wrapper">
      <ImageWrapper src={Logo} className="logo-image"/>
    </SectionWrapper>
  )
}

export const Idea = () => {
  return (
    <SectionLayout
      customWrap
      id="gastrobar-about-idea"
      Footer={IdeaFooterContent}
    >
      <div className="about-idea-wrapper">
        <SectionWrapper className="about-section-wrapper">
          <Row style={{ display: 'flex', alignItems: 'center' }}>
            <Col xs={12} lg={6}>
              <SectionTitle title="About idea"/>
              <SectionDesc/>
            </Col>
            <Col xs={12} lg={6}>
              <ImageWrapper src={Grill} className="grill-image"/>
            </Col>
          </Row>
        </SectionWrapper>
        <ImageWrapper src={GraphiteBG} className="section-bg"/>
        <ImageWrapper src={Pattern} className="section-pattern"/>
      </div>
    </SectionLayout>
  )
}
