import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useDeviceDetect } from '../../../Helpers'
import { ImageWrapper, MyScrollAnimation, SectionLayout, SectionTitle } from '../../SectionsComponents'

export const ServiceWorkStages = ({ stages, stagesImages, title }) => {
  const { desktop } = useDeviceDetect()
  const concatStages = stages.map((stage, i) => ({ name: stage, img: stagesImages[i].img }))

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
        {concatStages.map((stage, index) => (
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
