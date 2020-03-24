import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
  SectionLine,
  ImageWrapper,
  SectionTitle,
  SectionLayout,
  ProjectInfoWrap
} from '../../../SectionsComponents'
/* IMAGES */
const HexBlack = '/Assets/Images/BeeGames/HexBlack.svg'
const HexYellow = '/Assets/Images/BeeGames/HexYellow.svg'
const Honeycomb = '/Assets/Images/BeeGames/Honeycomb.png'
const FontExample = '/Assets/Images/BeeGames/FontExample.svg'

export const Results = () => {
  return (
    <SectionLayout
      id="bee-games-result"
      Header={() => <SectionLine direction="top"/>}
      Footer={() => <ImageWrapper src={Honeycomb} className="honeycomb-image"/>}
    >
      <SectionTitle title="Our results"/>
      <Row>
        <Col xs={12} md={6}>
          <ProjectInfoWrap>
            <p><span>1st</span> - primary <br/>Neutral Black</p>
            <p><span>2nd</span> - slave <br/>Yellow</p>
          </ProjectInfoWrap>
        </Col>
        <Col xs={12} md={6}>
          <div className="result-color-wrap">
            <div className="result-color-item">
              <ImageWrapper className="hexagon yellow" src={HexBlack}/>
              <div className="result-color-info">
                <span className="text-color">#1E1E1E</span>
                <span>CMYK: 60, 52, 48, 80%</span>
                <span>PANTONE Neutral Black C</span>
              </div>
            </div>
            <div className="result-color-item">
              <ImageWrapper className="hexagon yellow" src={HexYellow}/>
              <div className="result-color-info">
                <span className="text-color">#f2c403</span>
                <span>CMYK: 3, 21, 100, 0%</span>
                <span>PANTONE 7408 C</span>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={12} className="grid-item-font-example">
          <ImageWrapper className="font-example" src={FontExample}/>
          <div className="font-text">
            <div className="line-wrap">
              <span className="circle"/>
              <span className="line"/>
            </div>
            <span className="font-name">BankGothic Md Bt</span>
          </div>
        </Col>
      </Row>
    </SectionLayout>
  )
}
