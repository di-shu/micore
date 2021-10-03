import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useDeviceDetect } from '../../../../Helpers'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'

const HexYellow = '/images/BeeGames/HexYellow.svg'
const Honeycomb = '/images/BeeGames/Honeycomb.png'
const DesktopSite = '/images/BeeGames/DesktopSite.png'
const Examples = '/images/BeeGames/BeeGamesExamples.png'

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
          <SectionTitle title="Промо"/>
          <ImageWrapper src={DesktopSite} className="site-image" display={mobile}/>
          <SectionDesc>
            Промо-сайт знакомит пользователей с проектом, отвечая на основные вопросы и содержит блок регистрации в проекте.
            Дизайн сайта выполнен в стилистике проекта.
          </SectionDesc>
        </Col>
      </Row>
    </SectionLayout>
  )
}
