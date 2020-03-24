import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useDeviceDetect } from '../../../../Helpers'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'
/* IMAGES */
const HexYellow = '/Assets/Images/BeeGames/HexYellow.svg'
const Honeycomb = '/Assets/Images/BeeGames/Honeycomb.png'
const DesktopSite = '/Assets/Images/BeeGames/DesktopSite.png'
const Examples = '/Assets/Images/BeeGames/BeeGamesExamples.png'

export const HomePage = () => {
  const { mobile } = useDeviceDetect()

  return (
    <SectionLayout
      id="bee-games-homepage"
      Header={() => <ImageWrapper src={Honeycomb} className="honeycomb-image" display={!mobile}/>}
      Footer={() => <ImageWrapper src={Examples} className="examples-image"/>}
    >
      <Row>
        {!mobile && (
          <>
            <Col md={7}>
              <ImageWrapper src={DesktopSite} className="site-image"/>
            </Col>
            <div className="line-wrap">
              <span className="section-line bottom"/>
              <ImageWrapper src={HexYellow} className="hex-small"/>
            </div>
          </>
        )}
        <Col xs={12} md={5} className="grid-item-info">
          <SectionTitle title="Home page"/>
          <ImageWrapper src={DesktopSite} className="site-image" display={mobile}/>
          <SectionDesc withDot/>
        </Col>
      </Row>
    </SectionLayout>
  )
}
