import React from 'react'
import { isBrowser } from 'react-device-detect'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ImageWrapper, SectionLayout, SectionTitle } from '../../SectionsComponents'

export const ServiceWorkStages = ({ stages, title }) => {
  return (
    <SectionLayout id="service-work-stages-section" Header={() => <ImageWrapper isDot display={isBrowser} />}>
      <SectionTitle title={title} isContentWhite />
      <Row>
        {stages.map((stage, index) => (
          <Col key={`work_stage_${index}`} xs={12} md={index % 2 !== 0 ? { offset: 1, span: 5 } : 6}>
            <div className="stage-wrap">
              <ImageWrapper src={stage.img} className="stage-image" />
              <p className="stage-name">{stage.name}</p>
            </div>
          </Col>
        ))}
      </Row>
    </SectionLayout>
  )
}
