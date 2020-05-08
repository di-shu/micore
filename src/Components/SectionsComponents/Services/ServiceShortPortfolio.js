import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ProjectsList } from '../../Config'
import { ActiveLink, ImageWrapper, MyScrollAnimation, SectionLayout, SectionTitle } from '../../SectionsComponents'

export const ServiceShortPortfolio = ({ content }) => {
  return (
    <SectionLayout id="service-short-portfolio-section">
      {content}
      <MyScrollAnimation>
        <SectionTitle title="Краткое портфолио" isContentWhite />
      </MyScrollAnimation>
      <Row>
        {ProjectsList[0].content.map((project, index) => index < 3 && (
          <Col key={`short_project_${index}`} className="col-short-portfolio" xs={12} md={6} lg={4}>
            <MyScrollAnimation delay={[400]}>
              <div className="short-portfolio-box">
                <ActiveLink link={project.link} className="short-portfolio-link" />
                <ImageWrapper src={project.img} className="short-portfolio-image" />
                <p className="short-portfolio-name">{project.title}</p>
              </div>
            </MyScrollAnimation>
          </Col>
        ))}
      </Row>
      <MyScrollAnimation delay={[600]}>
        <ActiveLink link="/portfolio" className="custom-btn"><span>SEE MORE</span></ActiveLink>
      </MyScrollAnimation>
    </SectionLayout>
  )
}
