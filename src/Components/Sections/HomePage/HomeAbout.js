import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { ActiveLink, ImageWrapper, SectionDesc, SectionTitle } from '../../SectionsComponents'
/* STYLES */
import '~/Styles/Sections/Home/about.scss'
import { useDeviceDetect } from '../../../Helpers'
/* IMAGES */
const Statue = '/Assets/Images/statue-about.png'

export const HomeAbout = ({ animation }) => {
  const { desktop } = useDeviceDetect()
  
  return (
    <section id="about-section" className="section">
      <Container fluid>
        <Row>
          <Col xs={12}>
            <SectionTitle main className={animation ? 'on-enter' : 'on-leave'} title="About" isContentWhite />
          </Col>
          <Col xs={12}>
            <ImageWrapper isDot display={!desktop} />
            <div className={`text-box ${animation ? 'on-enter' : 'on-leave'}`}>
              <SectionDesc isContentWhite className="about-desc">
                We are Manticore Development, company
                which duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fugia
                nulla pariatur. Excepteur sint occaecat cupid
                atat non proident, sunt in culpa qui officia de
                serunt mollit anim id est laborum.
              </SectionDesc>
              <ActiveLink link="/about" className="about-link">See more</ActiveLink>
            </div>
            <ImageWrapper src={Statue} className={`about-statue ${animation ? 'on-enter' : 'on-leave'}`}/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
