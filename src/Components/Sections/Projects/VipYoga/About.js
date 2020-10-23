import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ImageWrapper, SectionDesc, SectionLayout, SectionTitle } from '../../../SectionsComponents'
/*IMAGES*/
const Logo = '/images/VipYoga/Logo.svg'
const AboutImg = '/images/VipYoga/About.png'

export const About = () => {
  return (
    <SectionLayout id="vip-yoga-about" Header={() => <ImageWrapper isDot/>}>
      <Row className="about-row">
        <Col xs={12} lg={6}>
          <SectionTitle title="V.Poltavets"/>
          <SectionDesc>
            Виктория - сертифицированный инструктор по йоге. Уже много лет она проводит индивидуальные и групповые
            тренировки. Для Виктории йога не просто спорт или фитнес, это образ жизни, целая философия. Виктория активно
            ведет соцсети, где делится своим опытом и полезными советами как для новичков в йоге, так и для уже опытных
            практиков.
          </SectionDesc>
        </Col>
        <Col xs={12} lg={6}>
          <ImageWrapper src={AboutImg} className="about-image"/>
        </Col>
        <Col xs={12} className="logo-col">
          <ImageWrapper src={Logo} className="logo-image"/>
        </Col>
      </Row>
    </SectionLayout>
  )
}
