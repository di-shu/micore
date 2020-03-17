import React from 'react'
import { useSpring } from 'react-spring'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { AnimationClass, useDeviceDetect } from '../../../Helpers'
import { ApolloStatue, ImageWrapper, SectionTitle, SeeMoreLink, SocialsWrap } from '../../SectionsComponents'
/* STYLES */
import '~/Styles/Sections/Home/main.scss'

const move = (x, y) => `${-x / 4}px ${-y / 8}px`

export const HomeMain = ({ firstLoad, animation }) => {
  const { mobile, desktop } = useDeviceDetect()
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 9, tension: 136, friction: 81 } }))
  const handleMouseMove = ({ clientX: x, clientY: y }) => set({ xy: [x, y] })
  
  return (
    <section id="main-section" className="section" onMouseMove={handleMouseMove}>
      <SeeMoreLink
        display={!desktop}
        direction={mobile ? 'right' : 'left'}
        className={AnimationClass({ firstLoad, animation })}
      />
      <SocialsWrap firstLoad={firstLoad} display={!mobile}/>
      <Container fluid>
        <Row>
          <Col xs={12} lg={6} className={AnimationClass({ firstLoad, animation, className: 'col-info' })}>
            <ImageWrapper isDot display={!desktop} className={AnimationClass({ firstLoad, animation })}/>
            <SectionTitle isContentWhite className="sub-title">
              We Are {mobile && <span>WEB-Studio</span>}
            </SectionTitle>
            <SectionTitle main isContentWhite className="title" title="MANTICORE" />
          </Col>
          <Col xs={12} lg={6}>
            <ApolloStatue props={props} move={move} firstLoad={firstLoad} animation={animation}/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
