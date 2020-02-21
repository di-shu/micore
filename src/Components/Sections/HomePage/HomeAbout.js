import React from 'react'
import Link from 'next/link'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { isMobile, isMobileOnly, isBrowser } from 'react-device-detect'
import { ImageWrapper, SectionDesc, SectionTitle, SeeMoreLink } from '../../SectionsComponents'
/* STYLES */
import '~/Styles/Pages/Sections/Home/about.scss'
/* IMAGES */
const Statue = '/Assets/Images/statue-about.png'

export const HomeAbout = ({ animation }) => {
  return (
    <section id="about-section" className="section">
      <SeeMoreLink display={!isBrowser && !isMobileOnly}/>
      <Container fluid>
        <Row>
          <Col xs={12}>
            <SectionTitle main className={animation ? 'on-enter' : 'on-leave'} title="About" isContentWhite />
          </Col>
          <Col xs={12}>
            <ImageWrapper isDot display={isMobile} />
            <div className={`text-box ${animation ? 'on-enter' : 'on-leave'}`}>
              <SectionDesc isContentWhite className="about-desc">
                We are Manticore Development, company
                which duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fugia
                nulla pariatur. Excepteur sint occaecat cupid
                atat non proident, sunt in culpa qui officia de
                serunt mollit anim id est laborum.
              </SectionDesc>
              <Link href="/about">
                <a className="about-link">See more</a>
              </Link>
            </div>
            <ImageWrapper src={Statue} className={`about-statue ${animation ? 'on-enter' : 'on-leave'}`}/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
