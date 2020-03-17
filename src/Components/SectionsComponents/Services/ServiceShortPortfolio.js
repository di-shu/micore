import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ProjectsList } from '../../Config'
import { ActiveLink, ImageWrapper, SectionLayout, SectionTitle } from '../../SectionsComponents'
import '~/Styles/Sections/Services/short-portfolio-section.scss'

export const ServiceShortPortfolio = ({ content }) => {
  return (
    <SectionLayout id="service-short-portfolio-section">
      {content}
      <SectionTitle title="Краткое портфолио" isContentWhite />
      <Row>
        {ProjectsList[0].content.map((project, index) => index < 3 && (
          <Col key={`short_project_${index}`} className="col-short-portfolio" xs={12} md={6} lg={4}>
            <ActiveLink link={project.link} className="short-portfolio-link" />
            <ImageWrapper src={project.img} className="short-portfolio-image" />
            <p className="short-portfolio-name">{project.title}</p>
          </Col>
        ))}
      </Row>
      <ActiveLink link="/portfolio" className="custom-btn"><span>SEE MORE</span></ActiveLink>
    </SectionLayout>
  )
}
