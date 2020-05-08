import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ImageWrapper, MyScrollAnimation, SectionLayout, SectionTitle } from '../../SectionsComponents'
import { useDeviceDetect } from '../../../Helpers'

export const ServiceWorkStages = ({ stages, title }) => {
  const { desktop } = useDeviceDetect()

  return (
    <SectionLayout id="service-work-stages-section" Header={() => (
      <MyScrollAnimation animationName="fadeIn">
        <ImageWrapper isDot display={desktop} />
      </MyScrollAnimation>
    )}>
      <MyScrollAnimation>
        <SectionTitle title={title} isContentWhite />
      </MyScrollAnimation>
      <Row>
        {stages.map((stage, index) => (
          <Col key={`work_stage_${index}`} xs={6} md={index % 2 !== 0 ? { offset: 1, span: 5 } : 6}>
            <div className="stage-wrap">
              <MyScrollAnimation delay={[400, 400]}>
                <ImageWrapper src={stage.img} className="stage-image" />
                <p className="stage-name">{stage.name}</p>
              </MyScrollAnimation>
            </div>
          </Col>
        ))}
      </Row>
    </SectionLayout>
  )
}
